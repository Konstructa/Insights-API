"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexWelcome = void 0;
function indexWelcome(req, res) {
    return res.status(200).json({
        menssage: ['Essa é uma API de sugestões de cursos das áreas de Front-End, Back-End, Mobile e Design'],
    });
}
exports.indexWelcome = indexWelcome;
