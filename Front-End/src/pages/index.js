"use client";
import "../app/globals.css";

import React from "react";
import Hero from "../components/home/Hero";
import Culture from "../components/home/Culture";
import TopEvents from "../components/home/TopEvents";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Location from "../components/home/Location";

function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopEvents />
      <Location />
      <Culture />
      <Footer />
    </>
  );
}

export default index;
