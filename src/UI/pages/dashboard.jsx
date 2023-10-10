import { Box, Stack, TextField, Typography, lighten } from "@mui/material";
import { FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";

export const Dashboard = () => {
  return (
    <Stack direction={"row"} spacing={2} px={2} py={4}>
      <Stack
        sx={{
          width: "50%",
          background: "white",
          px: 2,
          py: 1.5,
          borderRadius: 1,
        }}
      >
        <Stack spacing={1} direction={"row"} alignItems={"center"}>
          <Stack
            sx={{
              p: 0.4,
              borderRadius: 0.6,
              background: (theme) => lighten(theme.palette.primary.main, 0.8),
            }}
          >
            <PortraitRoundedIcon color={"primary"} />
          </Stack>
          <Typography
            sx={{ color: grey[700], fontSize: 24 }}
            variant="h4"
            color="initial"
          >
            General Info
          </Typography>
        </Stack>
        <Stack pt={2} spacing={1}>
          <TextField
            size="small"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Address"
            multiline
            rows={4}
            size={"small"}
          />
          <Stack spacing={1} direction={"row"} justifyContent={"space-between"}>
            <Typography variant="body1" sx={{ width: "50%", color: grey[800] }}>
              Primary:
            </Typography>
            <Typography variant="body1" sx={{ width: "50%", color: grey[800] }}>
              Secondary:
            </Typography>
          </Stack>
          <Stack spacing={1} direction={"row"}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Contact Person"
              variant="outlined"
              fullWidth
            />
            <TextField
              size="small"
              id="outlined-basic"
              label="Contact Person"
              variant="outlined"
              fullWidth
            />
          </Stack>
          <Stack spacing={1} direction={"row"}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
            />
            <TextField
              size="small"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
            />
          </Stack>
          <Stack spacing={1} direction={"row"}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              fullWidth
            />
            <TextField
              size="small"
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              fullWidth
            />
          </Stack>
          <Stack spacing={1} direction={"row"}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              fullWidth
            />
            <TextField
              size="small"
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              fullWidth
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: "50%",
          background: "white",
          px: 2,
          py: 1.5,
          borderRadius: 1,
        }}
      >
        <Stack spacing={1} direction={"row"} alignItems={"center"}>
          <Stack
            sx={{
              p: 0.4,
              borderRadius: 0.6,
              background: (theme) => lighten(theme.palette.primary.main, 0.8),
            }}
          >
            <PortraitRoundedIcon color={"primary"} />
          </Stack>
          <Typography
            sx={{ color: grey[700], fontSize: 24 }}
            variant="h4"
            color="initial"
          >
            Grant Details
          </Typography>
        </Stack>
        <Stack pt={2} spacing={1}>
          <TextField label="Project Name" variant="outlined" size="small" />
          <TextField
            label="Project Brief"
            multiline
            rows={4}
            variant="outlined"
            size="small"
          />
          <FormGroup
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <label>Project Timeframe: </label>
            <FormControlLabel
              sx={{ ml: 1 }}
              control={<Checkbox />}
              label="6-12 weeks"
            />
            <FormControlLabel control={<Checkbox />} label="6-12 months" />
            <FormControlLabel control={<Checkbox />} label="1-3 years" />
            <FormControlLabel control={<Checkbox />} label="+4 years" />
          </FormGroup>
          <FormGroup
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Box sx={{width:'20%'}}>
              <label>Frequency: </label>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap:'wrap',
                width:'80%'
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="One Off"
              />
              <FormControlLabel control={<Checkbox />} label="Weekly" />
              <FormControlLabel control={<Checkbox />} label="Monthly" />
              <FormControlLabel control={<Checkbox />} label="Quarterly" />
              <FormControlLabel control={<Checkbox />} label="Semi-Annual" />
              <FormControlLabel control={<Checkbox />} label="Annual" />
            </Box>
          </FormGroup>
          <TextField label="Classification" variant="outlined" size="small" />
          <TextField label="Requested Budget" variant="outlined" size="small" />
          <TextField
            label="Total Project Cost"
            variant="outlined"
            size="small"
          />
          <FormGroup sx={{ display: "flex",alignItems:'center', flexDirection: "row" }}>
            <label>Focus Areas Applicable:</label>
            <FormControlLabel sx={{ml:1}} control={<Checkbox />} label="Live" />
            <FormControlLabel control={<Checkbox />} label="Belong" />
            <FormControlLabel control={<Checkbox />} label="Sustain" />
          </FormGroup>
        </Stack>
      </Stack>
    </Stack>
  );
};
