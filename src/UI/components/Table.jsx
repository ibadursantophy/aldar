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
} from "@mui/material";
import { grey } from "@mui/material/colors";

const EditableTable = ({data}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{background:grey[200]}}>
          <TableRow>
            <TableCell>LIVE</TableCell>
            <TableCell>Impact in # beneficiaries per month</TableCell>
            <TableCell>Total impact #</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {row.text}
              </TableCell>
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
