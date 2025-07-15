
export const mockAPICall = async (orderId) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const responses = [
    {
      code: 0,
      data: {
        mch_id: "MCH001",
        mch_order_no: orderId,
        transfer_amount: 299.99,
        pay_type: "CARD",
        currency: "USD",
        orderDate: new Date().toISOString(),
        sign_type: "RSA",
        status: Math.random() > 0.7 ? 1 : Math.random() > 0.3 ? 2 : 0
      },
      msg: "Success"
    }
  ];
  
  return responses[0];
};