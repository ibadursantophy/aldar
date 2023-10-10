import { Stack } from "@mui/material";
import React from "react";
import EditableTable from "./Table";
import { CheckboxGroupAtom } from "./CheckBoxGroupAtom/CheckBoxGroupAtom";
import {
  FocusAreaOption,
  belongData,
  belongOptions,
  liveData,
  liveOptions,
  sustainData,
  sustainOptions,
} from "../../utils/constants/staticData";
import ProblemGroupAtom from "./ProblemGroupAtom/ProblemGroupAtom";
export default function FocusArea() {
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
        <CheckboxGroupAtom
          label="Focus Areas Applicable"
          options={FocusAreaOption}
        />
        <ProblemGroupAtom
          label="Which problem are you solving:"
          options={[...liveOptions, ...sustainOptions, ...belongOptions]}
        />

        <EditableTable table={"LIVE"} data={liveData} />
        <EditableTable table={"BELONG"} data={belongData} />
        <EditableTable table={"SUSTAIN"} data={sustainData} />
      </Stack>
    </Stack>
  );
}
