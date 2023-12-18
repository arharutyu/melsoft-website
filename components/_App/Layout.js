import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/_App/Footer";
import Navbar from "@/components/_App/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Melsoft</title>
      </Head>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
      <Toaster position="top-right" />

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
