import React from "react";

const ShareOpinion = () => {
  return (
    <>
      <div className="relative flex justify-center w-full">
        <img
          className="w-[85%]  h-[460px] rounded-2xl blur-[1px]"
          src="/opinionSection.jpg"
          alt=""
        />
        <div className="absolute flex flex-col items-center space-y-3 text-white mt-12">
          <h1 className="text-4xl font-serif">Share your thoughts with us</h1>
          <p className="max-w-lg text-center font-light">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form
          </p>

          <form action="">
            <div className="flex flex-col items-center mt-6 space-y-2">
              <label className="text-xl font-serif" htmlFor="">
                Name
              </label>
              <input
                className="rounded-md shadow-lg p-1.5 px-14"
                type="text"
                placeholder="David John"
              />
              <label className="text-xl font-serif" htmlFor="">
                Email
              </label>
              <input
                className="rounded-md shadow-lg p-1.5 px-14"
                type="text"
                placeholder="DavidJohn@gmail.com"
              />
            </div>
            <div className="flex justify-center mt-10">
              <button className="bg-blue-700 text-sm p-3 rounded-md">
                Go to the comment form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShareOpinion;
