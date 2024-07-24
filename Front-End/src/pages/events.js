"use client";

import "../../src/app/globals.css";
import React from "react";
import { useState, useEffect } from "react";

import CategoryCard from "../components/events/CategoryCard";
import EventsCard from "../components/events/EventsCard";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

function events() {
  return (
    <>
      <Navbar />
      <section className="sm:mx-32 my-20">
        <h1
          className="mx-auto w-fit my-10 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-5xl
            xl:leading-tight"
        >
          Events Category
        </h1>
        <div className="flex flex-row flex-wrap mt-5 justify-center gap-4">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </section>
      <hr className="" />
      <section className="mx-5 sm:mx-12 lg:mx-14">
        <h1
          className="mx-auto w-fit mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-5xl
                xl:leading-tight"
        >
          Events
        </h1>

        <div className="flex flex-row flex-wrap gap-4 justify-center">
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default events;
