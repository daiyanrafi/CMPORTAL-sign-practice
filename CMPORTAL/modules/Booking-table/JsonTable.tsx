// JsonTable.tsx
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import EditPage from './EditPage';
import jsonData from './data.json';

const JsonTable: React.FC = () => {
  const [data, setData] = useState(jsonData);
  const [editingRow, setEditingRow] = useState<number | null>(null);

  const handleEditClick = (rowId: number) => {
    setEditingRow(rowId);
  };

  const handleSave = (updatedData: any) => {
    setData((prevData) =>
      prevData.map((row) => (row.id === updatedData.id ? { ...row, ...updatedData } : row))
    );
    setEditingRow(null);
  };

  const handleCloseEditPage = () => {
    setEditingRow(null);
  };

  // const calculateDuration = (row: any): string => {
  //   const startTime = new Date(row.startTime);
  //   const endTime = row.endTime ? new Date(row.endTime) : new Date();
  //   const durationInMillis = endTime.getTime() - startTime.getTime();

  //   const hours = Math.floor(durationInMillis / (1000 * 60 * 60));
  //   const minutes = Math.floor((durationInMillis % (1000 * 60 * 60)) / (1000 * 60));

  //   return `${hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : ''} ${minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : ''}`;
  // };

  return (
    <>
      {editingRow === null ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Resource</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>Edit Time</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Booking Time</TableCell>
                <TableCell>Booking Status</TableCell>
                <TableCell>Created On</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.resource}</TableCell>
                  <TableCell>{row.startTime}</TableCell>
                  <TableCell>{row.endTime}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  {/* <TableCell>{calculateDuration(row)}</TableCell> */}
                  <TableCell>{row.bookingTime}</TableCell>
                  <TableCell>{row.bookingStatus}</TableCell>
                  <TableCell>{row.createdOn}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEditClick(row.id)}>Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <EditPage data={data.find((row) => row.id === editingRow)} onSave={handleSave} onClose={handleCloseEditPage} />
      )}
    </>
  );
};

export default JsonTable;
