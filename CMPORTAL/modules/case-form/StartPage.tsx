// StartPage.tsx

import React from 'react';
import {
  Typography,
  Paper,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Box,
  TablePagination,
  IconButton
} from '@mui/material';
import { FormData } from './types';
// import VisibilityIcon from '@mui/icons-material/AddCircleOutline';
import PageviewIcon from '@mui/icons-material/Pageview';
import AddCircleIcon from '@mui/icons-material/AddCircle';

type StartPageProps = {
  onNext: () => void;
  onEdit: (index: number) => void;
  onView: (index: number) => void;
  userDataList: FormData[];
};

// Customize the available rows per page options
const rowsPerPageOptions = [5, 10, 25];

const StartPage: React.FC<StartPageProps> = ({ onNext, onEdit, onView, userDataList }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

  //++pagination started++
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  //++pagination ended++

  const handleNext = () => {
    onNext();
  };

  //--for status color started--
  const getStatusByIndex = (index: number): string => {
    const statuses = ['In Progress', 'Overdue', 'Completed'];
    return statuses[index % statuses.length];
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return '#00FFFF';
      case 'Overdue':
        return '#f21f34';
      case 'Completed':
        return '#1dcc45';
      default:
        return '#333';
    }
  };
  //--for status color ended--

  //**for created date started**
  // const getFormattedDate = (date: Date): string => {
  //   const options: Intl.DateTimeFormatOptions = {
  //     year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
  //     minute: '2-digit'
  //   };
  //   return date.toLocaleDateString(undefined, options);
  // };
  const getFormattedDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      hour12: true,
    };
    return date.toLocaleString(undefined, options);
  };
  //**created date ended**

  //slice started
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const slicedData = userDataList.slice(startIndex, endIndex);
  //slice ended

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh',
        marginTop: '40px',
      }}
    >
      <Paper elevation={3} style={{ padding: '2rem', width: '100%', overflow: 'auto' }}>
        <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" style={{ fontSize: '20px', fontWeight: '600', color: '#333', fontFamily: 'Calibri' }}>MY CASES</Typography>
          {/* <Button variant="contained" color="primary" onClick={handleNext} style={{ fontSize: '13px', fontFamily: 'Calibri, Arial', color: '#fff', borderRadius: '0', backgroundColor: '#00A4EF' }}>
            Add New Cases
          </Button> */}

          {/* <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            style={{
              fontSize: 'large',
              fontFamily: 'Calibri',
              backgroundColor: 'transparent', // Set background to none
              borderRadius: '0',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <PageviewIcon style={{ marginRight: '5px' }} />
            Add New Cases
          </Button> */}

          <IconButton
            // color="primary"
            onClick={handleNext}
            style={{
              fontSize: 'large',
              fontFamily: 'Calibri',
              color: '#00A4EF',
              backgroundColor: 'transparent', // Set background to none
              borderRadius: '0',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AddCircleIcon style={{ marginRight: '5px' }} />
            Add New Cases
          </IconButton>
        </Box>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#02acfa' }}>
              <TableCell style={{ width: '15%', fontSize: '18px', fontFamily: 'Calibri', color: '#fafeff', borderBottom: '2px solid #333' }}>CASE ID</TableCell>
              <TableCell style={{ width: '35%', fontSize: '18px', fontFamily: 'Calibri', color: '#fafeff', borderBottom: '2px solid #333' }}>USER TITLE</TableCell>

              <TableCell style={{ width: '15%', fontSize: '18px', fontFamily: 'Calibri', color: '#fafeff', borderBottom: '2px solid #333' }}>STATUS</TableCell>
              <TableCell style={{ width: '15%', fontSize: '18px', fontFamily: 'Calibri', color: '#fafeff', borderBottom: '2px solid #333' }}>CREATED DATE</TableCell>

              <TableCell style={{ width: '15%', fontSize: '18px', fontFamily: 'Calibri', color: '#fafeff', borderBottom: '2px solid #333' }}>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedData.map((userData, index) => {
              const absoluteIndex = startIndex + index; // Calculate absolute index
              return (
                <TableRow key={absoluteIndex} style={{ backgroundColor: absoluteIndex % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                  <TableCell style={{ fontSize: '15px', color: '#333', fontFamily: 'Calibri' }}>{202401160001 + absoluteIndex}</TableCell>
                  <TableCell style={{ fontSize: '15px', color: '#333', fontFamily: 'Calibri' }}>{userData.complaint_resolutionDescription}</TableCell>
                  {/* <TableCell style={{ fontSize: '15px', fontFamily: 'Calibri', color: getStatusColor(getStatusByIndex(absoluteIndex)) }}>{getStatusByIndex(absoluteIndex)}</TableCell> */}

                  <TableCell style={{ fontSize: '15px', fontFamily: 'Calibri' }}>
                    <span style={{ backgroundColor: getStatusColor(getStatusByIndex(absoluteIndex)), color: '#000', padding: '5px', borderRadius: '3px' }}>
                      {getStatusByIndex(absoluteIndex)}
                    </span>
                  </TableCell>
                  <TableCell style={{ fontSize: '15px', color: '#333', fontFamily: 'Calibri' }}>{getFormattedDate(new Date())}</TableCell>
                  <TableCell>
                    {/* <Button variant="contained" color="primary" onClick={() => onEdit(index)} style={{ fontSize: '13px', fontFamily: 'Calibri', backgroundColor: '#F25022', color: 'white', borderRadius: '0', marginRight: '8px', marginBottom: '5px' }}>
                      Edit
                    </Button> */}
                    {/* <Button variant="contained" color="success" onClick={() => onView(index)} style={{ fontSize: '13px', fontFamily: 'Calibri', backgroundColor: '#7FBA00', color: 'white', borderRadius: '0' }}>
                      View
                    </Button> */}

                    <IconButton
                      color="primary"
                      onClick={() => onView(index)}
                      style={{
                        fontSize: 'large',
                        fontFamily: 'Calibri',
                        backgroundColor: 'transparent', // Set background to none
                        color: '#00A4EF',
                        borderRadius: '0',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <PageviewIcon style={{ marginRight: '5px' }} />
                      View
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={userDataList.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
        />
      </Paper>
    </Container>
  );
};

export default StartPage;
