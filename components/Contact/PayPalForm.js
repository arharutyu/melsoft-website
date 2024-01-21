import React, { useState } from "react";

function PayPalForm({ invoiceId, amount, onInputChange, onConfirm }) {
  const [validationError, setValidationError] = useState("");

  const handleConfirm = () => {
    // Validate input before confirming
    if (!invoiceId || !amount) {
      setValidationError("Both fields are required.");
    } else if (isNaN(parseFloat(amount)) || !isFinite(amount) || parseFloat(amount) < 0 || !(/^\d+(\.\d{1,2})?$/.test(amount))) {
      setValidationError("Amount must be a valid number up to 2 decimal places with no dollar sign ($).");
    } else {
      setValidationError(""); // Clear any previous validation error
      onConfirm(); // Call the onConfirm function passed from the parent component
    }
  };

  return (
    <form id="paypal-form">
      <label>
        Invoice Number:
        <input
          type="text"
          name="invoiceId"
          value={invoiceId}
          onChange={(e) => onInputChange("invoiceId", e.target.value)}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="text"
          name="amount"
          value={amount}
          onChange={(e) => onInputChange("amount", e.target.value)}
        />
      </label>
      <br />
      <button type="button" onClick={handleConfirm} className="btn btn-primary">
        Confirm
      </button>
      {validationError && <div style={{ color: "red" }}>{validationError}</div>}
    </form>
  );
}

export default PayPalForm;
