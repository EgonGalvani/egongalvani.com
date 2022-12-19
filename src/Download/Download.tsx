import React from "react";

const Download = () => {
  return (
    <div className="section">
      <div className="flex flex-col items-center">
        <span className="text-5xl text-center mb-10">
          Are you curious about my CV?
        </span>
        <a className="rounded bg-sky-500 p-3 hover:bg-sky-400" href="#">
          <span className="text-xl text-white">DOWNLOAD</span>
        </a>
      </div>
    </div>
  );
};

export default Download;
