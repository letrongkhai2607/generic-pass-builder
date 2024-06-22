"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormStore } from "@/store/useFormStore";
import { Container, Stack } from "@mui/system";
import Header from "./Header";
import TopRow from "./TopRow";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //       Word of the Day
    //     </Typography>
    //     <Typography variant="h5" component="div">
    //       {`${information.firstName} ${information.lastName}`}
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //       {`Age = ${information.age} - Experience = ${information.expYear}`}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
    <Stack justifyContent={`center`} alignItems={`center`}>
      <Box
        width={`270px`}
        height={`400px`}
        borderRadius={`1rem`}
        bgcolor="lightblue"
      >
        <Header />
        <TopRow />
      </Box>
    </Stack>
  );
}
