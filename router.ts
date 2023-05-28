import { Router } from "express";
import { authController } from "./controllers/authController";

const router: Router = Router()

//Routes
router.get("/", authController.home);
router.post("/login", authController.login);
router.post("/singin", authController.register);

export { router };