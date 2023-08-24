import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UsuarioService } from '../usuario.service';
export declare class EmailUnicoValidator implements ValidatorConstraintInterface {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    validate(value: string, args: ValidationArguments): Promise<boolean>;
}
export declare const EmailUnico: (opcoesValidacao: ValidationOptions) => (object: Object, propertyName: string) => void;
