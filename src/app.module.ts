import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioService } from './usuario/usuario.service';
import { ProdutoService } from './produto/produto.service';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [UsuarioModule, ProdutoModule],
  controllers: [],
  providers: [UsuarioService, ProdutoService],
})
export class AppModule {}
