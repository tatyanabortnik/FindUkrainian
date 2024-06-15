import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" style={{ color: "black" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "black" }}>
        The page you're looking for doesn't exist.
      </Typography>
      <Link to={"/"}>
        <Button variant="contained">Back Home</Button>
      </Link>
    </Box>
  );
}
