import React from "react";
import ProfileCard from "./ProfileCard";

const Home = () => {
  return (
    <>
      <div className="relative p-6">
        <img
          className="rounded-2xl md:h-[25rem] w-full object-fill"
          src="/home-bg.jpg"
          alt=""
        />
        <div className="absolute top-10 left-10 p-5 text-white md:text-3xl text-lg font-serif h-fit">
          <h1>The Official Refrence</h1>
          <div className="mt-5 border border-white pl-2">
            <div className="absolute left-4 w-2 h-2 bg-white"></div>
            <div className="absolute right-4 w-2 h-2 bg-white"></div>
            <div className="absolute top-2/3 left-4 w-2 h-2 bg-white"></div>
            <div className="absolute top-2/3 right-4 w-2 h-2 bg-white"></div>
            <h1>Dr.Hossein</h1>
            <h1>
              M<span className="text-blue-800">on</span>shizade's
            </h1>
          </div>

          <div className="mt-5">
            <h1>Articles</h1>
          </div>
        </div>
        <div className="flex justify-end">
         <ProfileCard />
        </div>
        <div>
          <button className="text-white bg-black px-3 py-2 m-3 rounded-md shadow-md">Visit Now</button>
          <button>About Me</button>
        </div>
      </div>
    </>
  );
};

export default Home;
