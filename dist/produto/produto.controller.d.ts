import { ProdutoService } from './produto.service';
import { ProdutoDTO } from './dto/produto.dto';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    create(body: ProdutoDTO): Promise<any>;
    findAll(): Promise<any[]>;
}
