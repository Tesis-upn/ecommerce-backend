import { Request, Response } from "express";
import { createCryptomusPayment } from "../services/cryptomus.service";
import { signData } from "../config/cryptomus";

export const createPayment = async (req: Request, res: Response) => {
  try {
    const { amount, orderId } = req.body;

    const payment = await createCryptomusPayment({
      amount,
      currency: "USDT",
      order_id: orderId,
    });

    res.json(payment);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const paymentWebhook = async (req: Request, res: Response) => {
  const data = req.body;
  const incomingSign = req.headers["sign"] as string;

  const expectedSign = signData(data, process.env.CRYPTOMUS_API_KEY!);

  if (incomingSign !== expectedSign) {
    return res.status(401).send("Invalid signature");
  }

  if (data.status === "paid") {
    console.log("Pago confirmado:", data.order_id);

    // actualizar DB...
  }

  res.send("OK");
};