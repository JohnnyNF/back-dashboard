import { Router } from "express";
import { authController } from "./controllers/authController";

const router: Router = Router()

//Routes
router.get("/", authController.home);

export { router };