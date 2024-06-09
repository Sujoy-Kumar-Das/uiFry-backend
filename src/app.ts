import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routers';

const app: Application = express();

// application middlewares
app.use(express.json());
app.use(cors());

// application routers
app.use(router);

export default app;
