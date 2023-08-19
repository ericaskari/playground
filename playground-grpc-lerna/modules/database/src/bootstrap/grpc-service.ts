import { Service } from 'typedi';
import { Server } from '@grpc/grpc-js';
import { DatabaseService } from '../services/database/database.service';
import { GrpcDefinitions } from './grpc-definitions';

@Service()
export class GrpcService {
  constructor(private grpcDefinitions: GrpcDefinitions, private databaseService: DatabaseService) {}

  addServices = (server: Server) => {
    server.addService(this.grpcDefinitions.databaseServiceDefinition, { ...this.databaseService });
  };
}
