import { Container } from "@mui/material";
import React, { lazy } from "react";
import Intro from "./Intro/Intro";
import Awards from "./Awards/Awards";

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <Intro />
      <Awards />
    </Container>
  );
}

export default App;
