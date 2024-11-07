import React from "react";
import ProjectLinks from "./ProjectLinks";

const Portofilo = () => {
    
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col justify-center space-y-2 items-center">
          <h2 className="font-serif text-blue-600">Our Portofilo </h2>
          <h1 className="text-black text-2xl font-serif">
            Our Recent Projects
          </h1>
          <p className="max-w-lg text-center font-light">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form
          </p>
        </div>
        <ProjectLinks />
      </div>
    </>
  );
};

export default Portofilo;
