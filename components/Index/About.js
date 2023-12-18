import React from 'react';
import * as Icon from 'react-feather';

const About = () => {
    return (
        <>
            <div className="features-area pt-80 pb-50">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Melsoft?</h2>
                        <div className="bar"></div>
                    </div>
                    <div className='description'>
                        <p>At Melsoft, we're not just web developers; we're architects of online excellence. We understand the challenge of finding a cost-effective solution that doesn't compromise on aesthetics or functionality. Our mission is simple: to empower businesses with beautiful, customized digital solutions without the usual sticker shock.</p>
                    </div>
            </div><div className="container pt-20 bg-f7fafd">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Code />
                                </div>
                                <h3>Quality Code</h3>
                                <p>We use best practise methods on the latest technologies like React.js and Next.js to ensure a high-quality final product.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.DollarSign />
                                </div>
                                <h3>Affordability</h3>
                                <p>We've cracked the code to deliver premium websites without breaking the bank by leveraging pre-built themes to get the best of both worlds.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Award />
                                </div> 
                                <h3>
                                Expertise
                                </h3>
                                <p>Our seasoned developers blend pre-built themes with tailored solutions, ensuring your website stands out uniquely.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.UserCheck />
                                </div>
                                <h3>
                                Customer-Centric Approach
                                </h3>
                                <p>Your vision guides us. We're not just building websites; we're crafting your online identity.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Cloud />
                                </div>
                                <h3>
                                Cloud-Powered Performance
                                </h3>
                                <p>Whether it's AWS or another cloud platform, we deploy your website for optimal speed and reliability.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Sliders />
                                </div>
                                <h3>
                                Flexible Options
                                </h3>
                                <p>Choose a one-time setup or ongoing maintenance. We adapt to your needs and budget.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default About;  