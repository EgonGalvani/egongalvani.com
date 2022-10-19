import { Container } from "@mui/material";
import React from "react";
import Intro from "./Intro/Intro";

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <Intro />
    </Container>
  );
}

export default App;
