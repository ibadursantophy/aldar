import { InputLabel, Stack, Typography, lighten } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";
import FocusArea from "../components/FocusArea";
import TextInputAtom from "../components/TextInputAtom/TextInputAtom";
import { CheckboxGroupAtom } from "../components/CheckBoxGroupAtom/CheckBoxGroupAtom";
import EventsTable from "../components/Events";
import OtherForm from "../components/OtherForm";

export const Dashboard = () => {
  const checkboxOptions = [
    { label: "One Off" },
    { label: "Weekly" },
    { label: "Monthly" },
    { label: "Quarterly" },
    { label: "Semi-Annual" },
    { label: "Annual" },
  ];

  const TimeframeOption = [
    { label: "6-12 weeks" },
    { label: "6-12 months" },
    { label: "1-3 years" },
    { label: "+4 years" },
  ];

  return (
    <Stack>
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
            <TextInputAtom
              size="small"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />
            <TextInputAtom
              id="outlined-multiline-flexible"
              label="Address"
              multiline
              rows={4}
              size={"small"}
            />
            <Stack
              spacing={1}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography
                variant="body1"
                sx={{ width: "50%", color: grey[800] }}
              >
                Primary:
              </Typography>
              <Typography
                variant="body1"
                sx={{ width: "50%", color: grey[800] }}
              >
                Secondary:
              </Typography>
            </Stack>
            <Stack spacing={1} direction={"row"}>
              <TextInputAtom
                size="small"
                id="outlined-basic"
                label="Contact Person"
                variant="outlined"
                fullWidth
              />
              <TextInputAtom
                size="small"
                id="outlined-basic"
                label="Contact Person"
                variant="outlined"
                fullWidth
              />
            </Stack>
            <Stack spacing={1} direction={"row"}>
              <TextInputAtom
                size="small"
                id="outlined-basic"
                label="Title"
                variant="outlined"
                fullWidth
              />
              <TextInputAtom
                size="small"
                id="outlined-basic"
                label="Title"
                variant="outlined"
                fullWidth
              />
            </Stack>
            <Stack spacing={1} direction={"row"}>
              <TextInputAtom
                size="small"
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                fullWidth
              />
              <TextInputAtom
                size="small"
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                fullWidth
              />
            </Stack>
            <Stack spacing={1} direction={"row"}>
              <TextInputAtom
                size="small"
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                fullWidth
              />
              <TextInputAtom
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
            <TextInputAtom
              label="Project Name"
              variant="outlined"
              size="small"
            />
            <TextInputAtom
              label="Project Brief"
              multiline
              rows={4}
              variant="outlined"
              size="small"
            />
            <CheckboxGroupAtom
              label="Project Timeframe"
              options={TimeframeOption}
            />
            <CheckboxGroupAtom label="Frequency" options={checkboxOptions} />
            <TextInputAtom
              label="Classification"
              variant="outlined"
              size="small"
            />
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
      </Stack>

      <FocusArea />
      <Stack  px={2} py={4}>
        <OtherForm />
      </Stack>
    </Stack>
  );
};
