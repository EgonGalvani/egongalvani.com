import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import HighlightedTypo from "../common/HighlightedTypo";

const Intro = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ height: "100vh", alignItems: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" align="center" sx={{ p: "4rem" }}>
            Lorem ipsum dolor sit amet,
            <HighlightedTypo
              variant="h4"
              mode="center"
              highlightColor="#ffb3ba"
              sx={{ display: "inline" }}
            >
              consectetur adipiscing elit
            </HighlightedTypo>
            . Etiam sollicitudin auctor metus sit amet hendrerit. Duis
            vestibulum vitae elit vel finibus.
            <HighlightedTypo
              sx={{ display: "inline" }}
              variant="h4"
              mode="full"
              highlightColor="#ffdfba"
              delay={750}
            >
              Nunc feugiat ut nibh sed molestie.
            </HighlightedTypo>
            Morbi ornare diam vestibulum, pretium lacus faucibus, sagittis
            nulla.
            <HighlightedTypo
              variant="h4"
              mode="high"
              highlightColor="#baffc9"
              sx={{ display: "inline" }}
              delay={1500}
            >
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae;
            </HighlightedTypo>
            Etiam efficitur faucibus augue in sagittis.
            <HighlightedTypo
              variant="h4"
              mode="low"
              highlightColor="#bae1ff"
              sx={{ display: "inline" }}
              delay={2250}
            >
              Nulla nec tortor laoreet ex cursus condimentum.
            </HighlightedTypo>
            Sed congue vulputate ante id convallis. Etiam euismod faucibus dui,
            quis imperdiet risus faucibus eu.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ overflow: "hidden", display: { xs: "none", md: "block" } }}
        >
          <img
            src="/assets/photo.png"
            alt="profile"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
