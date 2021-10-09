import express from "express";
const router = express.Router();
import { addOrderItems } from "../controllers/orderController.js";
import { protect } from "../middileware/authMiddileware.js";

router.route("/").post(protect, addOrderItems);

export default router;
