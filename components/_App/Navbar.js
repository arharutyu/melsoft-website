import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    // setCurrentPath(router.asPath)
    let elementId = document.getElementById("header");
    elementId.classList.add("is-sticky");
    setMenu(!menu);
  };

  const toggleNavbarAndClearClass = () => {
    // setCurrentPath(router.asPath)
    setMenu(!menu);
    // let elementId = document.getElementById("header");
    // elementId.classList.remove("is-sticky");
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header id="header" className="headroom is-sticky">
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                Melsoft
              </Link>

              <button
                onClick={toggleNavbarAndClearClass}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      href="/"
                      onClick={toggleNavbarAndClearClass}
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/process/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/process/" && "active"
                      }`}
                    >
                      Our Process
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/portfolio/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/portfolio/" && "active"
                      }`}
                    >
                      Portfolio
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
