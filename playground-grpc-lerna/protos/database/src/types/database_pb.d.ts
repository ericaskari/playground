// package: database
// file: database.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 
    getId(): number;
    setId(value: number): Empty;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
        id: number,
    }
}

export class Picture extends jspb.Message { 
    getId(): number;
    setId(value: number): Picture;

    getTitle(): string;
    setTitle(value: string): Picture;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Picture.AsObject;
    static toObject(includeInstance: boolean, msg: Picture): Picture.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Picture, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Picture;
    static deserializeBinaryFromReader(message: Picture, reader: jspb.BinaryReader): Picture;
}

export namespace Picture {
    export type AsObject = {
        id: number,
        title: string,
    }
}

export class PictureById extends jspb.Message { 
    getId(): number;
    setId(value: number): PictureById;

    getTitle(): string;
    setTitle(value: string): PictureById;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PictureById.AsObject;
    static toObject(includeInstance: boolean, msg: PictureById): PictureById.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PictureById, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PictureById;
    static deserializeBinaryFromReader(message: PictureById, reader: jspb.BinaryReader): PictureById;
}

export namespace PictureById {
    export type AsObject = {
        id: number,
        title: string,
    }
}

export class ImageFile extends jspb.Message { 

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): Uint8Array | string;
    getChunk_asU8(): Uint8Array;
    getChunk_asB64(): string;
    setChunk(value: Uint8Array | string): ImageFile;


    getDataCase(): ImageFile.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageFile.AsObject;
    static toObject(includeInstance: boolean, msg: ImageFile): ImageFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageFile;
    static deserializeBinaryFromReader(message: ImageFile, reader: jspb.BinaryReader): ImageFile;
}

export namespace ImageFile {
    export type AsObject = {
        chunk: Uint8Array | string,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
    
    CHUNK = 2,

    }

}

export class MetaData extends jspb.Message { 
    getName(): string;
    setName(value: string): MetaData;

    getType(): string;
    setType(value: string): MetaData;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetaData.AsObject;
    static toObject(includeInstance: boolean, msg: MetaData): MetaData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetaData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetaData;
    static deserializeBinaryFromReader(message: MetaData, reader: jspb.BinaryReader): MetaData;
}

export namespace MetaData {
    export type AsObject = {
        name: string,
        type: string,
    }
}

export class File extends jspb.Message { 
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): File;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): File.AsObject;
    static toObject(includeInstance: boolean, msg: File): File.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): File;
    static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
    export type AsObject = {
        content: Uint8Array | string,
    }
}

export class FileDownloadRequest extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): MetaData | undefined;
    setMetadata(value?: MetaData): FileDownloadRequest;


    hasFile(): boolean;
    clearFile(): void;
    getFile(): File | undefined;
    setFile(value?: File): FileDownloadRequest;


    getRequestCase(): FileDownloadRequest.RequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileDownloadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FileDownloadRequest): FileDownloadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileDownloadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileDownloadRequest;
    static deserializeBinaryFromReader(message: FileDownloadRequest, reader: jspb.BinaryReader): FileDownloadRequest;
}

export namespace FileDownloadRequest {
    export type AsObject = {
        metadata?: MetaData.AsObject,
        file?: File.AsObject,
    }

    export enum RequestCase {
        REQUEST_NOT_SET = 0,
    
    METADATA = 1,

    FILE = 2,

    }

}
