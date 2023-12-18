import React from "react";
import MainBanner from "@/components/Index/MainBanner";
import About from "@/components/Index/About";
import Services from "@/components/Index/Services";
import ContactButton from "@/components/Common/ContactButton";

const Index = () => {
//   React.useEffect(() => {
//     let elementId = document.getElementById("header");

//     elementId.classList.remove("is-sticky");
//     // update class to get bg color on scroll
//     document.addEventListener("scroll", () => {
//       if (window.scrollY > 205) {
//         elementId.classList.add("is-sticky");
//       } else {
//         elementId.classList.remove("is-sticky");
//       }
//     });
//   }, []);

  return (
    <>
      <MainBanner />
      <About />
      <Services />
      <ContactButton />
    </>
  );
};

export default Index;
