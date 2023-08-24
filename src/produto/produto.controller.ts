import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateDTO } from './dto/create.dto';
import { ProdutoEntity } from './resources/produto-entity';
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
}
