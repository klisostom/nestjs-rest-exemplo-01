import { Module } from "@nestjs/common";
import { UsuarioModule } from "./usuario/usuario.module";
import { UsuarioService } from "./usuario/usuario.service";
import { ProdutoService } from "./produto/produto.service";
import { ProdutoModule } from "./produto/produto.module";
import { PostgresConfigService } from "./config/postgres.config.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    UsuarioModule,
    ProdutoModule,
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: ["postgresConfigService"],
    }),
  ],
  controllers: [],
  providers: [UsuarioService, ProdutoService],
})
export class AppModule {}
