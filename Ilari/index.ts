import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import config from './src/utils/config';
import { info } from './src/utils/logger';

import express from 'express';

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  info('someone pinged here');
  res.send('pong');
});


app.listen(config.PORT, () => {
  info(`Server running on port ${config.PORT}`);
});
