"use client";

import React from "react";
import Link from "next/link";
function Culture() {
  const flesh = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6"
    >
      <path
        fill-rule="evenodd"
        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
        clipRrule="evenodd"
      />
    </svg>
  );

  const card = (
    <div
      className="card border border-solid border-gray-200 w-96 bg-base-100 shadow-xl
    hover:bg-slate-100 transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer "
    >
      <h1 className="px-10 pt-8 text-4xl font-bold">title of the article</h1>
      <div className="flex flex-row justify-between w-full px-10 pt-5">
        <span>18 min read</span>
        <badge className="badge badge-md badge-neutral">Culture</badge>
      </div>
      <figure className="px-2 pt-5 w-full h-52">
        <img
          src="https://picsum.photos/200/300"
          alt="Shoes"
          className="rounded-xl object-cover w-full h-full"
        />
      </figure>
      <div className="card-body items-center">
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions self-start mt-5">
          <Link href="/culturePage">
            <button className="btn btn-ghost font-bold">
              Continue reading {flesh}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <h1
        className="mx-auto w-fit my-10 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-5xl
      xl:leading-tight"
      >
        blogs about{" "}
        <span className="text-red-600 border-b-4 border-solid border-green-700 ">
          Morrocan
        </span>{" "}
        culture
      </h1>
      <section className="mx-5 sm:mx-12 lg:mx-14 flex flex-row flex-wrap gap-5">
        {card}
        {card}
        {card}
        {card}
      </section>
    </>
  );
}

export default Culture;
