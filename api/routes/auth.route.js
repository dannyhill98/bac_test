import { Router } from "express";
import { GenerateToken } from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/Generate_Token", GenerateToken);


export default authRoutes;