"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
let UsuarioService = class UsuarioService {
    constructor() {
        this.usuarios = [];
    }
    async create(usuario) {
        this.usuarios.push(usuario);
        return true;
    }
    async findAll() {
        return this.usuarios;
    }
    async emailUnico(email) {
        return this.usuarios.find((usuario) => usuario.email === email) ? false : true;
    }
    async update(id, body) {
        const possivelUsuario = this.usuarios.find((usuario) => usuario.id === id);
        if (undefined === possivelUsuario) {
            return;
        }
        Object.entries(body).forEach(([key, value]) => {
            if ('id' === key) {
                return;
            }
            possivelUsuario[key] = value;
        });
        return possivelUsuario;
    }
    async delete(id) {
        const buscado = this.usuarios.find((usuario) => usuario.id === id);
        if (undefined === buscado) {
            return false;
        }
        this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);
        return true;
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map