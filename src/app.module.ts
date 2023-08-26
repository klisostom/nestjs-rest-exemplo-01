import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { PostgresConfigService } from "./config/postgres.config.service";
import { ProdutoModule } from "./produto/produto.module";
import { ProdutoService } from "./produto/produto.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioModule } from "./usuario/usuario.module";
import { UsuarioService } from "./usuario/usuario.service";

@Module({
  imports: [
    UsuarioModule,
    ProdutoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: ["postgresConfigService"],
    }),
  ],
  controllers: [],
  providers: [UsuarioService, ProdutoService],
})
export class AppModule {}
