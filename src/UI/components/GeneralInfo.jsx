import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Stack, Typography, lighten } from "@mui/material";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";
import { grey } from "@mui/material/colors";
import { TextInputAtom } from "../atoms";
import { phoneRegExp } from "../../utils/constants/staticData";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  address: yup.object().shape({
    line1: yup.string().required("Address Line 1 is required"),
    line2: yup.string(),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    postalCode: yup.string().required("Postal Code is required"),
    country: yup.string().required("Country is required"),
  }),
  primaryTitle: yup.string().required("Primary Title is required"),
  secondaryTitle: yup.string().required("Secondary Title is required"),
  primaryEmail: yup
    .string()
    .email("Invalid email")
    .required("Primary Email is required"),
  secondaryEmail: yup
    .string()
    .email("Invalid email")
    .required("Secondary Email is required"),
  primaryMobile: yup
    .string()
    .matches(phoneRegExp, "Invalid mobile number")
    .required("Primary Mobile Number is required"),
  secondaryMobile: yup
    .string()
    .matches(phoneRegExp, "Invalid mobile number")
    .required("Secondary Mobile Number is required"),
});

export function GeneralInfoForm() {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };
  const TextInputWithRef = React.forwardRef((props, ref) => (
    <TextInputAtom {...props} ref={ref} />
  ));
  return (
    <Stack
      sx={{
        width: "45%",
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
          General Info
        </Typography>
      </Stack>
      <Stack pt={2} spacing={1}>
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState }) => (
            <TextInputWithRef
              size="small"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />
        <Stack direction={"row"} spacing={1}>
          <Controller
            name="address.line1"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                size="small"
                id="outlined-basic"
                label="Address Line 1"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="address.line2"
            control={control}
            render={({ field }) => (
              <TextInputWithRef
                fullWidth
                size="small"
                id="outlined-basic"
                label="Address Line 2"
                variant="outlined"
                {...field}
              />
            )}
          />
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Controller
            name="address.city"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                fullWidth
                size="small"
                id="outlined-basic"
                label="City"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="address.state"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                fullWidth
                size="small"
                id="outlined-basic"
                label="State"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Controller
            name="address.postalCode"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                fullWidth
                size="small"
                id="outlined-basic"
                label="Postal Code"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="address.country"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                fullWidth
                size="small"
                id="outlined-basic"
                label="Country"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </Stack>

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
          <Controller
            name="primaryTitle"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                size="small"
                id="outlined-basic"
                label="Title"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="secondaryTitle"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                size="small"
                id="outlined-basic"
                label="Title"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </Stack>
        <Stack spacing={1} direction={"row"}>
          <Controller
            name="primaryEmail"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                size="small"
                id="outlined-basic"
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="secondaryEmail"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                size="small"
                id="outlined-basic"
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </Stack>
        <Stack spacing={1} direction={"row"}>
          <Controller
            name="primaryMobile"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                size="small"
                id="outlined-basic"
                label="Mobile Number"
                type="number"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="secondaryMobile"
            control={control}
            render={({ field, fieldState }) => (
              <TextInputWithRef
                size="small"
                id="outlined-basic"
                label="Mobile Number"
                type="number"
                variant="outlined"
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
