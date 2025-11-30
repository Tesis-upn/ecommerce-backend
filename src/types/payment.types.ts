export interface CryptomusPaymentRequest {
  amount: number;
  currency: "USDT" | "BTC" | "ETH" | string;
  order_id: string;
}

export interface CryptomusWebhook {
  order_id: string;
  amount: string;
  status: string;
  sign: string;
}