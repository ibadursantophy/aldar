import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export function ToggleButtonAtom({onChange, value, options,ariaLabel }) {
  return (
    <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={onChange}
      aria-label={ariaLabel}
      size="small"
    >
      {options.map((item) => {
        return <ToggleButton value={item}>{item}</ToggleButton>;
      })}
    </ToggleButtonGroup>
  );
}
