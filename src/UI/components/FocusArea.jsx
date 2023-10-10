import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Stack,
} from "@mui/material";
import React from "react";
import EditableTable from "./Table";
import EventsTable from "./Events";
import BudgetBreakDown from "./BudgetBreakdown";
import OtherForm from "./OtherForm";
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
  const belongData = [
    {
      text: "Accessible opportunities provided for, PoD",
      monthImpact: "John",
      totalImpact: 30,
    },
    {
      text: "Blue-collar workers impacted by community development initiatives that enhance their overall quality of life.",
      monthImpact: "Jane",
      totalImpact: 28,
    },
    {
      text: "Response-based relief campaigns for vulnerable groups.",
      monthImpact: "Bob",
      totalImpact: 35,
    },
  ];
  const sustainData = [
    {
      text: "Local entrepreneurs funded / contracted through the CSR department.",
      monthImpact: "John",
      totalImpact: 30,
    },
    {
      text: "Social enterprise partners or beneficiaries, through partnerships and collaborations.",
      monthImpact: "Jane",
      totalImpact: 28,
    },
    {
      text: "Research published with Aldar, by universities or companies we’re working with.",
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
        <EditableTable table={"LIVE"} data={liveData} />
        <EditableTable table={"BELONG"} data={belongData} />
        <EditableTable table={"SUSTAIN"} data={sustainData} />
        <label style={{ marginTop: 40 }}>
          EVENTS - the information here does not have to be accurate, however,
          an estimation or an initial plan is needed.
        </label>
        <EventsTable />
        <label style={{ marginTop: 40 }}>BUDGET BREAKDOWN</label>
        <BudgetBreakDown />
      </Stack>
    </Stack>
  );
}