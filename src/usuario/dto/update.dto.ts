import { IsOptional, IsPositive, IsString } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class UpdateDTO {
  @IsOptional()
  @IsString({
    message: 'Nome deve ser uma string',
  })
  nome: string;

  @IsOptional()
  @IsString({
    message: 'Sobrenome deve ser uma string',
  })
  sobrenome: string;

  @IsOptional()
  @IsPositive({
    message: 'Idade deve ser um valor inteiro positivo',
  })
  idade: number;

  @IsOptional()
  @EmailUnico({
    message: 'Email já cadastrado',
  })
  email: string;
}
