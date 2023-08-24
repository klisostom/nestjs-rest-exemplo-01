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
exports.UsuarioDTO = void 0;
const class_validator_1 = require("class-validator");
const email_unico_validator_1 = require("../validacao/email-unico.validator");
class UsuarioDTO {
}
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Nome deve ser uma string',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Nome é obrigatório',
    }),
    __metadata("design:type", String)
], UsuarioDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Sobrenome deve ser uma string',
    }),
    __metadata("design:type", String)
], UsuarioDTO.prototype, "sobrenome", void 0);
__decorate([
    (0, class_validator_1.IsInt)({
        message: 'Idade deve ser um valor inteiro positivo',
    }),
    __metadata("design:type", Number)
], UsuarioDTO.prototype, "idade", void 0);
__decorate([
    (0, email_unico_validator_1.EmailUnico)({
        message: 'Email já cadastrado',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Email é obrigatório',
    }),
    __metadata("design:type", String)
], UsuarioDTO.prototype, "email", void 0);
exports.UsuarioDTO = UsuarioDTO;
//# sourceMappingURL=usuario.dto.js.map