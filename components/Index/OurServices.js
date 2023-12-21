import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="boxes-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <Link href="/#set-up">
                <div className="single-box">
                  <div className="icon">
                    <Icon.Globe />
                  </div>

                  <h3>Set up</h3>

                  <p>
                    Tailored for forward-thinking businesses looking to
                    establish a vibrant online presence. Ideal for startups and
                    those embarking on a digital journey.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6">
              <Link href="/#spruik-up">
                <div className="single-box">
                  <div className="icon">
                    <Icon.Edit />
                  </div>

                  <h3>Spruik Up</h3>

                  <p>
                    For businesses with an existing online footprint seeking a
                    digital facelift. Perfect for businesses that have
                    pre-existing infrastructure in place.
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <img
                src="/images/tech-logos/aws-2.svg"
                alt="AWS Logo"
                className="small-logo"
              />
              <img
                src="/images/tech-logos/azure-2.svg"
                alt="Azure Logo"
                className="small-logo"
              />
              <img
                src="/images/tech-logos/google-cloud-1.svg"
                alt="GCP Logo"
                className="small-logo"
              />
              <img
                src="/images/tech-logos/css-3.svg"
                alt="CSS Logo"
                className="small-logo"
              />
              <img
                src="/images/tech-logos/html-1.svg"
                alt="HTML Logo"
                className="small-logo"
              />
              <img
                src="/images/tech-logos/bootstrap-5-1.svg"
                alt="Bootstrap Logo"
                className="small-logo"
              />
              <img
                src="/images/tech-logos/logo-javascript.svg"
                alt="JS Logo"
                className="small-logo"
              />
              <img
                src="/images/tech-logos/next-js.svg"
                alt="Next.js Logo"
                className="small-logo"
              />
              <img
                src="/images/tech-logos/react-2.svg"
                alt="React Logo"
                className="small-logo"
              />
              <img
                src="/images/tech-logos/wordpress-icon-1.svg"
                alt="WordPress Logo"
                className="small-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
