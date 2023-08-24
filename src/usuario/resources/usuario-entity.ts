import { Usuario } from '../interfaces/usuario.interface';

export class UsuarioEntity implements Usuario {
  id: string; // uuid
  nome: string;
  sobrenome: string;
  idade: number;
  email: string;
}
