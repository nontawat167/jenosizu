import express from "express";
import { findPlaceHandler } from "../controller/place.controller";
import { findplaceValid } from "../middleware/placeValidation";

const router = express.Router();

router.get("/", findplaceValid, findPlaceHandler);

export default router;
