import express from "express";
import place from "../routes/place";
import game24 from "../routes/game24";

const router = express.Router();

router.use("/place", place);
router.use("/game24", game24);

export default router;
