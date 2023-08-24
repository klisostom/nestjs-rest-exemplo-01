import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class CreateDTO {
  // Nome
  @IsString({
    message: 'Nome deve ser uma string',
  })
  @IsNotEmpty({
    message: 'Nome é obrigatório',
  })
  nome: string;

  // Sobrenome
  @IsString({
    message: 'Sobrenome deve ser uma string',
  })
  sobrenome: string;

  // Idade
  @IsInt({
    message: 'Idade deve ser um valor inteiro positivo',
  })
  idade: number;

  // Email
  @EmailUnico({
    message: 'Email já cadastrado',
  })
  @IsNotEmpty({
    message: 'Email é obrigatório',
  })
  email: string;
}
