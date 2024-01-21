import PageBanner from "@/components/Common/PageBanner";
import PayPal from "@/components/Contact/PayPal";

const Payment = () => {
  return (
    <>
      <div className="payment-container">
        <PageBanner pageTitle="Make a Payment" />
        <PayPal />
      </div>
    </>
  );
};

export default Payment;
