import React, { forwardRef } from 'react';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const CheckBoxGroupAtom = forwardRef(({ label, options, value, onChange }, ref) => {
  const handleChange = (option) => {
    const updatedValue = value.includes(option.value)
      ? value.filter((val) => val !== option.value)
      : [...value, option.value];

    onChange(updatedValue);
  };

  return (
    <FormGroup
      sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Box sx={{ width: '25%' }}>
        <label>{label}: </label>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '75%',
        }}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={value.includes(option.value)}
                onChange={() => handleChange(option)}
              />
            }
            label={option.label}
          />
        ))}
      </Box>
    </FormGroup>
  );
});

