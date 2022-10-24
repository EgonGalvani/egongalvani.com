import React from "react";
import "./HighlightedTypo.css";

type HighlightMode = "low" | "high" | "full" | "center";

type HighlightedTypoProps = {
  color: string;
  delay?: number;
  duration?: number;
  mode?: HighlightMode;
  children: React.ReactNode;
};

const bgHeights = new Map<HighlightMode, string>([
  ["full", "50%"],
  ["center", "20%"],
  ["high", "40%"],
  ["low", "40%"],
]);

const HighlightedTypo: React.FC<HighlightedTypoProps> = ({
  color,
  delay,
  duration,
  mode,
  children,
}) => {
  return (
    <label
      className={`bg-no-repeat hTypo-${mode}`}
      style={
        {
          "--bg-height": bgHeights.get(mode || "full"),
          backgroundImage: `linear-gradient(120deg, ${color} 0%, ${color} 100%)`,
          animation: `${duration || 500}ms ease-in-out ${
            delay || 0
          }ms 1 normal forwards running bgSizeAnim`,
        } as React.CSSProperties
      }
    >
      {children}
    </label>
  );
};

export default HighlightedTypo;
