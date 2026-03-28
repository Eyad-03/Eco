import { protect } from "../middleware/protect.Middleware.js";
import express from "express";
import {
  getAllProductController,
  getProductController,
} from "../controllers/product.Controller.js";

const router = express.Router();

router.get("/product/:id", protect, getProductController);
router.get("/product", getAllProductController);

export default router;
