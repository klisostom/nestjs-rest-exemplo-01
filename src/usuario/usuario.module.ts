import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { EmailUnicoValidator } from './validacao/email-unico.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, EmailUnicoValidator],
  imports: [],
})
export class UsuarioModule {}
