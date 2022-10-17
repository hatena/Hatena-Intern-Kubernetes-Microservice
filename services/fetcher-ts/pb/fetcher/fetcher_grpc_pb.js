// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var fetcher_pb = require('./fetcher_pb.js');

function serialize_fetcher_FetchPageTitleReply(arg) {
  if (!(arg instanceof fetcher_pb.FetchPageTitleReply)) {
    throw new Error('Expected argument of type fetcher.FetchPageTitleReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fetcher_FetchPageTitleReply(buffer_arg) {
  return fetcher_pb.FetchPageTitleReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fetcher_FetchPageTitleRequest(arg) {
  if (!(arg instanceof fetcher_pb.FetchPageTitleRequest)) {
    throw new Error('Expected argument of type fetcher.FetchPageTitleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fetcher_FetchPageTitleRequest(buffer_arg) {
  return fetcher_pb.FetchPageTitleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FetcherService = exports.FetcherService = {
  fetchPageTitle: {
    path: '/fetcher.Fetcher/FetchPageTitle',
    requestStream: false,
    responseStream: false,
    requestType: fetcher_pb.FetchPageTitleRequest,
    responseType: fetcher_pb.FetchPageTitleReply,
    requestSerialize: serialize_fetcher_FetchPageTitleRequest,
    requestDeserialize: deserialize_fetcher_FetchPageTitleRequest,
    responseSerialize: serialize_fetcher_FetchPageTitleReply,
    responseDeserialize: deserialize_fetcher_FetchPageTitleReply,
  },
};

exports.FetcherClient = grpc.makeGenericClientConstructor(FetcherService);
