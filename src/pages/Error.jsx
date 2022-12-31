// @ts-check
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Error = () => {
  return (
    <div className="mx-auto justify-center items-center text-center max-w-6xl my-4">
      <h1 className="text-4xl font-semibold text-cyan-700 mb-4">Error 404 - Page Not Found</h1>
      <p className="text-xl text-teal-800 mb-8 flex mx-auto justify-center">
        <a className="underline" href="/">Go back Home</a>
        <span className="pl-2"><FiExternalLink /></span>
      </p>
      <img className="rounded-lg" src="/images/404_NotFound.png" alt="Error 404" />
    </div>
  );
};

export default Error;