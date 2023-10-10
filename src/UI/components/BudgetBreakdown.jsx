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
import TextInputAtom from "./TextInputAtom/TextInputAtom";
import ButtonAtom from "./ButtonAtom/ButtonAtom";

const BudgetBreakDown = () => {
  const [tableData, setTableData] = useState([
    {
      item: "",
      description: "",
      est_price: "",
      est_qty: "",
      est_cost: "",
      covered_by_partner: "",
      covered_by_aldar: "",
    },
  ]);

  const handleRowChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index][field] = value;
    setTableData(updatedData);
  };

  const addRow = () => {
    const newRow = {
      item: "",
      description: "",
      est_price: "",
      est_qty: "",
      est_cost: "",
      covered_by_partner: "",
      covered_by_aldar: "",
    };
    setTableData([...tableData, newRow]);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ background: grey[500] }}>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Description / Justification</TableCell>
            <TableCell>Estimated Price</TableCell>
            <TableCell>Estimated Qty.</TableCell>
            <TableCell>Estimated Cost</TableCell>
            <TableCell>Covered by Partner</TableCell>
            <TableCell>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                Covered by Aldar
                <ButtonAtom
                  variant="contained"
                  color="primary"
                  onClick={addRow}
                >
                  <AddIcon />
                </ButtonAtom>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextInputAtom
                  size={"small"}
                  value={row.date}
                  onChange={(e) =>
                    handleRowChange(index, "date", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextInputAtom
                  size={"small"}
                  value={row.time}
                  onChange={(e) =>
                    handleRowChange(index, "time", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextInputAtom
                  size={"small"}
                  value={row.location}
                  onChange={(e) =>
                    handleRowChange(index, "location", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextInputAtom size={"small"} />
              </TableCell>
              <TableCell>
                <TextInputAtom
                  size={"small"}
                  value={row.objectives}
                  onChange={(e) =>
                    handleRowChange(index, "objectives", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextInputAtom size={"small"} />
              </TableCell>
              <TableCell>
                <TextInputAtom size={"small"} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BudgetBreakDown;
