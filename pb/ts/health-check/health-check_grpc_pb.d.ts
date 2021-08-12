// package: grpc.health.v1
// file: health-check.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as health_check_pb from "./health-check_pb";

interface IHealthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    check: IHealthService_ICheck;
}

interface IHealthService_ICheck extends grpc.MethodDefinition<health_check_pb.HealthCheckRequest, health_check_pb.HealthCheckResponse> {
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
    check: grpc.handleUnaryCall<health_check_pb.HealthCheckRequest, health_check_pb.HealthCheckResponse>;
}

export interface IHealthClient {
    check(request: health_check_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: health_check_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    check(request: health_check_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: health_check_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    check(request: health_check_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: health_check_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}

export class HealthClient extends grpc.Client implements IHealthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public check(request: health_check_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: health_check_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: health_check_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: health_check_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: health_check_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: health_check_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}
