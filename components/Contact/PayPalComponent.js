import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalComponent({ invoiceId, amount }) {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
          invoice_id: invoiceId,
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // Handle the payment confirmation
      console.log(details);
    });
  };

  console.log("Inside Component", amount, invoiceId);

  return (
    <>
      <div className="buttons-container">

        <PayPalScriptProvider
          options={{
            "client-id":
              "ATevujgHnTWMcmWMy627nwUvZNbruQzhrsiNmtqAWb6S0JskM4QbYdoGEJtUdWeZFAPjtKsrxDxEgQBo",
            currency: "AUD",
          }}
        >
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            style={{
              color: "gold",
              shape: "rect",
              label: "paypal",
              height: 55,
            }}
          />
        </PayPalScriptProvider>
      </div>
    </>
  );
}

export default PayPalComponent;
