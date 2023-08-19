import { Service } from 'typedi';
import { ProtoDatabaseServer } from '@protos/database';
import { Picture, PictureById } from '@protos/database/dist/types/database_pb';
import { handleUnaryCall, ServerWritableStream } from '@grpc/grpc-js';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import path from 'path';
import * as fs from 'fs';
import { FileDownloadRequest, ImageFile } from '@protos/database/src/types/database_pb';
@Service()
export class DatabaseService implements ProtoDatabaseServer {
  getPictures: handleUnaryCall<Empty, Picture> = (call, callback) => {
    console.log('New data request: getPictures');
    console.log('Responding request: Picture with Id: 123');
    callback(null, new Picture().setId(123));
  };

  getPictureById: handleUnaryCall<PictureById, Picture> = (call, callback) => {
    console.log('New data request: getPictureById');
    console.log('Responding request: Picture with Id: 123');

    callback(null, new Picture().setId(123));
  };
  getPictureStreamById = (call: ServerWritableStream<Empty, FileDownloadRequest>) => {
    console.log('New data stream request: getPictureStreamById');
    console.log('Responding request: Picture with: pic-1.jpeg');
    const data = fs.createReadStream(path.join(__dirname, '../', '../', 'assets', 'pic-1.jpeg'));

    data.on('data', (chunk) => {
      console.log('Writing ...');
      call.write(new FileDownloadRequest());
    });
    data.on('close', () => {
      console.log('Finished');
    });
  };
}
