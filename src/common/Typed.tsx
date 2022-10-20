import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { keyframes, TypographyProps } from "@mui/system";

type TypedProps = {
  text: string;
  speed?: number; // in ms
  delay?: number;
};
const DEFAULT_TYPE_SPEED = 100;

const blink = keyframes`
  0%{opacity: 0;}
  100%{opacity: 1;}
}`;

const Typed: React.FC<TypedProps & TypographyProps> = ({
  text,
  speed,
  ...typoProps
}) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    // setTimeout(() => {
    interval = setInterval(() => {
      if (content.length === text.length) clearInterval(interval);
      else setContent((content) => text.slice(0, content.length + 1));
    }, speed || DEFAULT_TYPE_SPEED);
    //}, delay || 0);

    return () => clearInterval(interval);
  }, [text, content, speed]);

  return (
    <Typography
      {...typoProps}
      sx={{
        "&:after": {
          content: '"|"',
          animation: `${blink} 500ms linear infinite alternate`,
        },
      }}
    >
      {content}
    </Typography>
  );
};

export default Typed;
