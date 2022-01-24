import { Router } from 'express';
import { Service } from 'typedi';

@Service()
export class AuthPublicRouteController {
  router: Router = Router();

  constructor() {}
}
