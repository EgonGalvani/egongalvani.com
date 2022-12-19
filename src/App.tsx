import React from "react";
import Intro from "./Intro/Intro";
import Awards from "./Awards/Awards";
import Download from "./Download/Download";
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      navigation
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Intro />
            <Awards />
            <Download />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
