import 'reflect-metadata';
import { Container } from 'typedi';

import { Server } from './server';
import { Empty } from '@protos/database/dist/types/database_pb';

const server = Container.get(Server);

server.http().then(() => {
  console.log('Server     Ready');
  console.log('Calling database microservice over grpc in 5s');

  setTimeout(() => {
    console.log('');
    console.log('');
    console.log('Sending getPictures request to database microservice over grpc');
    server.databaseClient.connection.getPictures(new Empty(), (err, response) => {
      if (err) {
        console.log('Error: ', err);
        return;
      }
      console.log('New Response from database microservice: getPictures method ');
      console.log(response.getId());
    });
  }, 5000);
});

export default server;
