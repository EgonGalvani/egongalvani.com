import React, { useEffect, useState } from "react";
import "./Typed.css";

type TypedProps = {
  text: string;
  speed?: number; // in ms
  delay?: number;
};
const DEFAULT_TYPE_SPEED = 100;

const Typed: React.FC<TypedProps> = ({ text, speed }) => {
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

  return <label className="typed">{content}</label>;
};

export default Typed;
