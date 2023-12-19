import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Link from "next/link";

const FAQ = () => {
  const questions = [
    {
      Q: "How do I get started with your web development services?",
      A: "Getting started is easy! Simply reach out to us through our contact form, or email. We'll schedule a discovery meeting to discuss your requirements and objectives.",
    },
    {
      Q: "What information do I need to provide during the discovery phase?",
      A: "During the discovery phase, we'll discuss your vision, goals, and any specific requirements for your website. Feel free to share any design preferences, features, or examples that inspire you.",
    },
    {
      Q: "How long does the web development process typically take?",
      A: "The timeline can vary based on the complexity of the project. We'll provide a detailed proposal with estimated timelines during the proposal and contract phase. We strive to deliver timely results without compromising quality.",
    },
    {
      Q: "How will I be informed about the progress of my project?",
      A: "We keep you informed at every step. You'll receive regular updates and, depending on the project, access to a development environment where you can review progress and provide feedback.",
    },
    {
      Q: "What happens after the website is launched?",
      A: "After launch, we provide documentation for basic content updates. You can opt for ongoing support and maintenance services, or if you prefer, we can hand over management completely with a 6-month free support period.",
    },
    {
      Q: "Can I request changes or updates to my website after it's live?",
      A: "Absolutely! We understand that needs evolve. You can request changes or updates to your website post-launch, and we'll work with you to implement the necessary modifications.",
    },
    {
      Q: "Do you contract work overseas?",
      A: "Melsoft is proudly Australian owned and operated. You can rest assured that all work from discovery to design to development is completed right here in Australia \u{1F1E6}\u{1F1FA}",
    },
  ];

  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6 services-details-image">
          <img
            src="/images/services-details-image/services-details2.png"
            className="animate__animated animate__fadeInUp"
            alt="image"
          />
        </div>

        <div className="col-lg-6 services-details">
          <div className="services-details-desc">
            <h2>Frequently Asked Questions</h2>
            <p>
              Still can't find the information you're looking for?{" "}
              <Link href="/contact">Contact us</Link> and we'll be happy to
              help!
            </p>

            <div className="services-details-accordion">
              <Accordion preExpanded={[0]}>
                {questions.map((questions, index) => (
                  <AccordionItem uuid={index}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>{questions.Q}</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>{questions.A}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
