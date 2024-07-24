"use client";

import React from "react";
import "../app/globals.css";

import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import EventPage from "../components/eventPage/EventPage.jsx";

function eventPage() {
  return (
    <>
      <Navbar />
      <EventPage />
      <Footer />
    </>
  );
}

export default eventPage;
