import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsUUID,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaDTO } from './caracteristica.dto';
import { ImagemDTO } from './imagem.dto';
import { Type } from 'class-transformer';

export class CreateDTO {
  @IsNotEmpty()
  nome: string;

  @IsInt({ message: 'O campo (valor) deve ser um número inteiro' })
  @Min(1, { message: 'O campo (valor) deve ser um número inteiro positivo' })
  valor: number;

  @IsInt({ message: 'O campo (quantidade) deve ser um número inteiro' })
  @Min(0, {
    message: 'O campo (quantidade) deve ser um número inteiro positivo',
  })
  quantidade: number;

  @IsNotEmpty({ message: 'O campo (descricao) deve ser informado' })
  @Max(1000, {
    message: 'O campo (descricao) deve ter no máximo 1000 caracteres',
  })
  descricao: string;

  @ArrayMinSize(3, {
    message: 'O campo (caracteristicas) deve ter no mínimo 3 itens',
  })
  @ValidateNested()
  @IsArray({ message: 'O campo (caracteristicas) deve ser um array' })
  @Type(() => CaracteristicaDTO)
  caracteristicas: CaracteristicaDTO[];

  @ArrayMinSize(1, {
    message: 'O campo (imagens) deve ter no mínimo 1 imagem',
  })
  @ValidateNested()
  @IsArray({ message: 'O campo (imagens) deve ser um array' })
  @Type(() => ImagemDTO)
  imagens: ImagemDTO[];

  @IsNotEmpty({ message: 'O campo (categoria) deve ser informado' })
  categoria: string;
}
