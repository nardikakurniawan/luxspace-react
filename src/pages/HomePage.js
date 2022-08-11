import React from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import Clients from "parts/Clients";
import SiteMap from "parts/SiteMap";
import Footer from "parts/Footer";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import JustArrived from "parts/HomePage/JustArrived";

export default function HomePage() {
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}
