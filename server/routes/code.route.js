import { Router } from "express";
import { postCode } from "../controllers/code.controllers.js";

const router = Router();

router.route("/code-explainer").post(postCode);

export default router;
