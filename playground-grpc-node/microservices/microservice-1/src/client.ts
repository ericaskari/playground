import * as grpc from '@grpc/grpc-js';

import { GreeterClient } from '../models/helloworld_grpc_pb';
import { HelloMessage } from '../models/helloworld_pb';

const greeterClient = new GreeterClient('0.0.0.0:50051', grpc.credentials.createInsecure(), {});
greeterClient.sayHello(new HelloMessage().setMessage('HI BITCH'), (error, response) => {
  console.log({ response, error });
});
console.log('greeterClient Created');
