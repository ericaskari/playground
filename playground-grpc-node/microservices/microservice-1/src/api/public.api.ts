import { Router } from 'express';
import { Service } from 'typedi';

@Service()
export class PublicRoutesController {
  router: Router = Router();

  constructor() {}
}
