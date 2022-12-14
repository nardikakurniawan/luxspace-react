import React from "react";

import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import Clients from "parts/Clients";
import SiteMap from "parts/SiteMap";
import Footer from "parts/Footer";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import JustArrived from "parts/HomePage/JustArrived";

import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useModalDOM from "helpers/hooks/useModalDOM";

export default function HomePage() {
  useScrollAnchor();
  useModalDOM();

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
