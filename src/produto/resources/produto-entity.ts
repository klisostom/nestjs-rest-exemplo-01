import { CaracteristicaDTO } from "../dto/caracteristica.dto";
import { ImagemDTO } from "../dto/imagem.dto";

export class ProdutoEntity {
  id: string; // uuid
  idUsuario: string; // uuid
  nome: string;
  valor: number;
  quantidade: number;
  descricao: string;
  caracteristicas: CaracteristicaDTO[];
  imagens: ImagemDTO[];
  categoria: string;
}
