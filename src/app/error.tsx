"use client";

import { useEffect } from "react";
import { Button } from "@/components/button/button";
import { Typography } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Typography variant="h2" color="#FFFFFF">
        Something went wrong!
      </Typography>
      <Button onClick={() => reset()} sx={{ marginTop: "1rem" }}>
        Try again
      </Button>
    </>
  );
}
