import express, { Application } from 'express';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import IndexRoutes from '../routes/index.routes';
import InsightsRoutes from '../routes/insights.routes';
import CategoryRoutes from '../routes/categorys.routes';

export class Server {
  private app : Application;

  // eslint-disable-next-line no-unused-vars
  constructor(private port ?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 8080);
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use((req, res, next): void => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
      res.header('Access-Control-Allow-Methods', 'GET, POST');
      next();
    });
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use('/insights', InsightsRoutes);
    this.app.use('/insights/category', CategoryRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }
}
