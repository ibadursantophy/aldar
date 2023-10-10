import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import { AutocompleteAtom } from "../atoms/AutoComplectAtom/AutoComplectAtom";
import { ButtonAtom, TextInputAtom } from "../atoms";
import { targetOption } from "../../utils/constants/staticData";

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
                <ButtonAtom
                  variant="contained"
                  color="primary"
                  onClick={handleAddRow}
                >
                  <AddIcon />
                </ButtonAtom>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id}>
              {row?.edit ? (
                <TableCell>
                  <AutocompleteAtom
                    size={"small"}
                    label={"Other Target"}
                    options={targetOption.map((item) => item.title)}
                  />
                </TableCell>
              ) : (
                <TableCell>{row.text}</TableCell>
              )}
              <TableCell>
                <TextInputAtom size={"small"} name="name" />
              </TableCell>
              <TableCell>
                <TextInputAtom size={"small"} name="age" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EditableTable;
