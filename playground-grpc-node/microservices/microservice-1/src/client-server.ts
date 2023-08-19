import { ServerCredentials, Server, handleUnaryCall } from '@grpc/grpc-js';
import { GreeterService, IGreeterServer } from '../models/helloworld_grpc_pb';
import { HelloMessage, HelloResponse } from '../models/helloworld_pb';

console.log('Creating...');
console.log('Adding...');

export class OurGreeter implements IGreeterServer {
  sayGoodbye: handleUnaryCall<HelloMessage, HelloResponse> = (call, callback) => {
    console.log(call.request);
    callback(null, new HelloResponse().setMessage('Ok'));
  };

  sayHello: handleUnaryCall<HelloMessage, HelloResponse> = (call, callback) => {
    console.log(call.request);
    callback(null, new HelloResponse().setMessage('Ok'));
  };
}
const OurGreeterImplementation = new OurGreeter();

const server = new Server();
server.addService(GreeterService, { ...OurGreeterImplementation });
server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), (error, port) => {
  console.log({ error, port });
  console.log('Starting...');
  server.start();
});
