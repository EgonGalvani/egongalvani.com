import React from "react";
import HighlightedTypo from "../common/HighlightedTypo/HighlightedTypo";

const Intro = () => {
  return (
    <div
      className="flex flex-row h-full"
      // sx={{ height: "100vh", alignItems: "center" }}
    >
      <div className="flex items-center justify-center flex-1">
        <p className="text-center p-10 text-3xl">
          Lorem ipsum dolor sit amet,
          <HighlightedTypo mode="center" color="#ffb3ba">
            consectetur adipiscing elit
          </HighlightedTypo>
          . Etiam sollicitudin auctor metus sit amet hendrerit. Duis vestibulum
          vitae elit vel finibus.
          <HighlightedTypo mode="full" color="#ffdfba" delay={750}>
            Nunc feugiat ut nibh sed molestie.
          </HighlightedTypo>
          Morbi ornare diam vestibulum, pretium lacus faucibus, sagittis nulla.
          <HighlightedTypo mode="high" color="#baffc9" delay={1500}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae;
          </HighlightedTypo>
          Etiam efficitur faucibus augue in sagittis.
          <HighlightedTypo mode="low" color="#bae1ff" delay={2250}>
            Nulla nec tortor laoreet ex cursus condimentum.
          </HighlightedTypo>
          Sed congue vulputate ante id convallis. Etiam euismod faucibus dui,
          quis imperdiet risus faucibus eu.
        </p>
      </div>
      <div className="items-center justify-end hidden md:flex md:flex-1">
        <img src="/assets/photo.png" alt="profile" />
      </div>
    </div>
  );
};

export default Intro;
