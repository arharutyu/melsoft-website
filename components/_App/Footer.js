import React from "react";
import Shapes4 from "../ShapesBg/Shapes4";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} Melsoft Pty Ltd. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Shapes4 />
      </footer>
    </>
  );
};

export default Footer;
