import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Usuario } from './interfaces/usuario.interface';
import { UsuarioService } from './usuario.service';
import { CreateDTO } from './dto/create.dto';
import { UsuarioEntity } from './resources/usuario-entity';
import { v4 as uuid } from 'uuid';
import { AllDTO } from './dto/all.dto';
import { UpdateDTO } from './dto/update.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('/create')
  async create(@Body() body: CreateDTO) {
    const usuario = new UsuarioEntity();

    usuario.id = uuid();
    usuario.email = body.email;
    usuario.idade = body.idade;
    usuario.nome = body.nome;
    usuario.sobrenome = body.sobrenome;

    return this.usuarioService.create(usuario)
      ? { status: 201, id: usuario.id }
      : { status: 402, undefined };
  }

  @Get('/all')
  async findAll(): Promise<AllDTO[]> {
    const usuarios = await this.usuarioService.findAll();

    return usuarios.map((usuario) => new AllDTO(usuario.id, usuario.nome));
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() body: UpdateDTO) {
    const atualizado = await this.usuarioService.update(id, body);

    return atualizado
      ? {
          status: 200,
          usuario: atualizado,
          message: 'Usuario atualizado com sucesso',
        }
      : { status: 404, message: 'Usuario não encontrado' };
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const removido = await this.usuarioService.delete(id);

    return removido
      ? { status: 200, message: 'Usuario removido com sucesso' }
      : { status: 404, message: 'Usuario não encontrado' };
  }
}
