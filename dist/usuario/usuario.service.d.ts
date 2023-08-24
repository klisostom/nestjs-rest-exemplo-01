import { UsuarioEntity } from './resources/usuario-entity';
export declare class UsuarioService {
    private usuarios;
    constructor();
    create(usuario: UsuarioEntity): Promise<boolean>;
    findAll(): Promise<UsuarioEntity[]>;
    emailUnico(email: string): Promise<boolean>;
    update(id: string, body: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
    delete(id: string): Promise<boolean>;
}
