import express, { Request, Response } from 'express';

const app = express();
import exampleRoute from './routes/';
require('./mongo-connection');

app.use('/ekin', exampleRoute);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

module.exports = app;
