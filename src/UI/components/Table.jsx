import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import { AutocompleteAtom } from "./AutoComplectAtom/AutoComplectAtom";

const EditableTable = ({ table, data }) => {
  const [tableData, setTableData] = useState(data);

  const handleAddRow = () => {
    const newRow = {
      id: tableData.length + 1, // You can use a better way to generate IDs.
      text: "",
      edit: true,
    };
    setTableData([...tableData, newRow]);
  };
  const targetOption = [
    {
      title: "Of workshops, activation events or engagement spaces delivered",
      value: "",
    },
    {
      title: "Of programs (6 weeks minimum) delivered",
      value: "",
    },
    {
      title: "Of Aldar community members engaged",
      value: "",
    },
    {
      title: "Of success stories published and reported",
      value: "",
    },
    {
      title: "Of volunteers from Aldar",
      value: "",
    },
    {
      title: "Of total community volunteers",
      value: "",
    },
    {
      title: "Of total volunteering Hours",
      value: "",
    },
    {
      title: "Of PoD engaged in the program",
      value: "",
    },
    {
      title: "Of individuals working on the project",
      value: "",
    },
    {
      title: "Of individuals impacted by the project",
      value: "",
    },
  ];
  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ background: grey[500] }}>
          <TableRow>
            <TableCell>{table}</TableCell>
            <TableCell>Impact in # beneficiaries per month</TableCell>
            <TableCell>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                Total impact #
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddRow}
                >
                  <AddIcon />
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              {row?.edit ? (
                <TableCell>
                  <AutocompleteAtom size={'small'} label={'Other Target'} options={targetOption.map((item)=>item.title)} />
                </TableCell>
              ) : (
                <TableCell>{row.text}</TableCell>
              )}
              <TableCell>
                <TextField size={"small"} name="name" />
              </TableCell>
              <TableCell>
                <TextField size={"small"} name="age" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EditableTable;
