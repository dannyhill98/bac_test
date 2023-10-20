
import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from "./routes/auth.route.js";
import trackingRoutes from "./routes/tracking.route.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {res.send('Hello World!')})

app.use(authRoutes,trackingRoutes);

export default app;