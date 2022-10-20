import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Typed from "../common/Typed";

const Awards = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ height: "100vh", alignItems: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Typed text="Maecenas sodales augue libero" />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ overflow: "hidden", display: { xs: "none", md: "block" } }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Awards;
