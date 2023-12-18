import React from "react";

const Steps = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6 services-details">
          <div className="services-details-desc">
            <h3>Incredible Infrastructure</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>

            <p>
              Took a galley of type and scrambled it to make a type specimen
              book. survived not only five centuries, but also the leap into
              electronic remaining. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry’s standard dummy text ever since the 1500s, when an
              unknown printer when an unknown.
            </p>
          </div>
        </div>

        <div className="col-lg-6 services-details-image">
          <img
            src="/images/services-details-image/services-details1.png"
            className="animate__animated animate__fadeInUp"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default Steps;
