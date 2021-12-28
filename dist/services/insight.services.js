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
exports.deleteInsightIdService = exports.getInsightIdService = void 0;
const db_1 = require("../sql/db");
function getInsightIdService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        /* if const posts = await conn.query('SELECT EXISTS(SELECT * from insights WHERE id = ?' [id]); */
        try {
            const conn = yield (0, db_1.connect)();
            const posts = yield conn.query(`SELECT EXISTS (SELECT * FROM insights WHERE id = ${id}) as truth`);
            return posts;
        }
        catch (e) {
            throw new Error('Insight não encontrado');
        }
    });
}
exports.getInsightIdService = getInsightIdService;
function deleteInsightIdService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, db_1.connect)();
            yield conn.query('DELETE FROM insights WHERE id = ?', [id]);
        }
        catch (e) {
            throw new Error('Não encontrada');
        }
    });
}
exports.deleteInsightIdService = deleteInsightIdService;
