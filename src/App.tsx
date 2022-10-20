import { Container } from "@mui/material";
import React from "react";
import Awards from "./Intro/Awards";
import Intro from "./Intro/Intro";

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <Intro />
      <Awards />
    </Container>
  );
}

export default App;
