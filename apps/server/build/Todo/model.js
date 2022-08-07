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
exports.Todo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sensible_server_1 = require("sensible-server");
let Todo = class Todo extends sensible_server_1.DefaultModel {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Todo.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Todo.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Todo.prototype, "status", void 0);
Todo = __decorate([
    sequelize_typescript_1.Table
], Todo);
exports.Todo = Todo;
exports.default = Todo;
