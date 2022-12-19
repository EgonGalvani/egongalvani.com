import React from "react";
import HighlightedTypo from "../common/HighlightedTypo/HighlightedTypo";

import "./Intro.css";

const Intro = () => {
  return (
    <div className="section">
      <div className="flex flex-row h-full">
        <div className="flex items-center justify-center flex-1">
          <p className="text-center p-10 text-3xl leading-normal">
            Hi, i am&nbsp;
            <HighlightedTypo mode="full" color="#ffdfba" delay={250}>
              {/*mode="center" color="#ffb3ba">*/}
              <span className="text-5xl">Egon Galvani</span>
            </HighlightedTypo>
            , i just graduated in Cybersecurity at University of Padua. <br />
            I&nbsp;
            <HighlightedTypo mode="low" color="#ffffba" delay={1250}>
              <span className="text-4xl">love creating</span>
            </HighlightedTypo>
            &nbsp;and&nbsp;
            <HighlightedTypo mode="low" color="#ffffba" delay={1750}>
              <span className="text-4xl">learning</span>
            </HighlightedTypo>
            &nbsp;all sort of new things. I am currently looking for a&nbsp;
            <HighlightedTypo mode="low" color="#ffb3ba" delay={2500}>
              <span className="text-4xl">
                challenging and stimulating environment
              </span>
            </HighlightedTypo>
            &nbsp;to start my working career.
          </p>
        </div>
        <div className="items-center justify-end hidden md:flex md:flex-1 h-full">
          <img src="/assets/photo.png" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
