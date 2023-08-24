import { CaracteristicaDTO } from './caracteristica.dto';
import { ImagemDTO } from './imagem.dto';
export declare class ProdutoDTO {
    usuarioId: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    caracteristicas: CaracteristicaDTO[];
    imagens: ImagemDTO[];
    categoria: string;
}
