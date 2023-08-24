import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './resources/produto-entity';

@Injectable()
export class ProdutoService {
  private produtos: ProdutoEntity[] = [];
  constructor() {}

  async create(produto: ProdutoEntity): Promise<Boolean> {
    return Boolean(this.produtos.push(produto));
  }

  async findAll(): Promise<ProdutoEntity[]> {
    return this.produtos;
  }

  async update(
    id: string,
    idUsuario: string,
    body: Partial<ProdutoEntity>,
  ): Promise<ProdutoEntity> {
    const possivelProduto = this.produtos.find(
      (produto) => produto.id === id && produto.idUsuario === idUsuario,
    );
    const naoExisteProduto = undefined;

    if (naoExisteProduto !== possivelProduto) {
      // Percorra o que existe dentro do body, e atualize o 'possivelProduto'.
      for (const [key, value] of Object.entries(body)) {
        if (key !== 'id' && key !== 'idUsuario') {
          possivelProduto[key] = value;
        }
      }

      return possivelProduto;
    }

    return naoExisteProduto;
  }
}
