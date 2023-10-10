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
                <Button variant="contained" color="primary" onClick={addRow}>
                  <AddIcon />
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  size={"small"}
                  value={row.date}
                  onChange={(e) =>
                    handleRowChange(index, "date", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  size={"small"}
                  value={row.time}
                  onChange={(e) =>
                    handleRowChange(index, "time", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  size={"small"}
                  value={row.location}
                  onChange={(e) =>
                    handleRowChange(index, "location", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  size={"small"}
                  value={row.targetAudience}
                  onChange={(e) =>
                    handleRowChange(index, "targetAudience", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
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
  );
};

export default EventsTable;