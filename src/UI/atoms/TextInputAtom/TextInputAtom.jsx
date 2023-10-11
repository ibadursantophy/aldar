import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";


export const TextInputAtom = forwardRef((props, ref) => {
  return <TextField size="small" {...props} inputRef={ref} />;
});