import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import IndexRoutes from './routes/index.routes';
import PostRoutes from './routes/posts.routes';

export class App {
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
  }

  routes() {
    this.app.use(IndexRoutes);
    this.app.use('/insights', PostRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }
}
