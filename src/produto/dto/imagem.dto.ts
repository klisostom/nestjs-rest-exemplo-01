import { IsString, IsUrl } from 'class-validator';

export class ImagemDTO {
  @IsUrl(undefined, { message: 'O campo (url) deve ser uma URL válida' })
  url: string;

  @IsString({ message: 'O campo (descricao) deve ser apenas letras' })
  descricao: string;
}
