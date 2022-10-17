// package: fetcher
// file: fetcher.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FetchPageTitleRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchPageTitleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FetchPageTitleRequest): FetchPageTitleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FetchPageTitleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FetchPageTitleRequest;
    static deserializeBinaryFromReader(message: FetchPageTitleRequest, reader: jspb.BinaryReader): FetchPageTitleRequest;
}

export namespace FetchPageTitleRequest {
    export type AsObject = {
    }
}

export class FetchPageTitleReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchPageTitleReply.AsObject;
    static toObject(includeInstance: boolean, msg: FetchPageTitleReply): FetchPageTitleReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FetchPageTitleReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FetchPageTitleReply;
    static deserializeBinaryFromReader(message: FetchPageTitleReply, reader: jspb.BinaryReader): FetchPageTitleReply;
}

export namespace FetchPageTitleReply {
    export type AsObject = {
    }
}
