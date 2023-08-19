import { Service } from 'typedi';
import { DatabaseClient as DatabaseClientProto } from '@protos/database/dist/types/database_grpc_pb';
import { ProtoDatabaseClientCredential } from '@protos/database';
import { Empty, Picture } from '@protos/database/dist/types/database_pb';

@Service()
export class DatabaseClient {
  connection = new DatabaseClientProto('database:50051', ProtoDatabaseClientCredential, {});

  constructor() {}
}
