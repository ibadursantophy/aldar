import {
  Stack,
} from "@mui/material";
import React from "react";
import EventsTable from "./Events";
import BudgetBreakDown from "./BudgetBreakdown";
import FocusAreaTabs from "./FocusAreaTabs";
export default function FocusArea() {
  return (
    <Stack direction={"row"} spacing={2} px={2}>
      <Stack
        sx={{
          background: "white",
          borderRadius: 1,
        }}
        px={2}
        pb={4}
        spacing={1}
      >
        <FocusAreaTabs/>
        <EventsTable />
        <BudgetBreakDown />
      </Stack>
    </Stack>
  );
}
