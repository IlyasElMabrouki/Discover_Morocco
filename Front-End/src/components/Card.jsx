import Link from "next/link";
import React from "react";

function Card(props) {
  const { componyName, eventName, price, rate } = props;
  const star = (
    <svg
      className="w-4 h-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
  const flesh = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-20">
      <figure>
        <img
          src="https://picsum.photos/200"
          alt="Event"
          className="object-cover w-full h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{eventName}</h2>
        <div className="flex justify-between">
          <span className="font-light">{componyName}</span>
          <div className="flex flex-col ">
            {/* //TODO : rate should be fetched from db */}
            <span>{star}</span>
          </div>
        </div>
        <div className="card-actions justify-between">
          {/* //TODO : Price should be fetched from db */}

          <span className="font-semibold text-sm">
            <span className="font-extrabold text-3xl">
              {price}
              {""}dh
            </span>{" "}
            \person
          </span>
          <Link href="/eventPage">
            <button className="btn btn-outline">details {flesh}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
