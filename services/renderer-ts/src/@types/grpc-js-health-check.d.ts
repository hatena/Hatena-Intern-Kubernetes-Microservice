declare module "grpc-js-health-check" {
  import jspb from "google-protobuf";
  import * as grpc from "@grpc/grpc-js";

  // pb/ts/health-check/health-check_pb.d.ts
  namespace health_check_pb {
    export class HealthCheckRequest extends jspb.Message {
      getService(): string;
      setService(value: string): HealthCheckRequest;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
      static toObject(
        includeInstance: boolean,
        msg: HealthCheckRequest
      ): HealthCheckRequest.AsObject;
      static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
      static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
      static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
      static deserializeBinaryFromReader(
        message: HealthCheckRequest,
        reader: jspb.BinaryReader
      ): HealthCheckRequest;
    }

    export namespace HealthCheckRequest {
      export type AsObject = {
        service: string;
      };
    }

    export class HealthCheckResponse extends jspb.Message {
      getStatus(): HealthCheckResponse.ServingStatus;
      setStatus(value: HealthCheckResponse.ServingStatus): HealthCheckResponse;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): HealthCheckResponse.AsObject;
      static toObject(
        includeInstance: boolean,
        msg: HealthCheckResponse
      ): HealthCheckResponse.AsObject;
      static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
      static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
      static serializeBinaryToWriter(message: HealthCheckResponse, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): HealthCheckResponse;
      static deserializeBinaryFromReader(
        message: HealthCheckResponse,
        reader: jspb.BinaryReader
      ): HealthCheckResponse;
    }

    export namespace HealthCheckResponse {
      export type AsObject = {
        status: HealthCheckResponse.ServingStatus;
      };

      export enum ServingStatus {
        UNKNOWN = 0,
        SERVING = 1,
        NOT_SERVING = 2,
        SERVICE_UNKNOWN = 3,
      }
    }
  }
  // end pb/ts/health-check/health-check_pb.d.ts

  // pb/ts/health-check/health-check_grpc_pb.d.ts
  namespace health_check_grpc_pb {
    // package: grpc.health.v1
    // file: health.proto

    interface IHealthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
      check: IHealthService_ICheck;
    }

    interface IHealthService_ICheck
      extends grpc.MethodDefinition<
        health_check_pb.HealthCheckRequest,
        health_check_pb.HealthCheckResponse
      > {
      path: "/grpc.health.v1.Health/Check";
      requestStream: false;
      responseStream: false;
      requestSerialize: grpc.serialize<health_check_pb.HealthCheckRequest>;
      requestDeserialize: grpc.deserialize<health_check_pb.HealthCheckRequest>;
      responseSerialize: grpc.serialize<health_check_pb.HealthCheckResponse>;
      responseDeserialize: grpc.deserialize<health_check_pb.HealthCheckResponse>;
    }

    export const HealthService: IHealthService;

    export interface IHealthServer extends grpc.UntypedServiceImplementation {
      check: grpc.handleUnaryCall<
        health_check_pb.HealthCheckRequest,
        health_check_pb.HealthCheckResponse
      >;
    }

    export interface IHealthClient {
      check(
        request: health_check_pb.HealthCheckRequest,
        callback: (
          error: grpc.ServiceError | null,
          response: health_check_pb.HealthCheckResponse
        ) => void
      ): grpc.ClientUnaryCall;
      check(
        request: health_check_pb.HealthCheckRequest,
        metadata: grpc.Metadata,
        callback: (
          error: grpc.ServiceError | null,
          response: health_check_pb.HealthCheckResponse
        ) => void
      ): grpc.ClientUnaryCall;
      check(
        request: health_check_pb.HealthCheckRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
          error: grpc.ServiceError | null,
          response: health_check_pb.HealthCheckResponse
        ) => void
      ): grpc.ClientUnaryCall;
    }

    export class HealthClient extends grpc.Client implements IHealthClient {
      constructor(
        address: string,
        credentials: grpc.ChannelCredentials,
        options?: Partial<grpc.ClientOptions>
      );
      public check(
        request: health_check_pb.HealthCheckRequest,
        callback: (
          error: grpc.ServiceError | null,
          response: health_check_pb.HealthCheckResponse
        ) => void
      ): grpc.ClientUnaryCall;
      public check(
        request: health_check_pb.HealthCheckRequest,
        metadata: grpc.Metadata,
        callback: (
          error: grpc.ServiceError | null,
          response: health_check_pb.HealthCheckResponse
        ) => void
      ): grpc.ClientUnaryCall;
      public check(
        request: health_check_pb.HealthCheckRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (
          error: grpc.ServiceError | null,
          response: health_check_pb.HealthCheckResponse
        ) => void
      ): grpc.ClientUnaryCall;
    }
  }
  // end pb/ts/health-check/health-check_grpc_pb.d.ts

  const status: "UNKNOWN" | "SERVING" | "NOT_SERVING" | "SERVICE_UNKNOWN";
  type Status = typeof status;
  type StatusMap = Readonly<{
    [service: string]: Status;
  }>;

  class HealthImplementation {
    constructor(statusMap: StatusMap);
    setStatus(service: string, status: Status): void;
    check(
      call: grpc.ServerUnaryCall<
        health_check_pb.HealthCheckRequest,
        health_check_pb.HealthCheckResponse
      >,
      callback: grpc.sendUnaryData<health_check_pb.HealthCheckResponse>
    ): void;
  }
  export const servingStatus: Readonly<{
    UNKNOWN: "UNKNOWN";
    SERVING: "SERVING";
    NOT_SERVING: "NOT_SERVING";
    SERVICE_UNKNOWN: "SERVICE_UNKNOWN";
  }>;
  export const service: health_check_grpc_pb.IHealthService;
  export { HealthImplementation as Implementation };
  export type IHealthServer = health_check_grpc_pb.IHealthServer;
}
