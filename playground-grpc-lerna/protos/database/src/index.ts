import { credentials, handleUnaryCall, ServerWritableStream } from '@grpc/grpc-js';
import { Empty, FileDownloadRequest, ImageFile, Picture, PictureById } from './types/database_pb';
import { DatabaseService, IDatabaseServer } from './types/database_grpc_pb';
import { DatabaseClient } from './types/database_grpc_pb';

export class ProtoDatabaseServer implements IDatabaseServer {
  getPictureById: handleUnaryCall<PictureById, Picture>;
  getPictures: handleUnaryCall<Empty, Picture>;
  getPictureStreamById(call: ServerWritableStream<Empty, FileDownloadRequest>): void {}
}

export const ProtoDatabaseService = DatabaseService;
export const ProtoDatabaseClient = DatabaseClient;
export const ProtoDatabaseClientCredential = credentials.createInsecure();
