import React from "react";
import "./style.css";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{background:(theme)=>theme.palette.primary.main,px:2,py:1 }}>
      <Typography sx={{fontWeight:'bold',fontSize:25,color:'white'}} variant="h6">Aldar Form</Typography>
    </Box>
  );
};

export default Header;
