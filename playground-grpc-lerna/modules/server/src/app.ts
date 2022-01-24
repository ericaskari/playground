// import express, { Express } from 'express';
// import helmet from 'helmet';
// import { Service } from 'typedi';
//
// import path from 'path';
//
// import { ServerCorsConfigurationService } from './configs/server-cors.configuration';
// import { ServerLoggerConfigurationService } from './configs/server-logger.configuration';
// import { ServerParserConfigurationService } from './configs/server-parser.configuration';
// import { RouterService } from './routes';
// import { ApiErrorHandler } from './services-utilities/error.handler';
//
// @Service()
// export class AppService {
//   app: Express;
//   constructor(
//     private routerService: RouterService,
//     private pars: ServerParserConfigurationService,
//     private logg: ServerLoggerConfigurationService,
//     private cors: ServerCorsConfigurationService,
//     private apiErrorHandler: ApiErrorHandler
//   ) {
//     this.app = express(); // create our app w/ express
//     this.initMiddleWares();
//     this.initPublicDirectory();
//     this.initSecurity();
//     this.initRouting();
//   }
//   private initMiddleWares = () => {
//     this.pars.apply(this.app);
//     this.logg.apply(this.app);
//     this.cors.apply(this.app);
//   };
//   private initPublicDirectory = () => {
//     // set the static files location ./dist will be /img for users
//     this.app.use(express.static(path.join(__dirname, '/dist')));
//   };
//   private initSecurity = () => {
//     this.app.use(helmet());
//   };
//   private initRouting = () => {
//     this.app.use('/api', this.routerService.publicRouter);
//     this.app.use('*', this.apiErrorHandler.apiErrorHandler);
//
//     this.app.get('*', (req, res) => {
//       res.status(404).send({ message: 'Nothing here!' });
//     });
//   };
// }
