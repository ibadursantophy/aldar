import { Stack, Typography, lighten } from "@mui/material";
import React from "react";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";
import { grey } from "@mui/material/colors";
import { TextInputAtom } from "../atoms";
export function GeneralInfo() {
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
        <Stack spacing={1} direction={"row"} justifyContent={"space-between"}>
          <Typography
            variant="body1"
            sx={{
              width: "50%",
              color: grey[800],
            }}
          >
            Primary:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "50%",
              color: grey[800],
            }}
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
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextInputAtom
            size="small"
            id="outlined-basic"
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
          />
        </Stack>
        <Stack spacing={1} direction={"row"}>
          <TextInputAtom
            size="small"
            id="outlined-basic"
            label="Mobile Number"
            type="number"
            variant="outlined"
            fullWidth
          />
          <TextInputAtom
            size="small"
            id="outlined-basic"
            label="Mobile Number"
            type="number"
            variant="outlined"
            fullWidth
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
