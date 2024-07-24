"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Maybe from "../../components/maybe";
import useSWR from "swr";
import storage from "../../utils/storage";
import checkLogin from "../../utils/checkLogin";

function Navbar() {
  const [isConnnected, setisConnnected] = useState(false);
  const { data: currentUser } = useSWR("user", storage);
  const isLoggedIn = checkLogin(currentUser);

  const handleSignOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="navbar bg-base-100 border-b border-slate-200 border-solid">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link href="/events">
              <li>
                <button>events</button>
              </li>
            </Link>
            <Link href="/culture">
              <li>
                <button>culture</button>
              </li>
            </Link>
            <Link href="/matches">
              <li>
                <button>matche</button>
              </li>
            </Link>
          </ul>
        </div>
        <Link href="/">
          <button className="btn btn-ghost text-2xl font-bold">Lmdina</button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-base">
          <Link href="/events">
            <li>
              <button>events</button>
            </li>
          </Link>
          <Link href="/culture">
            <li>
              <button>culture</button>
            </li>
          </Link>
          <Link href="/matches">
            <li>
              <button>matches</button>
            </li>
          </Link>
        </ul>
      </div>

      <div className="navbar-end">
        {isConnnected && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="navbar" src="https://picsum.photos/200" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
            </ul>
          </div>
        )}

        {!isConnnected && (
          <div className="navbar-end ">
            <Link href="/login">
              <label className="hidden sm:btn sm:btn-ghost sm:mr-2">
                Login
              </label>
            </Link>
            <Link href="/register">
              <label className="hidden sm:btn sm:btn-neutral">Sign up</label>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
