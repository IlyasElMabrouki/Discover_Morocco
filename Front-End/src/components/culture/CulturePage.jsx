"use client";

import React from "react";

function CulturePage() {
  const culture = {
    title: "Culture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magnam minus quidem dolor atque est incidunt. Ex eos ullam magnam officiis provident, dolor velit cumque eum deserunt maxime, dolores illum enim quo recusandae fuga rem veritatis sapiente rerum fugiat odio placeat. Odit porro accusamus modi ratione sequi, quod ipsum id quos excepturi nesciunt aspernatur nobis laudantium vitae totam blanditiis, pariatur omnis, ab nisi reprehenderit nam distinctio vel magni officia. Inventore, molestiae itaque. Exercitationem tempora sapiente in repellendus, corrupti doloribus est nihil, enim, nisi amet adipisci inventore. Maxime accusantium quaerat a doloremque incidunt totam commodi cum excepturi odi tenetur? Tempore, ullam.",
    category: "cat culture",
    image: "https://picsum.photos/200/300",
  };

  return (
    <section className="h-full w-full p-8">
      <h1 className="w-fit mx-auto text-6xl font-bold">{culture.title}</h1>
      <div className="flex flex-row w-full justify-center items-center gap-10 mt-5 mb-16 text-gray-500">
        <h3>8 min read</h3>
        <badge className="badge badge-md badge-success">Culture</badge>
      </div>
      <div className="h-1/2 w-1/2 mx-auto">
        <img
          className="rounded-lg shadow-lg object-cover w-full h-full"
          src={culture.image}
          alt="blog image"
        />
      </div>
      <section className="mx-24 mt-12">
        <p className=" text-justify">{culture.description}</p>
      </section>
    </section>
  );
}

export default CulturePage;
