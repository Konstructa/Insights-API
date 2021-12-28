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
exports.createInsightsService = exports.getAllInsightsService = void 0;
const db_1 = require("../sql/db");
function getAllInsightsService(page) {
    return __awaiter(this, void 0, void 0, function* () {
        const skip = (page - 1) * 10;
        try {
            const conn = yield (0, db_1.connect)();
            const posts = yield conn.query(`SELECT * FROM insights ORDER BY created_at DESC LIMIT ${skip},10`);
            const totalInsights = yield conn.query('SELECT COUNT(*) AS numTotal FROM insights');
            return [posts, JSON.parse(JSON.stringify(totalInsights[0]))];
        }
        catch (e) {
            throw new Error('Erro ao encontrar os insights');
        }
    });
}
exports.getAllInsightsService = getAllInsightsService;
function createInsightsService(register) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, db_1.connect)();
            yield conn.query('INSERT INTO insights SET ?', [register]);
        }
        catch (e) {
            throw new Error('Não conseguimos adicionar sua ideia, verifique os dados novamente');
        }
    });
}
exports.createInsightsService = createInsightsService;
