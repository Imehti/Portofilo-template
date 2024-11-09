import React from "react";
import Professors from "./Professors";

const ProfssorsList = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-16">
        <h1 className="text-black text-3xl font-serif">Get to know our professors</h1>
        <p className="max-w-lg text-center font-light">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form
        </p>
      </div>
      <div className="mt-10 p-12">
      <Professors />
      </div>
    </>
  );
};

export default ProfssorsList;
