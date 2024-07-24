"use client";

import "../../src/app/globals.css";
import React, { useState, useEffect } from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Culture from "../components/culture/Culture";

function culture() {
  return (
    <>
      <Navbar />
      <Culture />
      <Footer />
    </>
  );
}

export default culture;
