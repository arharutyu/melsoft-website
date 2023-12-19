import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import ReCAPTCHA from "react-google-recaptcha";

const alertContent = () => {
  MySwal.fire({
    title: "Message sent!",
    text: "Your message was successfully sent and we will get back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [recaptchaResponse, setRecaptchaResponse] = useState(false)

  const handleRecaptchaChange = (value) => {
    setRecaptchaResponse(value)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaResponse) {
        alert("You must complete the reCaptcha to submit an enquiry.");
    } else {
        try {
            // Verify reCAPTCHA status
            const recaptchaVerificationResponse = await axios.post("/api/recaptcha", { recaptchaResponse });
            if (recaptchaVerificationResponse.data.success) {
              // reCAPTCHA verification successful, proceed with form submission
              const url = `/api/contact`;
              const { name, email, number, subject, text } = contact;
              const payload = { name, email, number, subject, text };
        
              const response = await axios.post(url, payload, {
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
              });
        
              setContact(INITIAL_STATE);
              alertContent();
            } else {
              // reCAPTCHA verification failed
              alert("reCAPTCHA verification failed. Please try again.");
            }
          } catch (error) {
            alert("Error submitting form. Please try again.");
          }
    }
  };

  return (
    <>
      <div className="contact-area pb-50">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch With Us</h2>
            <div className="bar"></div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src="/images/contact-img.png" alt="image" />
            </div>

            <div className="col-lg-6 col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={contact.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your email address"
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Your phone number"
                        className="form-control"
                        value={contact.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        className="form-control"
                        value={contact.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="text"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="form-control"
                        value={contact.text}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                By checking this, you agree to our <Link href="/term-condition">Terms</Link> and <Link href="/privacy-policy">Privacy policy</Link>.
                                            </label>
                                        </div> */}
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <ReCAPTCHA
                      sitekey="6LcdGDkpAAAAAGzJLE3--7SDKfSeKqT9PFNZ9aGo"
                      onChange={handleRecaptchaChange}
                    />
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
