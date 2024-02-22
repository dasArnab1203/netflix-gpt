import React from "react";

const VdoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-white text-opacity-80">{title}</h1>
      <p className="py-6 text-lg w-1/3 text-white text-opacity-50">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 px-12 text-lg rounded-md hover:bg-opacity-60">
         Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-12 mx-2 text-lg rounded-md bg-opacity-50 hover:bg-opacity-70">More Info</button>
      </div>
    </div>
  );
};

export default VdoTitle;
