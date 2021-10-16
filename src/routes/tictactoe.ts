import express from "express";
import { tictactoeHandler } from "../controller/tictactoe.controller";
import { tictactoe } from "../middleware/tictactoeValidation";

const router = express.Router();

router.post("/", tictactoe, tictactoeHandler);

export default router;
