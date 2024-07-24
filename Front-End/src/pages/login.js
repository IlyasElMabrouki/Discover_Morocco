"use client";
import "../app/globals.css";

import { useRouter } from "next/navigation";
import React from "react";
import { loginUser } from "../utils/auth";
import { userAPI } from "../utils/api";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = async () => {
    const payload = getValues();
    console.log(payload);
    const data = await loginUser(payload);
    window.localStorage.setItem("token", data.accessToken);
    const user = await userAPI.get();
    window.localStorage.setItem("user", JSON.stringify(user));
    router.push("/");
  };

  return (
    <section className="h-screen w-full bg-base-300 flex flex-col gap-10">
      <h1 className="text-5xl font-bold w-fit mx-auto my-10 border-b-4 border-solid border-b-yellow-400">
        Lmdina
      </h1>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full max-w-sm bg-primary-content p-5 rounded-lg shadow-lg border border-gray-300 border-solid"
        >
          <h1 className="text-2xl font-bold text-center mb-5">Log in</h1>
          <fieldset className="flex flex-col gap-5">
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
                className="bg-blue-100 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
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

            <div className="flex justify-center items-center">
              <button className="btn btn-primary" type="submit">
                Log in
              </button>
            </div>
          </fieldset>
          <div className="flex w-full mt-5 max-h-fit justify-between">
            <Link href="/register">
              <div className="text-sm font-light mt-6">
                you don't have an account,{" "}
                <span class="group hover:text-blue-500 font-bold transition-all duration-300 ease-in-out cursor-pointer">
                  <span class="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Sign up
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
