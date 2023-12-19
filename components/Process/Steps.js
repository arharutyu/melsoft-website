import React from "react";

const Steps = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6 services-details">
          <div className="services-details-desc">
          <div className="timeline">
              <div>
                <h3>Step 1: Discovery Chat</h3>
                <p>
                  Let's talk about your vision! In a face-to-face or Zoom
                  meeting, we dive into your website goals and dreams.
                </p>
              </div>
              <div>
                <h3>Step 2: Tailored Proposal</h3>
                <p>
                  Within a week, we send you a proposal with theme options,
                  color palettes, and technical advice to shape your dream
                  website.
                </p>
              </div>
              <div>
                <h3>Step 3: Ready, Set, Build</h3>
                <p>
                  With your green light, we start crafting the skeleton of your
                  website, ensuring it matches your vision.
                </p>
              </div>
              <div>
                <h3>Step 4: Your Feedback Matters</h3>
                <p>
                  You get at least 3 chances to share your thoughts as we refine
                  the details, making sure it's precisely what you want.
                </p>
              </div>
              <div>
                <h3>Step 5: Thorough Testing</h3>
                <p>
                  We put your site through its paces, making sure it not only
                  looks great but works flawlessly.
                </p>
              </div>
              <div>
                <h3>Step 6: Launch Readiness</h3>
                <p>
                  When you're thrilled with the result, we schedule the big
                  launch.
                </p>
              </div>
              <div>
                <h3>Step 7: Post-Launch Support</h3>
                <p>
                  We provide easy-to-follow documentation for managing your
                  content. Need extra help? One-on-one training is just a
                  message away.
                </p>
              </div>
              <div>
                <h3>Step 8: Ongoing Awesomeness</h3>
                <p>
                  Choose our ongoing management for peace of mind, or take the
                  reins yourself. We're here for free email support for the
                  first 6 months.
                </p>
              </div>
            </div>
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
