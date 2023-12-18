import React from "react";
import Link from "next/link";
import Shapes3 from "../ShapesBg/Shapes3";

const PortfolioCard = () => {
  const portfolio = [
    {
      name: "OHA Aikman Club",
      link: "https://www.aikman.club/",
      desc: "Lorem Ipsum is simply dummy text, Lorem Ipsum is simply a placeholder for Lorem Ipsum. Lorem Ipsum may be used as a placeholder for any number of other characters",
      logo: "/images/client-logos/AC.jpg",
    },
    {
      name: "Melbourne Social Tango",
      link: "https://melbournesocialtango.com/",
      desc: "Lorem Ipsum is simply dummy text, Lorem Ipsum is simply a placeholder for Lorem Ipsum. Lorem Ipsum may be used as a placeholder for any number of other characters",
      logo: "/images/client-logos/MST.png",
    },
    {
      name: "Lifestyle Investment Planning",
      link: "https://www.lifestyleip.com.au/",
      desc: "Lorem Ipsum is simply dummy text, Lorem Ipsum is simply a placeholder for Lorem Ipsum. Lorem Ipsum may be used as a placeholder for any number of other characters",
      logo: "/images/client-logos/LifestyleIP.png",
    },
    {
      name: "Dominium",
      link: "https://www.dominium.com.au/",
      desc: "Lorem Ipsum is simply dummy text, Lorem Ipsum is simply a placeholder for Lorem Ipsum. Lorem Ipsum may be used as a placeholder for any number of other characters",
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
