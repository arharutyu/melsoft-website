import React from "react";
import Link from "next/link";
import Shapes3 from "../ShapesBg/Shapes3";

const PortfolioCard = () => {
  const portfolio = [
    {
      name: "OHA Aikman Club",
      link: "https://www.aikman.club/",
      desc: "The Aikman Club was founded in 2015 as part of the Old Haileyburian Association (OHA) who continue to support the Club. Anyone interested in participating in rowing is welcome to join at the National Water Sports Centre.",
      logo: "/images/client-logos/AC.jpg",
    },
    {
      name: "Melbourne Social Tango",
      link: "https://melbournesocialtango.com/",
      desc: "Melbourne Social Tango is a community of tango dancers who practice, share ideas and skills, and dance Argentine social tango in welcome and inclusive settings.",
      logo: "/images/client-logos/MST.png",
    },
    {
      name: "Lifestyle Investment Planning",
      link: "https://www.lifestyleip.com.au/",
      desc: "Lifestyle was created out of a desire to improve the financial wellbeing of people. They provide financial advice in areas such as superannuation, retirement planning, estate planning, savings goals, and much more.",
      logo: "/images/client-logos/LifestyleIP.png",
    },
    {
      name: "Dominium",
      link: "https://www.dominium.com.au/",
      desc: "Dominium provides buyers advocacy services with experience in assessing and purchasing residential, commercial, industrial and rural property",
      logo: "/images/client-logos/D.png",
    },
  ];

  return (
    <>
      <div className="container pt-20 bg-f7fafd portfolio-table">
        {portfolio.map((item) => (
          <div className="row portfolio-item" key={item.name}>
            <div className="col-lg-2 col-sm-12">
              <div className="portfolio-logo">
                <Link href={item.link} target="_blank">
                  <img
                    src={item.logo}
                    alt={item.name + " logo"}
                    className="logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-10 col-md-6">
              <div className="portfolio-info">
                <h3>
                  <Link href={item.link} target="_blank">
                    {item.name}
                  </Link>
                </h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Shape Images */}
        <Shapes3 />
      </div>
    </>
  );
};

export default PortfolioCard;
