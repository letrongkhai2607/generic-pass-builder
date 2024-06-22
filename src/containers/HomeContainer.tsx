import PreviewPasskit from "@/components/preview-passkit";
import { Container, Stack } from "@mui/system";
import Grid from "@mui/material/Grid";

import React from "react";
interface HomeContainerProps {
  children: React.ReactElement;
}
const HomeContainer = ({ children }: HomeContainerProps) => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs>
          {children}
        </Grid>
        <Grid item xs>
          <PreviewPasskit />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContainer;
