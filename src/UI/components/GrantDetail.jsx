import { Stack, Typography, lighten } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { CheckBoxGroupAtom, TextInputAtom } from "../atoms";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";
import {
  TimeframeOption,
  frequencyOptions,
} from "../../utils/constants/staticData";
export function GrantDetail() {
  return (
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
          sx={{
            color: grey[700],
            fontSize: 24,
          }}
          variant="h4"
          color="initial"
        >
          Grant Details
        </Typography>
      </Stack>
      <Stack pt={2} spacing={1}>
        <TextInputAtom label="Project Name" variant="outlined" size="small" />
        <TextInputAtom
          label="Project Brief"
          multiline
          rows={4}
          variant="outlined"
          size="small"
        />
        <CheckBoxGroupAtom
          label="Project Timeframe"
          options={TimeframeOption}
        />
        <CheckBoxGroupAtom label="Frequency" options={frequencyOptions} />
        <TextInputAtom label="Classification" variant="outlined" size="small" />
        <TextInputAtom
          label="Requested Budget"
          variant="outlined"
          size="small"
        />
        <TextInputAtom
          label="Total Project Cost"
          variant="outlined"
          size="small"
        />
      </Stack>
    </Stack>
  );
}
