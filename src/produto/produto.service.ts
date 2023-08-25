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
    body: Partial<ProdutoEntity>,
  ): Promise<ProdutoEntity> {
    const possivelProduto = this.produtos.find((produto) => produto.id === id);
    const naoExisteProduto = undefined;

    if (naoExisteProduto !== possivelProduto) {
      // Percorra o que existe dentro do body, e atualize o 'possivelProduto'.
      for (const [key, value] of Object.entries(body)) {
        if (key !== 'id') {
          possivelProduto[key] = value;
        }
      }

      return possivelProduto;
    }

    return naoExisteProduto;
  }

  async delete(id: string): Promise<Boolean> {
    const encontrado = this.produtos.find((produto) => produto.id === id);
    const naoEncontrado = undefined;

    if (naoEncontrado !== encontrado) {
      this.produtos = this.produtos.filter((produto) => produto.id !== id);
      return true;
    }

    // Produto não existe
    return false;
  }
}
