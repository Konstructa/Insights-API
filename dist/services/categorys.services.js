"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementsFromOneCategoryService = exports.getNamesCategorysService = void 0;
const db_1 = require("../sql/db");
function getNamesCategorysService() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, db_1.connect)();
            const posts = yield conn.query('SELECT classification FROM insights ORDER BY created_at DESC');
            return posts;
        }
        catch (e) {
            throw new Error('Categoria não encontrada');
        }
    });
}
exports.getNamesCategorysService = getNamesCategorysService;
function getElementsFromOneCategoryService(classification, page) {
    return __awaiter(this, void 0, void 0, function* () {
        const skip = (page - 1) * 10;
        try {
            const conn = yield (0, db_1.connect)();
            const posts = yield conn.query(`
    SELECT * FROM insights WHERE classification = '${classification}' ORDER BY created_at DESC LIMIT ${skip},10`);
            const totalInsights = yield conn.query(`
      SELECT COUNT(*) AS numTotal FROM insights WHERE classification = '${classification}'
      `);
            return [posts, JSON.parse(JSON.stringify(totalInsights[0]))];
        }
        catch (e) {
            throw new Error('Nenhum elemento foi encontrado.');
        }
    });
}
exports.getElementsFromOneCategoryService = getElementsFromOneCategoryService;
