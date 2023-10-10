import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; // Import the Checkbox component from your library

export const CheckboxGroupAtom=({ label, options }) =>{
  return (
    <FormGroup
      sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Box sx={{ width: '20%' }}>
        <label>{label}: </label>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '80%',
        }}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox />} 
            label={option.label}
          />
        ))}
      </Box>
    </FormGroup>
  );
}
