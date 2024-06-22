import { useFormStore } from "@/store/useFormStore";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";

const Header = () => {
  const information = useFormStore((state) => state.information);
  return (
    <Stack
      flexDirection={`row`}
      gap={`1rem`}
      alignItems={`center`}
      sx={{
        padding: "1rem",
      }}
    >
      <Image
        width={24}
        height={24}
        style={{
          borderRadius: "50%",
        }}
        alt="Passkit logo"
        src={`https://storage.googleapis.com/wallet-lab-tools-codelab-artifacts-public/pass_google_logo.jpg`}
      />
      <Typography>{information.title || "Title"}</Typography>
    </Stack>
  );
};

export default Header;
