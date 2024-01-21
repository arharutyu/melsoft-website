import PayPal from "@/components/Contact/PayPal";

const Payment = () => {
  return (
    <>
      <div className="payment-container">
        <div className="section-title">
          <h2>Get In Touch With Us</h2>
          <div className="bar"></div>
        </div>
        <PayPal />
      </div>
    </>
  );
};

export default Payment;
