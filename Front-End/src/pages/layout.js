import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
