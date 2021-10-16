import express from "express";
import place from "../routes/place";
import game24 from "../routes/game24";
import tictactoe from "../routes/tictactoe";

const router = express.Router();

router.use("/place", place);
router.use("/game24", game24);
router.use("/tic-tac-toe", tictactoe);

export default router;
