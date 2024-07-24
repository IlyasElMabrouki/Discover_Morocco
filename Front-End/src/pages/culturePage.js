"use client";

import "../../src/app/globals.css";
import React, { useState, useEffect } from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import CulturePage from "../components/culture/CulturePage";
function culturePage() {
  return (
    <>
      <Navbar />
      <CulturePage />
      <Footer />
    </>
  );
}

export default culturePage;
