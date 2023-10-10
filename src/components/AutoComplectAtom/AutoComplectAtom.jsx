import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const AutocompleteAtom = (props) => {
  const { id, options, sx, label, ...otherProps } = props;

  return (
    <Autocomplete
      disablePortal
      id={id}
      options={options}
      sx={sx}
      renderInput={(params) => <TextField {...params} label={label} />}
      {...otherProps}
    />
  );
};
