import { GrantDetail, GrantDetailForm } from './../components/GrantDetail';
import { GeneralInfoForm } from './../components/GeneralInfo';
import { Stack } from "@mui/material";
import React from "react";
import FocusArea from "../components/FocusArea";
import OtherForm from "../components/OtherForm";

export const Dashboard = () => {
  return (
    <Stack>
      <Stack direction={"row"} spacing={2} px={2} py={4}>
        <GeneralInfoForm  />
        <GrantDetailForm  />
      </Stack>

      <FocusArea />
      <Stack px={2} py={4}>
        <OtherForm />
      </Stack>
    </Stack>
  );
};
