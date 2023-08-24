import { UsuarioService } from './usuario.service';
import { CreateDTO } from './dto/create.dto';
import { UsuarioEntity } from './resources/usuario-entity';
import { AllDTO } from './dto/all.dto';
import { UpdateDTO } from './dto/update.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(body: CreateDTO): Promise<{
        status: number;
        id: string;
        undefined?: undefined;
    } | {
        status: number;
        undefined: any;
        id?: undefined;
    }>;
    findAll(): Promise<AllDTO[]>;
    update(id: string, body: UpdateDTO): Promise<{
        status: number;
        usuario: UsuarioEntity;
        message: string;
    } | {
        status: number;
        message: string;
        usuario?: undefined;
    }>;
    delete(id: string): Promise<{
        status: number;
        message: string;
    }>;
}
