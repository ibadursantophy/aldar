import React from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  Button,
} from "@mui/material";

const OtherForm = () => {
  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom>
        Funding and Initiative Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            size="small"
            fullWidth
            label="Have this entity previously received funding or sponsorship from Aldar?"
            name="receivedFunding"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            size="small"
            fullWidth
            label="Is this the first cycle of this initiative?"
            name="firstCycle"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            fullWidth
            label="Has there been similar impact project delivered before? (If yes, attach report or portfolio for reference)"
            name="similarProject"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox name="confirm" color="primary" />}
            label="I hereby confirm that the information provided is accurate and up to date as per my knowledge. I commit to delivering the promised impact and delivering reports within the expected timeframe."
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OtherForm;
