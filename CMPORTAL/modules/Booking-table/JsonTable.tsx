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
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>ID</TableCell>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Resource</TableCell>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Start Time</TableCell>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Edit Time</TableCell>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Duration</TableCell>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Booking Time</TableCell>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Booking Status</TableCell>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Created On</TableCell>
                <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri', paddingLeft: '40px' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{row.id}</TableCell>
                  <TableCell style={{ color: '#003591', fontSize: 'medium', fontFamily: 'Calibri' }}>{row.resource}</TableCell>
                  <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{row.startTime}</TableCell>
                  <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{row.endTime}</TableCell>
                  <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{row.duration}</TableCell>
                  {/* <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{calculateDuration(row)}</TableCell> */}
                  <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{row.bookingTime}</TableCell>
                  <TableCell style={{ color: '#003591', fontSize: 'medium', fontFamily: 'Calibri' }}>{row.bookingStatus}</TableCell>
                  <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{row.createdOn}</TableCell>
                  <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>
                  <Button onClick={() => handleEditClick(row.id)}
                      style={{
                        fontSize: "medium",
                        fontFamily: "Calibri",
                        backgroundColor: "transparent",
                        border: "1px solid #003591",
                        color: "#003591",
                        borderRadius: "0",
                        width: "100px",
                        height: "30px", 
                      }}>Edit</Button>
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
