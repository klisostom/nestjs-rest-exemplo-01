import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDTO } from './dto/create.dto';
import { ProdutoEntity } from './resources/produto-entity';
import { ProdutoService } from './produto.service';
import { UpdateDTO } from './dto/update.dto';
import { v4 as uuid } from 'uuid';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post('/create')
  async create(@Body() body: CreateDTO): Promise<any> {
    const produto = new ProdutoEntity();

    produto.id = uuid();
    produto.nome = body.nome;
    produto.valor = body.valor;
    produto.quantidade = body.quantidade;
    produto.descricao = body.descricao;
    produto.caracteristicas = body.caracteristicas;
    produto.imagens = body.imagens;
    produto.categoria = body.categoria;

    return this.produtoService.create(produto)
      ? { status: 201, id: produto.id }
      : { status: 402, undefined };
  }

  @Get('/produtos')
  async findAll(): Promise<any[]> {
    return this.produtoService.findAll();
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const removido = await this.produtoService.delete(id);

    return removido
      ? { status: 200, message: 'Produto removido com sucesso' }
      : { status: 404, message: 'Produto não encontrado' };
  }

  @Put('/:id/user/:idUsuario')
  async update(
    @Param('id') id: string,
    @Param('idUsuario') idUsuario: string,
    @Body() body: UpdateDTO,
  ): Promise<any> {
    const atualizado = await this.produtoService.update(id, body);

    return atualizado
      ? {
          status: 200,
          produto: atualizado,
          message: 'Produto atualizado com sucesso',
        }
      : { status: 404, message: 'Produto não encontrado' };
  }
}
