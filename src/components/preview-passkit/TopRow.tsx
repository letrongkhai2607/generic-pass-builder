import { useFormStore } from "@/store/useFormStore";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TopRow = () => {
  const information = useFormStore((state) => state.information);
  return (
    <Box
      padding={`1rem`}
      borderBottom={`1px solid white`}
      borderTop={`1px solid white`}
    >
      <Typography fontSize={14}>
        {information.subHeader || "Attendee"}
      </Typography>
      <Typography fontSize={20} fontWeight={500}>
        {information.header || "Alex Macjacobs"}
      </Typography>
    </Box>
  );
};

export default TopRow;
