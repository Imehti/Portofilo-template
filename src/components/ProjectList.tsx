import React from "react";
import { projectImages } from "./project-images";
import { Card } from "antd";

const ProjectList = () => {
  return (
    <>
    <div>

 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 px-12 md:ml-24 justify-center">
        {projectImages.map((image) => (
          <div className="relative">
            <img
              key={image.id}
              className="md:w-[75%] h-[130%] aspect-video rounded-lg"
              src={image.src}
              alt={image.content}
            />
            <Card className="absolute -bottom-28 shadow-2xl rounded-2x w-[75%] md:w-[60%] md:ml-7 ml-12">
              <div className="flex flex-col justify-center space-y-2 items-center">
              <p className="text-blue-600">{image.group}</p>
              <h1 className="text-black text-lg font-bold">{image.content}</h1>
              <button className="border border-gray-400 px-3 py-1 rounded-md shadow-md">View Details</button>
              </div>
            </Card>
          </div>
        ))}
     
      </div>
      <div className="flex justify-center mt-36">
        <a className="text-blue-700 font-semibold" href="/">See more</a>
        </div>

        </div>
    </>
  );
};

export default ProjectList;
