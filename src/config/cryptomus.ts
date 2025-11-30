import crypto from "crypto";

export function signData(data: any, apiKey: string): string {
  return crypto
    .createHmac("sha256", apiKey)
    .update(JSON.stringify(data))
    .digest("hex");
}