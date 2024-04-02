import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
   <Box display="flex" width="100%" height="100vh" justifyContent="center" alignItems="center">
     <CircularProgress thickness={5} size={100} sx={{ color: "#c0ff5b" }} />
   </Box>
  );
}
