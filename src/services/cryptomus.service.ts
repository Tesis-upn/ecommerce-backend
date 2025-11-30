import axios from "axios";
import { signData } from "../config/cryptomus";
import { CryptomusPaymentRequest } from "../types/payment.types";

const merchantId = process.env.CRYPTOMUS_MERCHANT_ID!;
const apiKey = process.env.CRYPTOMUS_API_KEY!;

export async function createCryptomusPayment(data: CryptomusPaymentRequest) {
  const signature = signData(data, apiKey);

  const response = await axios.post(
    "https://api.cryptomus.com/v1/payment",
    data,
    {
      headers: {
        merchant: merchantId,
        sign: signature,
      },
    }
  );

  return response.data;
}