import express from "express";
import EditorasController from "../controllers/editorasController.js";

const router = express.Router();

router
    .get("/editora", EditorasController.listarEditoras)
    .get("/editora/:id", EditorasController.listarEditoraPorId)
    .post("/editora", EditorasController.cadastrarEditora)
    .put("/editora/:id", EditorasController.atualizarEditora)
    .delete("/editora/:id", EditorasController.excluirEditora)

export default router;