import config from './config/config';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  res.send(`Hello World! Running as ${config.nodeEnv}`);
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
