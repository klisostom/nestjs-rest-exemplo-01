import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './resources/usuario-entity';

@Injectable()
export class UsuarioService {
  private usuarios: UsuarioEntity[] = [];

  constructor() {}

  async create(usuario: UsuarioEntity): Promise<boolean> {
    this.usuarios.push(usuario);

    return true;
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return this.usuarios;
  }

  async emailUnico(email: string): Promise<boolean> {
    return this.usuarios.find((usuario) => usuario.email === email)
      ? false
      : true;
  }

  async update(
    id: string,
    body: Partial<UsuarioEntity>,
  ): Promise<UsuarioEntity | undefined> {
    const possivelUsuario = this.usuarios.find((usuario) => usuario.id === id);
    const naoExisteProduto = undefined;

    if (naoExisteProduto !== possivelUsuario) {
      // Percorra o que existe dentro do body, e atualize o 'possivelUsuario'.
      for (const [key, value] of Object.entries(body)) {
        if (key !== 'id') {
          possivelUsuario[key] = value;
        }
      }

      return possivelUsuario;
    }

    return naoExisteProduto;
  }

  async delete(id: string): Promise<boolean> {
    const buscado = this.usuarios.find((usuario) => usuario.id === id);

    if (undefined === buscado) {
      // Não existe
      return false;
    }

    this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);

    return true;
  }
}
