import express from "express";
import { game24Handler } from "../controller/game24.controller";

const router = express.Router();

router.get("/", game24Handler);

export default router;
