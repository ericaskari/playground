import { Service } from 'typedi';
import http from 'http';
import https from 'https';
import express, { Express, Router, Response, Request, NextFunction } from 'express';
import { DatabaseClient } from './clients/database.client';
import { Empty, Picture } from '@protos/database/dist/types/database_pb';
import { PictureById } from '@protos/database/src/types/database_pb';

@Service()
export class Server {
  app: Express = express();
  router: Router = Router();
  httpServer: http.Server = http.createServer({}, this.app);
  httpsServer: http.Server = https.createServer({}, this.app);

  constructor(public databaseClient: DatabaseClient) {
    // this.router.use('/picture', async (request: Request, response: Response) => {
    //   try {
    //     console.log();
    //     console.log('Sending getPicture stream request to database microservice over grpc');
    //     console.log();
    //     const start = new Date();
    //     const pictureReadStream = this.databaseClient.connection.getPictureStreamById(new Empty());
    //     response.write(pictureReadStream);
    //   } catch (e) {
    //     console.log(e);
    //
    //     response.send(e);
    //   }
    // });

    this.router.use('/', async (request: Request, response: Response) => {
      console.log('Sending getPictures request to database microservice over grpc');

      const start = new Date();
      await this.databaseClient.connection.getPictures(new Empty(), (err, res: Picture) => {
        const end = new Date();
        console.log('New Response from database microservice: getPictures method ');
        console.log('Response time: ', end.getTime() - start.getTime(), 'ms');
        response.send({ res, time: end.getTime() - start.getTime(), err });
      });
    });

    this.app.use(this.router);

    http.createServer({}, this.app).listen(8080, () => {
      console.log('Listening to port 8000');
    });
  }
  http = async () => {
    return this.httpServer;
  };
}
