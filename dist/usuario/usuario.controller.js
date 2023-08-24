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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
const create_dto_1 = require("./dto/create.dto");
const usuario_entity_1 = require("./resources/usuario-entity");
const uuid_1 = require("uuid");
const all_dto_1 = require("./dto/all.dto");
const update_dto_1 = require("./dto/update.dto");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async create(body) {
        const usuario = new usuario_entity_1.UsuarioEntity();
        usuario.id = (0, uuid_1.v4)();
        usuario.email = body.email;
        usuario.idade = body.idade;
        usuario.nome = body.nome;
        usuario.sobrenome = body.sobrenome;
        return this.usuarioService.create(usuario)
            ? { status: 201, id: usuario.id }
            : { status: 402, undefined };
    }
    async findAll() {
        const usuarios = await this.usuarioService.findAll();
        return usuarios.map((usuario) => new all_dto_1.AllDTO(usuario.id, usuario.nome));
    }
    async update(id, body) {
        const atualizado = await this.usuarioService.update(id, body);
        return atualizado
            ? {
                status: 200,
                usuario: atualizado,
                message: 'Usuario atualizado com sucesso',
            }
            : { status: 404, message: 'Usuario não encontrado' };
    }
    async delete(id) {
        const removido = await this.usuarioService.delete(id);
        return removido
            ? { status: 200, message: 'Usuario removido com sucesso' }
            : { status: 404, message: 'Usuario não encontrado' };
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.UpdateDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "delete", null);
UsuarioController = __decorate([
    (0, common_1.Controller)('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map