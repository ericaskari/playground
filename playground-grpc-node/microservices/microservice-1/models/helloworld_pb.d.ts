// package: GreeterPackage
// file: helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class HelloMessage extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloMessage.AsObject;
    static toObject(includeInstance: boolean, msg: HelloMessage): HelloMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloMessage;
    static deserializeBinaryFromReader(message: HelloMessage, reader: jspb.BinaryReader): HelloMessage;
}

export namespace HelloMessage {
    export type AsObject = {
        message: string,
    }
}

export class HelloResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloResponse;
    static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
    export type AsObject = {
        message: string,
    }
}

export class GoodbyeMessage extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): GoodbyeMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GoodbyeMessage.AsObject;
    static toObject(includeInstance: boolean, msg: GoodbyeMessage): GoodbyeMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GoodbyeMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GoodbyeMessage;
    static deserializeBinaryFromReader(message: GoodbyeMessage, reader: jspb.BinaryReader): GoodbyeMessage;
}

export namespace GoodbyeMessage {
    export type AsObject = {
        message: string,
    }
}

export class GoodbyeResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): GoodbyeResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GoodbyeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GoodbyeResponse): GoodbyeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GoodbyeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GoodbyeResponse;
    static deserializeBinaryFromReader(message: GoodbyeResponse, reader: jspb.BinaryReader): GoodbyeResponse;
}

export namespace GoodbyeResponse {
    export type AsObject = {
        message: string,
    }
}
