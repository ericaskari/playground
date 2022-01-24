// package: database
// file: database.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as database_pb from "./database_pb";

interface IDatabaseService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPictures: IDatabaseService_IGetPictures;
    getPictureById: IDatabaseService_IGetPictureById;
    getPictureStreamById: IDatabaseService_IGetPictureStreamById;
}

interface IDatabaseService_IGetPictures extends grpc.MethodDefinition<database_pb.Empty, database_pb.Picture> {
    path: "/database.Database/GetPictures";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<database_pb.Empty>;
    requestDeserialize: grpc.deserialize<database_pb.Empty>;
    responseSerialize: grpc.serialize<database_pb.Picture>;
    responseDeserialize: grpc.deserialize<database_pb.Picture>;
}
interface IDatabaseService_IGetPictureById extends grpc.MethodDefinition<database_pb.PictureById, database_pb.Picture> {
    path: "/database.Database/GetPictureById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<database_pb.PictureById>;
    requestDeserialize: grpc.deserialize<database_pb.PictureById>;
    responseSerialize: grpc.serialize<database_pb.Picture>;
    responseDeserialize: grpc.deserialize<database_pb.Picture>;
}
interface IDatabaseService_IGetPictureStreamById extends grpc.MethodDefinition<database_pb.Empty, database_pb.FileDownloadRequest> {
    path: "/database.Database/GetPictureStreamById";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<database_pb.Empty>;
    requestDeserialize: grpc.deserialize<database_pb.Empty>;
    responseSerialize: grpc.serialize<database_pb.FileDownloadRequest>;
    responseDeserialize: grpc.deserialize<database_pb.FileDownloadRequest>;
}

export const DatabaseService: IDatabaseService;

export interface IDatabaseServer {
    getPictures: grpc.handleUnaryCall<database_pb.Empty, database_pb.Picture>;
    getPictureById: grpc.handleUnaryCall<database_pb.PictureById, database_pb.Picture>;
    getPictureStreamById: grpc.handleServerStreamingCall<database_pb.Empty, database_pb.FileDownloadRequest>;
}

export interface IDatabaseClient {
    getPictures(request: database_pb.Empty, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    getPictures(request: database_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    getPictures(request: database_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    getPictureById(request: database_pb.PictureById, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    getPictureById(request: database_pb.PictureById, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    getPictureById(request: database_pb.PictureById, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    getPictureStreamById(request: database_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<database_pb.FileDownloadRequest>;
    getPictureStreamById(request: database_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<database_pb.FileDownloadRequest>;
}

export class DatabaseClient extends grpc.Client implements IDatabaseClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getPictures(request: database_pb.Empty, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    public getPictures(request: database_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    public getPictures(request: database_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    public getPictureById(request: database_pb.PictureById, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    public getPictureById(request: database_pb.PictureById, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    public getPictureById(request: database_pb.PictureById, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: database_pb.Picture) => void): grpc.ClientUnaryCall;
    public getPictureStreamById(request: database_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<database_pb.FileDownloadRequest>;
    public getPictureStreamById(request: database_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<database_pb.FileDownloadRequest>;
}
