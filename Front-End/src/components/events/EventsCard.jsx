import React from "react";
import Link from "next/link";

function EventsCard() {
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
    <section>
      <div className="card w-96 bg-base-100 mb-5 shadow-xl border border-solid border-gray-300">
        <div className="p-5 flex flex-row gap-3">
          <div className="avatar">
            <div className="w-8 rounded">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <div>
            <h2 className="font-normal text-sm">Company name</h2>
            {/* time of posting the events */}
            <p className="font-light text-xs">time</p>
          </div>
        </div>
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="w-full flex justify-between ">
            <div>
              <h2 className="card-title">Date</h2>
              <h2 className="text-xs font-normal">28/02/2024</h2>
            </div>
            <div>
              <h2 className="card-title">location</h2>
              <h2 className="text-xs font-normal">Rabat</h2>
            </div>
            <div>
              <h2 className="card-title">Tickets</h2>
              <h2 className="text-xs font-normal">20/100 available</h2>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-sm">description here</p>
          </div>
          <div className="group card-actions justify-end">
            <Link href="/eventPage">
              <button className="btn btn-accent">details{flesh}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsCard;
