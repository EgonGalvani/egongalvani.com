import { Typography, styled, keyframes } from "@mui/material";

type HighlightMode = "low" | "high" | "full" | "center";

type HighlightedTypoProps = {
  highlightColor: string;
  delay?: number;
  duration?: number;
  mode?: HighlightMode;
};

const getBackground = (mode: HighlightMode, color: string) => {
  // default: full
  let tmp = { backgroundPosition: "0 60%", backgroundSize: "0% 50%" };
  switch (mode) {
    case "center":
      tmp = { backgroundPosition: "0 60%", backgroundSize: "0% 20%" };
      break;
    case "high":
      tmp = { backgroundPosition: "0 30%", backgroundSize: "0% 40%" };
      break;
    case "low":
      tmp = { backgroundPosition: "0 90%", backgroundSize: "0% 40%" };
      break;
  }
  return {
    background: `linear-gradient(120deg, ${color} 0%, ${color} 100%)`,
    backgroundRepeat: "no-repeat",
    ...tmp,
  };
};

const getAnimation = (toBgSize: number, color: string) => keyframes`
  0% {
    background-size: 0% ${toBgSize}%; 
  }
  100% { 
    background-size: 100% ${toBgSize}%;
  }
`;

const HighlightedTypo = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "highlightColor",
})<HighlightedTypoProps>(({ theme, highlightColor, delay, duration, mode }) => {
  const background = getBackground(mode || "full", highlightColor);
  const animation = getAnimation(
    parseInt(background.backgroundSize.split(" ")[1]),
    highlightColor
  );
  return {
    "&": {
      color: theme.palette.common.black,
      ...background,
      animation: `${animation} ${duration || 500}ms ease-in-out ${
        delay || 0
      }ms 1 normal forwards`,
    },
  };
});

export default HighlightedTypo;
