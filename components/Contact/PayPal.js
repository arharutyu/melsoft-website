// PayPal.js
import React, { useState } from "react";
import PayPalComponent from "./PayPalComponent";
import PayPalForm from "./PayPalForm";

function PayPal() {
  const [invoiceId, setInvoiceId] = useState("");
  const [amount, setAmount] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleInputChange = (name, value) => {
    if (name === "invoiceId") {
      setInvoiceId(value);
    } else if (name === "amount") {
      setAmount(value);
    }
  };

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const handleEdit = () => {
    setConfirmed(false);
  };

  return (
    <>
      <div className="section-title">
        <h2>Pay an Invoice</h2>
        <div className="bar"></div>
      </div>
      <div className="paypal-container">
        {!confirmed ? (
          <>
          <p>To pay an invoice confirm the invoice number and amount below:</p>
            <PayPalForm
              amount={amount}
              invoiceId={invoiceId}
              onInputChange={handleInputChange}
              onConfirm={handleConfirm}
            />
          </>
        ) : (
          <>
              <p>
                You are making a payment for the amount of{" "}
                <strong>${amount}</strong> against invoice number{" "}
                <strong>{invoiceId}</strong>
              </p>
              <p>
                If this is correct proceed with payment below. To change the
                amount or invoice number{" "}
                <span
                  onClick={handleEdit}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  click here
                </span>
                .
              </p>
            <PayPalComponent amount={amount} invoiceId={invoiceId} />
          </>
        )}
      </div>
    </>
  );
}

export default PayPal;
