import { Usuario } from '../interfaces/usuario.interface';
export declare class UsuarioEntity implements Usuario {
    id: string;
    nome: string;
    sobrenome: string;
    idade: number;
    email: string;
}
