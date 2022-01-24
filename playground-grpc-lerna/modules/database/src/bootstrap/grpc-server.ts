import { Server, ServerCredentials } from '@grpc/grpc-js';
import { Service } from 'typedi';
import 'reflect-metadata';
import { GrpcService } from './grpc-service';

@Service()
export class GrpcServer {
  server = new Server();
  constructor(private grpcService: GrpcService) {
    this.grpcService.addServices(this.server);
  }

  start = async (): Promise<number> => {
    return new Promise((resolve, reject) => {
      try {
        this.server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), (error, port) => {
          this.server.start();
          resolve(50051);
        });
      } catch (e) {
        reject(e);
      }
    });
  };
}
