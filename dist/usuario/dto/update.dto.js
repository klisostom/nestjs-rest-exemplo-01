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
exports.UpdateDTO = void 0;
const class_validator_1 = require("class-validator");
const email_unico_validator_1 = require("../validacao/email-unico.validator");
class UpdateDTO {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'Nome deve ser uma string',
    }),
    __metadata("design:type", String)
], UpdateDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: 'Sobrenome deve ser uma string',
    }),
    __metadata("design:type", String)
], UpdateDTO.prototype, "sobrenome", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)({
        message: 'Idade deve ser um valor inteiro positivo',
    }),
    __metadata("design:type", Number)
], UpdateDTO.prototype, "idade", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, email_unico_validator_1.EmailUnico)({
        message: 'Email já cadastrado',
    }),
    __metadata("design:type", String)
], UpdateDTO.prototype, "email", void 0);
exports.UpdateDTO = UpdateDTO;
//# sourceMappingURL=update.dto.js.map