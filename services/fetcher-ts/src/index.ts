import * as grpc from "@grpc/grpc-js";
import health from "grpc-js-health-check";
import winston from "winston";
import { FetcherService } from "../pb/fetcher/fetcher_grpc_pb";
import { loadConfig } from "./config";
import { createServer } from "./server";

main().catch((err) => {
  process.stderr.write(String(err) + "\n");
  process.exit(1); // eslint-disable-line no-process-exit
});

async function main() {
  // 設定をロード
  const config = loadConfig();

  // ロガーを初期化
  const logger = winston.createLogger({
    level: config.mode === "development" ? "debug" : "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      config.mode === "development" ? winston.format.simple() : winston.format.json()
    ),
    transports: [new winston.transports.Console()],
  });
  grpc.setLogger({
    error: (...params: readonly unknown[]) => {
      logger.error("gRPC internal error", { data: params });
    },
    debug: (...params: readonly unknown[]) => {
      logger.debug("gRPC internal debug info", { data: params });
    },
    info: (...params: readonly unknown[]) => {
      logger.info("gRPC internal info", { data: params });
    },
  });
  grpc.setLogVerbosity(
    config.mode === "development" ? grpc.logVerbosity.DEBUG : grpc.logVerbosity.INFO
  );

  // サーバーを起動
  logger.info(`starting gRPC server (port = ${config.grpcPort})`);
  const s = new grpc.Server();
  const server = createServer(logger);
  s.addService(FetcherService, server.fetcher);
  s.addService(health.service, server.health);
  await bind(s, `0.0.0.0:${config.grpcPort}`, grpc.ServerCredentials.createInsecure());
  s.start();
  stop(s, config.gracefulStopTimeout, logger);
}

function bind(s: grpc.Server, port: string, creds: grpc.ServerCredentials): Promise<void> {
  return new Promise((resolve, reject) => {
    s.bindAsync(port, creds, (err, port) => {
      if (err) {
        reject(err);
        return;
      }
      if (port === 0) {
        reject(new Error("address already in use"));
        return;
      }
      resolve();
    });
  });
}

function stop(s: grpc.Server, gracefulStopTimeout: number, logger: winston.Logger): void {
  let stopping = false;

  const stop = (): void => {
    if (stopping) {
      return;
    }
    stopping = true;
    logger.info("gracefully stopping server");
    const timeout = setTimeout(() => {
      logger.info(`stopping server (not stopped in ${gracefulStopTimeout} ms)`);
      s.forceShutdown();
    }, gracefulStopTimeout);
    s.tryShutdown(() => {
      clearTimeout(timeout);
    });
  };

  process.on("SIGINT", stop);
  process.on("SIGTERM", stop);
}
