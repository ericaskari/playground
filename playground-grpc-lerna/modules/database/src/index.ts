import 'reflect-metadata';
import { Container } from 'typedi';
import { GrpcServer } from './bootstrap/grpc-server';

Container.get(GrpcServer)
  .start()
  .then((port) => {
    console.log('Server started on port: ', port);
  })
  .catch((err) => {
    console.error('Errored');
    process.exit(1);
  });
