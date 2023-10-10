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
import { ButtonAtom, TextInputAtom } from "../atoms";

const EventsTable = () => {
  const [tableData, setTableData] = useState([
    {
      date: "",
      time: "",
      location: "",
      targetAudience: "",
      objectives: "",
    },
  ]);

  const handleRowChange = (index, field, value) => {
    const updatedData = [...tableData];
    updatedData[index][field] = value;
    setTableData(updatedData);
  };

  const addRow = () => {
    const newRow = {
      date: "",
      time: "",
      location: "",
      targetAudience: "",
      objectives: "",
    };
    setTableData([...tableData, newRow]);
  };

  return (
    <>
      <label style={{ marginTop: 40 }}>
        EVENTS - the information here does not have to be accurate, however, an
        estimation or an initial plan is needed.
      </label>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ background: grey[500] }}>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Target Audience</TableCell>
              <TableCell>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  Objectives
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
                  <TextInputAtom
                    size={"small"}
                    value={row.targetAudience}
                    onChange={(e) =>
                      handleRowChange(index, "targetAudience", e.target.value)
                    }
                  />
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EventsTable;
