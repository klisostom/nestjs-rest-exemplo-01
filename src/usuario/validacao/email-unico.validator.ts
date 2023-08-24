import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UsuarioService } from '../usuario.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'EmailUnicoValidator', async: true })
@Injectable()
export class EmailUnicoValidator implements ValidatorConstraintInterface {
  constructor(private readonly usuarioService: UsuarioService) {}

  async validate(value: string, args: ValidationArguments): Promise<boolean> {
    return await this.usuarioService.emailUnico(value);
  }
}

export const EmailUnico = (opcoesValidacao: ValidationOptions) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: opcoesValidacao,
      constraints: [],
      validator: EmailUnicoValidator,
    });
  };
};
