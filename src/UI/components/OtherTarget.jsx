import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const OtherTarget = () => {
  const initialRows = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 28 },
  ];

  const [rows, setRows] = useState(initialRows);
  const [nextId, setNextId] = useState(3);

  const addRow = () => {
    const newRow = { id: nextId, name: '', age: 0 };
    setNextId(nextId + 1);
    setRows([...rows, newRow]);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows.find((r) => r.id === row.id).name = e.target.value;
                      setRows(updatedRows);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    value={row.age}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows.find((r) => r.id === row.id).age = e.target.value;
                      setRows(updatedRows);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={addRow}>
        Add Row
      </Button>
    </div>
  );
};

export default OtherTarget;
