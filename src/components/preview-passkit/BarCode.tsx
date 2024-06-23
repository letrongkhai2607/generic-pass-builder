import { useActiveFormStore } from "@/store/useActiveFormStore";
import { useFormStore } from "@/store/useFormStore";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import QRCode from "react-qr-code";

const BarCode = () => {
  const { qrCode } = useFormStore((state) => state.information);
  const activeField = useActiveFormStore((state) => state.activeField);

  return (
    <Box
      padding={`1rem`}
      maxWidth={`110px`}
      maxHeight={`110px`}
      width={`100%`}
      height={`100%`}
      margin={`0px auto`}
    >
      <QRCode
        size={110}
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "100%",
          borderRadius: "0.5rem",
        }}
        value={qrCode || ""}
      />
      <Typography fontSize={14} textAlign={`center`}>
        {qrCode || ""}
      </Typography>
    </Box>
  );
};

export default BarCode;
