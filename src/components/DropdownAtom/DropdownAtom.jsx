import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function DropdownAtom({
  labelId,
  id,
  value,
  label,
  onChange,
  options = [],
  ...restProps
}) {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={value}
          label={label}
          onChange={handleChange}
          {...restProps}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropdownAtom;
