import dotenv from 'dotenv';

dotenv.config({
  path: ['.env.local', '.env']
});

interface Config {
  port: number;
  nodeEnv: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 0,
  nodeEnv: process.env.NODE_ENV || '',
};

export default config;