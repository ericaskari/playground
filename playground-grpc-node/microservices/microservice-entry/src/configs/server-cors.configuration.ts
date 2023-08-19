import cors from 'cors';
import { Express } from 'express';
import { Service } from 'typedi';

import { EnvService } from './env.service';

interface CorsConfigurationInterface {
  hosts: string[];
  apply(app: Express): void;
}

@Service()
export class ServerCorsConfigurationService implements CorsConfigurationInterface {
  constructor(private envService: EnvService) {}
  hosts = [this.envService.FRONTEND_ADDRESS];

  corsOptions = {
    origin: this.hosts,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200
  };
  // constructor() {}

  apply(app: Express): void {
    if (this.envService.PRODUCTION) {
      app.use(cors(this.corsOptions));
    } else {
      app.use(cors());
    }
  }
}
