import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

export class PostgresConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'postgres',
      entities: [],
      synchronize: true,
    };
  }

}
