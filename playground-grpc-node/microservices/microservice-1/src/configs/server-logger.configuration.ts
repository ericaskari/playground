import { Express } from 'express';
import morgan from 'morgan';
import { Service } from 'typedi';

@Service()
export class ServerLoggerConfigurationService {
  apply(app: Express): void {
    app.use(
      morgan('dev', {
        skip: (req) => {
          return req.method === 'OPTIONS';
        }
      })
    ); // log every request to the console
  }
}
