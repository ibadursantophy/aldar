import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
} from "@mui/material";
import React from "react";
import EditableTable from "./Table";
export default function FocusArea() {
  const liveOptions = [
    "Access to quality education, this includes courses, programs, and scholarship.",
    "Happy and healthy communities, focusing on mental and physical wellbeing",
    "Upgrading homes and providing shelter for underprivileged families.",
  ];
  const belongOptions = [
    "Creating accessible opportunities for people of determination.",
    "Improving the wellbeing of blue-collar workers.",
    "Response-based relief campaigns for vulnerable groups.",
  ];
  const sustainOptions = [
    "Enabling local entrepreneurs and upskilling youth.",
    "Supporting local research and development programs.",
    "Social innovation and entrepreneurship.",
  ];
  const liveData = [
    {
      text: "Beneficiaries impacted by gaining accessing quality education through Aldar, this includes courses, programs, and scholarships.",
      monthImpact: "John",
      totalImpact: 30,
    },
    {
      text: "Supporting wellbeing of communities.",
      monthImpact: "Jane",
      totalImpact: 28,
    },
    {
      text: "Upgraded homes for underprivileged families.",
      monthImpact: "Bob",
      totalImpact: 35,
    },
  ];
  return (
    <Stack direction={"row"} spacing={2} px={2}>
      <Stack
        sx={{
          background: "white",
          borderRadius: 1,
        }}
        px={2}
        py={4}
        spacing={1}
      >
        <FormGroup
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "20%",
            }}
          >
            <label>Focus Areas Applicable:</label>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              width: "80%",
            }}
          >
            <FormControlLabel control={<Checkbox />} label="Live" />
            <FormControlLabel control={<Checkbox />} label="Belong" />
            <FormControlLabel control={<Checkbox />} label="Sustain" />
          </Box>
        </FormGroup>
        <FormGroup>
          <label>Which problem are you solving:</label>
          {liveOptions.map((item) => {
            return <FormControlLabel control={<Checkbox />} label={item} />;
          })}
          {belongOptions.map((item) => {
            return <FormControlLabel control={<Checkbox />} label={item} />;
          })}
          {sustainOptions.map((item) => {
            return <FormControlLabel control={<Checkbox />} label={item} />;
          })}
        </FormGroup>
        <EditableTable data={liveData} />
        <EditableTable data={liveData} />
        <EditableTable data={liveData} />
      </Stack>
    </Stack>
  );
}
