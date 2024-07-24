"use client";
import "../app/globals.css";

import React, { useEffect } from "react";
import { useState } from "react";
import { registerUser } from "../utils/auth";
import { userAPI } from "../utils/api";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [Checked, setChecked] = useState(true);

  const company_svg = (
    <svg
      className="h-6 w-6"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        id="Retângulo_223"
        data-name="Retângulo 223"
        width="16"
        height="16"
        fill="#ccc"
        opacity="0"
      />
      <g id="Icone" transform="translate(0.648 -0.621)">
        <g
          id="Retângulo_203"
          data-name="Retângulo 203"
          transform="translate(2.352 2.621)"
          fill="none"
          stroke="#000000"
        >
          <path
            d="M1,0H9a1,1,0,0,1,1,1V12a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1A1,1,0,0,1,1,0Z"
            stroke="none"
          />
          <rect x="0.5" y="0.5" width="9" height="11" rx="0.5" fill="none" />
        </g>
        <g
          id="Retângulo_227"
          data-name="Retângulo 227"
          transform="translate(5.352 9.621)"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="4" height="5" stroke="none" />
          <rect x="0.5" y="0.5" width="3" height="4" fill="none" />
        </g>
        <g id="Grupo_334" data-name="Grupo 334">
          <g
            id="Retângulo_206"
            data-name="Retângulo 206"
            transform="translate(5.352 5.621)"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="1" height="1" stroke="none" />
            <rect x="0.5" y="0.5" fill="none" />
          </g>
          <g
            id="Retângulo_225"
            data-name="Retângulo 225"
            transform="translate(5.352 7.621)"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="1" height="1" stroke="none" />
            <rect x="0.5" y="0.5" fill="none" />
          </g>
          <g
            id="Retângulo_224"
            data-name="Retângulo 224"
            transform="translate(8.352 5.621)"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="1" height="1" stroke="none" />
            <rect x="0.5" y="0.5" fill="none" />
          </g>
          <g
            id="Retângulo_226"
            data-name="Retângulo 226"
            transform="translate(8.352 7.621)"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="1" height="1" stroke="none" />
            <rect x="0.5" y="0.5" fill="none" />
          </g>
        </g>
      </g>
    </svg>
  );
  const user_svg = (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const handleOptionChange = (option) => {
    setRole(option);
  };

  const submitHandler = async () => {
    const payload = getValues();
    console.log(payload);
    const data = await registerUser(payload);
    window.localStorage.setItem("token", data.accessToken);
    window.localStorage.setItem("token", data.accessToken);
    const user = await userAPI.get();
    window.localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <section className="h-screen w-full bg-base-300 flex flex-col gap-10">
      <h1 className="text-5xl font-bold w-fit mx-auto my-10 border-b-4 border-solid border-b-yellow-400">
        Lmdina
      </h1>
      <div className="flex justify-center items-center ">
        <div className="w-full max-w-sm bg-primary-content p-5 rounded-lg shadow-lg border border-gray-300 border-solid">
          <h1 className="text-2xl font-bold text-center mb-5">Register</h1>
          <fieldset>
            <fieldset className="form-group">
              <input
                id="name"
                className="bg-blue-100 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
                type="text"
                placeholder="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                {...register("name", {
                  required: "Please enter name",
                })}
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </fieldset>
            <fieldset className="form-group">
              <input
                className="bg-blue-100 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
                type="text"
                placeholder="Email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                {...register("email", {
                  required: "Please enter email",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: "Please enter valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </fieldset>
            <fieldset className="form-group">
              <input
                className=" bg-blue-100 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                {...register("password", {
                  required: "Please enter password",
                  minLength: {
                    value: 6,
                    message: "password is more than 5 chars",
                  },
                })}
              />
              {errors.password && (
                <div className="text-red-500 ">{errors.password.message}</div>
              )}
            </fieldset>
            <fieldset className="form-group flex justify-around">
              {/* <div className="flex justify-center items-center space-x-4">
                 <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="option"
                    value="USER"
                    onChange={() => handleOptionChange("USER")}
                    {...register("option", { required: true })}
                  />
                  <Image
                    src="/tourist.png"
                    alt="Tourist Image"
                    className="rounded-lg object-cover"
                    width={144}
                    height={144}
                  />
                  <p className="text-center">Tourist</p>
                </label>
              </div>
              <div className="flex items-center space-x-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="option"
                    value="COMPANY_OWNER"
                    onChange={() => handleOptionChange("COMPANY_OWNER")}
                    className="hidden"
                    {...register("option", { required: true })}
                  />
                  <Image
                    src="/company_owner.png"
                    alt="Company Owner Image"
                    className="rounded-lg object-cover"
                    width={200}
                    height={200}
                  />
                  <p className="text-center -mt-5">Company Owner</p>
                </label>
              </div> */}
              <div className="flex flex-row justify-between gap-10">
                <button
                  className={`btn btn-ghost ${Checked ? "btn-active" : ""}`}
                  onClick={() => {
                    setChecked(!Checked);
                    handleOptionChange("USER");
                  }}
                  {...register("option", { required: true })}
                >
                  Tourist {user_svg}
                </button>
                <button
                  className={`btn btn-ghost ${!Checked ? "btn-active" : ""}`}
                  onClick={() => {
                    setChecked(!Checked);
                    handleOptionChange("COMPANY_OWNER");
                  }}
                  {...register("option", { required: true })}
                >
                  Company {company_svg}
                </button>
              </div>
            </fieldset>
            {errors.option && (
              <p className="text-red-500">Please select an option</p>
            )}

            <div className="flex justify-center items-center">
              <button
                className="btn btn-primary font-bold mt-4  py-2 px-4 rounded"
                type="submit"
              >
                Sign up
              </button>
            </div>
            <Link href="/login">
              <div className="text-sm font-light mt-6">
                you have already account,{" "}
                <span class="group hover:text-blue-500 font-bold transition-all duration-300 ease-in-out cursor-pointer">
                  <span class="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Sign in.
                  </span>
                </span>
              </div>
            </Link>
          </fieldset>
        </div>
      </div>
    </section>
  );
}
