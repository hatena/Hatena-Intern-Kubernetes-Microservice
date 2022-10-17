// package: fetcher
// file: fetcher.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as fetcher_pb from "./fetcher_pb";

interface IFetcherService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    fetchPageTitle: IFetcherService_IFetchPageTitle;
}

interface IFetcherService_IFetchPageTitle extends grpc.MethodDefinition<fetcher_pb.FetchPageTitleRequest, fetcher_pb.FetchPageTitleReply> {
    path: "/fetcher.Fetcher/FetchPageTitle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<fetcher_pb.FetchPageTitleRequest>;
    requestDeserialize: grpc.deserialize<fetcher_pb.FetchPageTitleRequest>;
    responseSerialize: grpc.serialize<fetcher_pb.FetchPageTitleReply>;
    responseDeserialize: grpc.deserialize<fetcher_pb.FetchPageTitleReply>;
}

export const FetcherService: IFetcherService;

export interface IFetcherServer extends grpc.UntypedServiceImplementation {
    fetchPageTitle: grpc.handleUnaryCall<fetcher_pb.FetchPageTitleRequest, fetcher_pb.FetchPageTitleReply>;
}

export interface IFetcherClient {
    fetchPageTitle(request: fetcher_pb.FetchPageTitleRequest, callback: (error: grpc.ServiceError | null, response: fetcher_pb.FetchPageTitleReply) => void): grpc.ClientUnaryCall;
    fetchPageTitle(request: fetcher_pb.FetchPageTitleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fetcher_pb.FetchPageTitleReply) => void): grpc.ClientUnaryCall;
    fetchPageTitle(request: fetcher_pb.FetchPageTitleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fetcher_pb.FetchPageTitleReply) => void): grpc.ClientUnaryCall;
}

export class FetcherClient extends grpc.Client implements IFetcherClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public fetchPageTitle(request: fetcher_pb.FetchPageTitleRequest, callback: (error: grpc.ServiceError | null, response: fetcher_pb.FetchPageTitleReply) => void): grpc.ClientUnaryCall;
    public fetchPageTitle(request: fetcher_pb.FetchPageTitleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: fetcher_pb.FetchPageTitleReply) => void): grpc.ClientUnaryCall;
    public fetchPageTitle(request: fetcher_pb.FetchPageTitleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: fetcher_pb.FetchPageTitleReply) => void): grpc.ClientUnaryCall;
}
