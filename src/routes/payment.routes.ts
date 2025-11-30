import { Router } from "express";
import { createPayment, paymentWebhook } from "../controllers/payment.controller";

const router = Router();

router.post("/create", createPayment);
router.post("/webhook", paymentWebhook);

export default router;
