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
exports.ProdutoDTO = void 0;
const class_validator_1 = require("class-validator");
const caracteristica_dto_1 = require("./caracteristica.dto");
const imagem_dto_1 = require("./imagem.dto");
const class_transformer_1 = require("class-transformer");
class ProdutoDTO {
}
__decorate([
    (0, class_validator_1.IsUUID)(undefined, { message: 'ID de usuário inválido' }),
    __metadata("design:type", String)
], ProdutoDTO.prototype, "usuarioId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProdutoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'O campo (valor) deve ser um número inteiro' }),
    (0, class_validator_1.Min)(1, { message: 'O campo (valor) deve ser um número inteiro positivo' }),
    __metadata("design:type", Number)
], ProdutoDTO.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'O campo (quantidade) deve ser um número inteiro' }),
    (0, class_validator_1.Min)(0, {
        message: 'O campo (quantidade) deve ser um número inteiro positivo',
    }),
    __metadata("design:type", Number)
], ProdutoDTO.prototype, "quantidade", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo (descricao) deve ser informado' }),
    (0, class_validator_1.Max)(1000, {
        message: 'O campo (descricao) deve ter no máximo 1000 caracteres',
    }),
    __metadata("design:type", String)
], ProdutoDTO.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.ArrayMinSize)(3, {
        message: 'O campo (caracteristicas) deve ter no mínimo 3 itens',
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)({ message: 'O campo (caracteristicas) deve ser um array' }),
    (0, class_transformer_1.Type)(() => caracteristica_dto_1.CaracteristicaDTO),
    __metadata("design:type", Array)
], ProdutoDTO.prototype, "caracteristicas", void 0);
__decorate([
    (0, class_validator_1.ArrayMinSize)(1, {
        message: 'O campo (imagens) deve ter no mínimo 1 imagem',
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)({ message: 'O campo (imagens) deve ser um array' }),
    (0, class_transformer_1.Type)(() => imagem_dto_1.ImagemDTO),
    __metadata("design:type", Array)
], ProdutoDTO.prototype, "imagens", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo (categoria) deve ser informado' }),
    __metadata("design:type", String)
], ProdutoDTO.prototype, "categoria", void 0);
exports.ProdutoDTO = ProdutoDTO;
//# sourceMappingURL=produto.dto.js.map