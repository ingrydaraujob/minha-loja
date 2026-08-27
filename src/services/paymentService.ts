export type PaymentMethod =
  | "pix"
  | "card";

export type PaymentResult = {
  success: boolean;
  transactionId: string;
};

export async function processPayment(
  method: PaymentMethod,
  total: number
): Promise<PaymentResult> {
  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  const transactionId =
    `VERDEZA-${Date.now()}`;

  console.log(
    `Pagamento simulado: ${method} - R$ ${total}`
  );

  return {
    success: true,
    transactionId,
  };
}