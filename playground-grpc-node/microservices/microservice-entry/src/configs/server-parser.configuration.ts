import bodyParser from 'body-parser';
import { Express } from 'express';
import { Service } from 'typedi';

@Service()
export class ServerParserConfigurationService {
  apply(app: Express): void {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json()); // parse application/json
  }
}
