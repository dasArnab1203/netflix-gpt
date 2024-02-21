import React from "react";

const VdoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-black p-2 px-12 text-lg rounded-md">
        ▹▶Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-12 mx-2 text-lg rounded-md bg-opacity-50">More Info</button>
      </div>
    </div>
  );
};

export default VdoTitle;
