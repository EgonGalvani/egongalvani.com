import React from "react";
import Typed from "../common/Typed/Typed";

const Awards = () => {
  return (
    <div className="section">
      <div className="flex flex-row h-full">
        <div className="flex items-center justify-center flex-1">
          <p className="text-center p-10 text-3xl">
            <Typed text="Ciao Mondo" />
          </p>
        </div>
        <div className="items-center justify-center hidden md:flex md:flex-1">
          <p className="text-center p-10 text-3xl">World</p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
