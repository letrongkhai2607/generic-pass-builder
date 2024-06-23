"use client";
import { useFormStore } from "@/store/useFormStore";
import { checkingHexColorIsLight } from "@/utils/common";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import * as React from "react";
import BarCode from "./BarCode";
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
  const { hexBackgroundColor } = useFormStore((state) => state.information);
  const isLight = checkingHexColorIsLight(hexBackgroundColor);

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
    <Stack
      justifyContent={`center`}
      alignItems={`center`}
      sx={{
        color: isLight ? "black" : "white",
      }}
    >
      <Box
        width={`270px`}
        height={`400px`}
        borderRadius={`1rem`}
        bgcolor={hexBackgroundColor || "lightblue"}
      >
        <Header />
        <TopRow />
        <BarCode />
      </Box>
    </Stack>
  );
}
