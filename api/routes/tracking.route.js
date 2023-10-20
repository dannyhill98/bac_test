import { Router } from "express";
import { Tracking_parcel } from "../controllers/tracking.controller.js";

const trackingRoutes = Router();

trackingRoutes.get("/Tracking_parcel", Tracking_parcel);


export default trackingRoutes;