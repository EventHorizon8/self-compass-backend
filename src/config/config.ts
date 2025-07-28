import dotenv from 'dotenv';

dotenv.config({
  path: ['.env.local', '.env']
});

type DdTypes = 'postgres'|'mysql';

const validateDdType = (value: string|undefined): DdTypes => {
  switch (value) {
    case 'postgres':
    case 'mysql':
      return value;
    default:
      return 'postgres';
  }
}

interface Config {
  port: number;
  nodeEnv: string;
  database: {
    type: DdTypes;
    host: string;
    port: number;
    name: string;
    username: string;
    password: string;
  }
}

const config: Config = {
  port: Number(process.env.PORT) || 0,
  nodeEnv: process.env.NODE_ENV || '',
  database: {
    type: validateDdType(process.env.DATABASE_TYPE),
    host: process.env.DATABASE_HOST || '',
    port: Number(process.env.DATABASE_PORT) || 5432,
    name: process.env.DATABASE_NAME || '',
    username: process.env.DATABASE_USERNAME || '',
    password: process.env.DATABASE_PASSWORD || '',
  },
};

export default config;