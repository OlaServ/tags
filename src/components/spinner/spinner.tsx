import { CircularProgress, CircularProgressProps } from "@mui/material";

export const Spinner = ({ ...rest }: CircularProgressProps) => {
  return (
    <CircularProgress
      thickness={5}
      size={100}
      sx={{ color: "#c0ff5b" }}
      {...rest}
    />
  );
};
