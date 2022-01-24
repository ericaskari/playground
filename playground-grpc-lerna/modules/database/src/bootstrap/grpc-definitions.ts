import { DatabaseService as GrpcDatabaseService } from '@protos/database/dist/types/database_grpc_pb';
import { Service } from 'typedi';
@Service()
export class GrpcDefinitions {
  databaseServiceDefinition = GrpcDatabaseService;
}
