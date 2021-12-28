"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use('/', (_req, res) => {
    res.status(404).json({
        message: 'Rota não encontrada',
    });
});
exports.default = router;
