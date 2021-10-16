import express from "express";
import { game24Handler } from "../controller/game24.controller";
import { game24rule } from "../middleware/game24Validation";

const router = express.Router();

router.post("/", game24rule, game24Handler);

export default router;
