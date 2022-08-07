"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const makeEndpoint_1 = require("../makeEndpoint");
const model_1 = __importDefault(require("./model"));
module.exports = [
    (0, makeEndpoint_1.makeEndpoint)("todo", "POST", async (ctx) => {
        const { author, text } = ctx.body;
        const todo = await model_1.default.create({
            author,
            status: "todo",
            text,
        });
        //todo: create and send password to the todos email
        const success = !!todo;
        return {
            response: success ? "Created todo" : "Something went wrong",
            success,
        };
    }),
    (0, makeEndpoint_1.makeEndpoint)("todos", "GET", async (ctx) => {
        const todos = await model_1.default.findAll({ where: {} });
        return {
            success: true,
            todos,
        };
    }),
];
