import { Card } from "antd";
import React from "react";

const ProfileCard = () => {
  return (
    <>
      <Card className="absolute -bottom-10 lg:-bottom-10 lg:w-1/4 w-[60%] rounded-3xl shadow-xl h-fit mr-8">
        <div className="flex items-center justify-center">
          <img
            className="lg:w-[40%] w-[30%] mt-2"
            src="/profile card img.png"
            alt=""
          />
          <div className="flex flex-col justify-center space-y-1">
            <div className="flex items-center">
              <h1 className="lg:text-xl font-serif">Dr.MonshiZade</h1>
              <img className="w-[15%]" src="/blue tick.png" alt="" />
            </div>
            <h1>Hossein MonshiZade Naeen</h1>
          </div>
        </div>
        <div className="flex justify-center items-center ml-10 mt-1 space-x-3">
          <button className="bg-amber-600 md:w-[25%] w-1/3 rounded-3xl">
            cloud
          </button>
          <button className="bg-amber-600  md:w-[25%] w-1/3 rounded-3xl">
            os
          </button>
        </div>
        <div className="flex justify-center mt-3">
          <h1 className="font-serif text-blue-500">
            Add New Archive For Cloude Space
          </h1>
        </div>
      </Card>
    </>
  );
};

export default ProfileCard;
