import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export function ProblemGroupAtom({ label, options }) {
  return (
    <FormGroup>
      <label>{label}</label>
      {options.map((item, index) => (
        <FormControlLabel key={index} control={<Checkbox />} label={item} />
      ))}
    </FormGroup>
  );
}
