import React from "react";

import Header from "parts/Header";
import SiteMap from "parts/SiteMap";
import Footer from "parts/Footer";
import Breadcrumb from "components/Breadcrumb";
// import BrowseRoom from "parts/HomePage/BrowseRoom";
// import JustArrived from "parts/HomePage/JustArrived";

export default function Details() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/888", name: "Details" },
        ]}
      />
      <SiteMap />
      <Footer />
    </>
  );
}
