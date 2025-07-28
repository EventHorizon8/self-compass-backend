import "reflect-metadata"
import {DataSource} from "typeorm"
import config from "./config";

export const AppDataSource = new DataSource({
  type: config.database.type,
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.name,
  synchronize: false,
  logging: false,
  entities: [
    __dirname + '/../entity/*{.ts,.js}'
  ],
  migrations: [
    __dirname + '/../migration/*{.ts,.js}'
  ],
  subscribers: [],
  migrationsTableName: "db_migrations",
})
