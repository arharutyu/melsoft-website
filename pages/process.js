import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Steps from "@/components/Process/Steps";
import FAQ from "@/components/Process/FAQ";

const Process = () => {
  return (
    <>
      <PageBanner pageTitle="How does it work?" />

      <div className="services-details-area pb-80">
        <div className="container">
          <Steps />
          <div className="separate"></div>
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default Process;