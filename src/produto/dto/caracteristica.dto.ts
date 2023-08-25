import { IsNotEmpty, IsString } from "class-validator";

export class CaracteristicaDTO {
  @IsNotEmpty({ message: 'O campo (nome) deve ser informado' })
  @IsString({ message: 'O campo (nome) deve ser uma string' })
  nome: string;

  @IsNotEmpty({ message: 'O campo (descricao) deve ser informado' })
  @IsString({ message: 'O campo (descricao) deve ser uma string' })
  descricao: string;
}