import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, FormGroup, Stack, Typography, lighten } from "@mui/material";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";
import { grey } from "@mui/material/colors";
import { TextInputAtom, ToggleButtonAtom } from "../atoms";
import {
  TimeframeOption,
  frequencyOptions,
  grantDetailsDefaultValue,
} from "../../utils/constants/staticData";

const schema = yup.object().shape({
  projectName: yup.string().required("Project Name is required"),
  projectBrief: yup.string().required("Project Brief is required"),
  classification: yup.string().required("Classification is required"),
  requestedBudget: yup.number().required("Requested Budget is required"),
  totalProjectCost: yup.number().required("Total Project Cost is required"),
});

export function GrantDetailForm() {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: grantDetailsDefaultValue,
  });
  console.log(formState.errors);
  const onSubmit = (data) => {
    console.log("data", data);
  };
  const TextInputWithRef = React.forwardRef((props, ref) => (
    <TextInputAtom {...props} ref={ref} />
  ));

  return (
    <Stack
      sx={{
        width: "55%",
        background: "white",
        px: 2,
        py: 1.5,
        borderRadius: 1,
      }}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
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
        <Controller
          name="projectName"
          control={control}
          render={({ field, fieldState }) => (
            <TextInputWithRef
              label="Project Name"
              variant="outlined"
              size="small"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="projectBrief"
          control={control}
          render={({ field, fieldState }) => (
            <TextInputWithRef
              label="Project Brief"
              multiline
              rows={4}
              variant="outlined"
              size="small"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <FormGroup
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box sx={{ width: "25%" }}>
            <label>Project Timeframe: </label>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              width: "75%",
            }}
          >
            <Controller
              name="projectTimeFrame"
              control={control}
              render={({ field }) => (
                <ToggleButtonAtom
                  value={field.value}
                  exclusive
                  onChange={(event, newValue) => {
                    field.onChange(newValue);
                  }}
                  ariaLabel="projectTimeFrame"
                  options={TimeframeOption.map((i) => i.label)}
                />
              )}
            />
          </Box>
        </FormGroup>

        <FormGroup
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box sx={{ width: "25%" }}>
            <label>Frequency: </label>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              width: "75%",
            }}
          >
            <Controller
              name="frequency"
              control={control}
              render={({ field }) => (
                <ToggleButtonAtom
                  value={field.value}
                  exclusive
                  onChange={(event, newValue) => {
                    field.onChange(newValue);
                  }}
                  ariaLabel="frequency"
                  options={frequencyOptions.map((i) => i.label)}
                />
              )}
            />
          </Box>
        </FormGroup>
        <Controller
          name="classification"
          control={control}
          render={({ field, fieldState }) => (
            <TextInputWithRef
              label="Classification"
              variant="outlined"
              size="small"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Stack direction="row" spacing={1}>
          <Controller
            name="requestedBudget"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                label="Requested Budget"
                type="number"
                variant="outlined"
                size="small"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="totalProjectCost"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                label="Total Project Cost"
                type="number"
                variant="outlined"
                size="small"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
