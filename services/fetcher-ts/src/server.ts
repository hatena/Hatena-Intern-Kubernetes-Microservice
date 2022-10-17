import health from "grpc-js-health-check";
import winston from "winston";
import { FetchPageTitleRequest, FetchPageTitleReply } from "../pb/fetcher/fetcher_pb";
import { IFetcherServer } from "../pb/fetcher/fetcher_grpc_pb";
import { UnaryHandler, unaryHandler, createLoggingMiddleware } from "./server-utils";

export interface Server {
  fetcher: IFetcherServer;
  health: health.IHealthServer;
}

/**
 * サーバー (IFetcherServer) を作成する
 */
export function createServer(logger: winston.Logger): Server {
  const healthImpl = new health.Implementation({
    "": health.servingStatus.SERVING,
    "fetcher.Fetcher": health.servingStatus.SERVING,
  });
  const loggingMiddleware = createLoggingMiddleware(logger);
  return {
    health: {
      check: healthImpl.check.bind(healthImpl),
    },
    fetcher: {
      fetchPageTitle: unaryHandler(
        handleFetchPageTitle,
        loggingMiddleware("fetcher.Fetcher/fetchPageTitle")
      ),
    },
  };
}

/**
 * fetcher.Fetcher/Fetcher に対するハンドラ
 */
export const handleFetchPageTitle: UnaryHandler<
  FetchPageTitleRequest,
  FetchPageTitleReply
> = async () => {
  // TODO: ここに FetchPageTitle の中身を実装する
  const reply = new FetchPageTitleReply();
  return reply;
};
