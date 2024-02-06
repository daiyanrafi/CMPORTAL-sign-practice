// import React, { useState } from "react";
// import { Button, TextField, Select, MenuItem } from "@mui/material";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { format } from "date-fns";

// interface EditPageProps {
//   data: any;
//   onSave: (updatedData: Record<string, any>) => void;
//   onClose: () => void;
// }

// const EditPage: React.FC<EditPageProps> = ({ data, onSave, onClose }) => {
//   const [editedData, setEditedData] = useState<Record<string, any>>(data);

//   const handleChange = (field: string, value: string) => {
//     // If it's a date field, store the raw date string
//     const formattedValue = field.includes("Time") ? formatDate(value) : value;

//     setEditedData((prevData) => ({ ...prevData, [field]: formattedValue }));
//   };

//   const handleSave = () => {
//     onSave(editedData);
//     onClose();
//   };

//   const inputStyle = {
//     marginBottom: "12px",
//     width: "100%",
//   };

//   const containerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "20px",
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return format(date, "yyyy-MM-dd'T'HH:mm");
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Blank Container */}
//       <div></div>

//       {/* Form Container */}
//       <div style={{ flex: 1, marginLeft: "20px" }}>
//         <h2 style={{ marginBottom: "16px" }}>Edit Page</h2>
//         <div>
//           <TextField
//             label="Resource"
//             value={editedData.resource}
//             onChange={(e) => handleChange("resource", e.target.value)}
//             style={inputStyle}
//           />
//           <div style={{ display: "flex", gap: "20px" }}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               {/* Add Datepicker for Start Time */}
//               <TextField
//                 label="Start Time"
//                 type="datetime-local"
//                 value={editedData.startTime}
//                 onChange={(e) => handleChange("startTime", e.target.value)}
//                 style={{ ...inputStyle, flex: 1 }}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </LocalizationProvider>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               {/* Add Datepicker for End Time */}
//               <TextField
//                 label="End Time"
//                 type="datetime-local"
//                 value={editedData.endTime}
//                 onChange={(e) => handleChange("endTime", e.target.value)}
//                 style={{ ...inputStyle, flex: 1 }}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </LocalizationProvider>
//           </div>
//           <TextField
//             label="Duration"
//             value={editedData.duration}
//             onChange={(e) => handleChange("duration", e.target.value)}
//             style={inputStyle}
//           />
//           <div style={{ display: "flex", gap: "20px" }}>
//             <TextField
//               label="Booking Time"
//               value={editedData.bookingTime}
//               onChange={(e) => handleChange("bookingTime", e.target.value)}
//               style={{ ...inputStyle, flex: 1 }}
//             />
//             {/* Add Dropdown for Booking Status */}
//             <Select
//               label="Booking Status"
//               value={editedData.bookingStatus}
//               onChange={(e) =>
//                 handleChange("bookingStatus", e.target.value as string)
//               }
//               style={{ ...inputStyle, flex: 1 }}
//             >
//               <MenuItem value="Confirmed">Confirmed</MenuItem>
//               <MenuItem value="Pending">Pending</MenuItem>
//               <MenuItem value="Canceled">Canceled</MenuItem>
//             </Select>
//           </div>
//           <TextField
//             label="Created On"
//             value={editedData.createdOn}
//             onChange={(e) => handleChange("createdOn", e.target.value)}
//             style={inputStyle}
//           />
//         </div>
//         <Button onClick={handleSave} style={{ marginTop: "16px" }}>
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EditPage;



// import React, { useState } from "react";
// import { Button, TextField, Select, MenuItem } from "@mui/material";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// interface EditPageProps {
//   data: any;
//   onSave: (updatedData: Record<string, any>) => void;
//   onClose: () => void;
// }

// const EditPage: React.FC<EditPageProps> = ({ data, onSave, onClose }) => {
//   const [editedData, setEditedData] = useState<Record<string, any>>(data);

//   const handleChange = (field: string, value: string) => {
//     setEditedData((prevData) => ({ ...prevData, [field]: value }));
//   };

//   const handleSave = () => {
//     onSave(editedData);
//     onClose();
//   };

//   const containerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "30px",
//   };

//   const inputProps = {
//     style: { fontSize: 'large', fontFamily: 'Calibri', width: "100%" },
//   };

//   return (
//     <div style={containerStyle}>
//       <div></div>
//       <div style={{ flex: 1, marginLeft: "20px" }}>
//         <h2 style={{ marginBottom: "16px" }}>Edit Page</h2>
//         <div>
//           <TextField
//             label={
//               <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                 Resource
//               </span>
//             }
//             value={editedData.resource}
//             onChange={(e) => handleChange("resource", e.target.value)}
//             InputProps={inputProps}
//           />
//           <div style={{ display: "flex", gap: "20px" }}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <TextField
//                 label={
//                   <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                     Start Time
//                   </span>
//                 }
//                 type="datetime-local"
//                 value={editedData.startTime}
//                 onChange={(e) => handleChange("startTime", e.target.value)}
//                 InputProps={inputProps}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </LocalizationProvider>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <TextField
//                 label={
//                   <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                     End Time
//                   </span>
//                 }
//                 type="datetime-local"
//                 value={editedData.endTime}
//                 onChange={(e) => handleChange("endTime", e.target.value)}
//                 InputProps={inputProps}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </LocalizationProvider>
//           </div>
//           <TextField
//             label={
//               <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                 Duration
//               </span>
//             }
//             value={editedData.duration}
//             onChange={(e) => handleChange("duration", e.target.value)}
//             InputProps={inputProps}
//           />
//           <div style={{ display: "flex", gap: "20px" }}>
//             <TextField
//               label={
//                 <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                   Booking Time
//                 </span>
//               }
//               value={editedData.bookingTime}
//               onChange={(e) => handleChange("bookingTime", e.target.value)}
//               InputProps={inputProps}
//             />
//             <Select
//               label={
//                 <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                   Booking Status
//                 </span>
//               }
//               value={editedData.bookingStatus}
//               onChange={(e) =>
//                 handleChange("bookingStatus", e.target.value as string)
//               }
//             >
//               <MenuItem
//                 value="Confirmed"
//                 style={{ fontSize: "15px", fontFamily: "Calibri" }}
//               >
//                 Confirmed
//               </MenuItem>
//               <MenuItem
//                 value="Pending"
//                 style={{ fontSize: "15px", fontFamily: "Calibri" }}
//               >
//                 Pending
//               </MenuItem>
//               <MenuItem
//                 value="Canceled"
//                 style={{ fontSize: "15px", fontFamily: "Calibri" }}
//               >
//                 Canceled
//               </MenuItem>
//             </Select>
//           </div>
//           <TextField
//             label={
//               <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                 Created On
//               </span>
//             }
//             value={editedData.createdOn}
//             onChange={(e) => handleChange("createdOn", e.target.value)}
//             InputProps={inputProps}
//           />
//         </div>
//         <Button onClick={handleSave} style={{ marginTop: "16px" }}>
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EditPage;



// JsonTable.tsx
// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
// import EditPage from './EditPage';
// import jsonData from './data.json';



// const getStatusColor = (status: string): string => {
//   const lowercaseStatus = status.toLowerCase();

//   switch (lowercaseStatus) {
//     case 'confirmed':
//       return 'green';
//     case 'pending':
//       return 'blue';
//     case 'canceled':
//       return 'red';
//     default:
//       return 'black';
//   }
// };



// const JsonTable: React.FC = () => {
//   const [data, setData] = useState(jsonData);
//   const [editingRow, setEditingRow] = useState<number | null>(null);

//   const handleEditClick = (rowId: number) => {
//     setEditingRow(rowId);
//   };

//   const handleSave = (updatedData: any) => {
//     setData((prevData) =>
//       prevData.map((row) => (row.id === updatedData.id ? { ...row, ...updatedData } : row))
//     );
//     setEditingRow(null);
//   };

//   const handleCloseEditPage = () => {
//     setEditingRow(null);
//   };

//   return (
//     <>
//       {editingRow === null ? (
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Resource</TableCell>
//                 <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Start Time</TableCell>
//                 <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Edit Time</TableCell>
//                 <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Duration</TableCell>
//                 <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Booking Time</TableCell>
//                 <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Booking Status</TableCell>
//                 <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri' }}>Created On</TableCell>
//                 <TableCell style={{ backgroundColor: '#f0f0f0', fontSize: 'medium', fontFamily: 'Calibri', paddingLeft: '40px' }}>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell style={{ color: '#003591', fontSize: 'medium', fontFamily: 'Calibri' }}>{row.resource}</TableCell>
//                   <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{row.startTime}</TableCell>
//                   <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{row.endTime}</TableCell>
//                   <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{row.duration}</TableCell>
//                   <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{row.bookingTime}</TableCell>
//                   <TableCell
//               style={{
//                 color: getStatusColor(row.bookingStatus),
//                 fontSize: 'medium',
//                 fontFamily: 'Calibri',
//               }}
//             >
//               {row.bookingStatus}
//             </TableCell>
//                   <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>{row.createdOn}</TableCell>
//                   <TableCell style={{ fontSize: 'medium', fontFamily: 'Calibri' }}>
//                   <Button onClick={() => handleEditClick(row.id)}
//                       style={{
//                         fontSize: "medium",
//                         fontFamily: "Calibri",
//                         backgroundColor: "transparent",
//                         border: "1px solid #003591",
//                         color: "#003591",
//                         borderRadius: "0",
//                         width: "100px",
//                         height: "30px", 
//                       }}>Edit</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       ) : (
//         <EditPage data={data.find((row) => row.id === editingRow)} onSave={handleSave} onClose={handleCloseEditPage} />
//       )}
//     </>
//   );
  
  
// };

// export default JsonTable;

// import React, { useState } from "react";
// import { Button, TextField, Select, MenuItem } from "@mui/material";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// interface EditPageProps {
//   data: any;
//   onSave: (updatedData: Record<string, any>) => void;
//   onClose: () => void;
// }

// const EditPage: React.FC<EditPageProps> = ({ data, onSave, onClose }) => {
//   const [editedData, setEditedData] = useState<Record<string, any>>(data);

//   const handleChange = (field: string, value: string) => {
//     setEditedData((prevData) => ({ ...prevData, [field]: value }));
//   };

//   const handleSave = () => {
//     onSave(editedData);
//     onClose();
//   };

//   const inputStyle = {
//     marginBottom: "12px",
//     width: "100%",
//     fontSize: "medium",
//     fontFamily: "Calibri",
//   };

//   const containerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "30px",
//   };

//   const inputProps = {
//     style: { fontSize: "large", fontFamily: "Calibri", width: "100%" },
//   };

//   return (
//     <div style={containerStyle}>
//       <div></div>

//       <div style={{ flex: 1, marginLeft: "20px" }}>
//       <h2 style={{ marginBottom: "20px", fontSize: "large" }}>Edit Page</h2>
//         <div>
//           <TextField
//             label={
//               <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                 Resource
//               </span>
//             }
//             value={editedData.resource}
//             onChange={(e) => handleChange("resource", e.target.value)}
//             style={inputStyle}
//             InputProps={inputProps}
//           />
//           <div style={{ display: "flex", gap: "20px" }}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <TextField
//                 label={
//                   <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                     Start Time
//                   </span>
//                 }
//                 type="datetime-local"
//                 value={editedData.startTime}
//                 onChange={(e) => handleChange("startTime", e.target.value)}
//                 style={{ ...inputStyle, flex: 1 }}
//                 InputProps={inputProps}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </LocalizationProvider>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <TextField
//                 label={
//                   <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                     End Time
//                   </span>
//                 }
//                 type="datetime-local"
//                 value={editedData.endTime}
//                 onChange={(e) => handleChange("endTime", e.target.value)}
//                 style={{ ...inputStyle, flex: 1 }}
//                 InputProps={inputProps}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//               />
//             </LocalizationProvider>
//           </div>
//           <TextField
//             label={
//               <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                 Duration
//               </span>
//             }
//             value={editedData.duration}
//             onChange={(e) => handleChange("duration", e.target.value)}
//             style={inputStyle}
//             InputProps={inputProps}
//           />
//           <div style={{ display: "flex", gap: "20px" }}>
//             <TextField
//               label={
//                 <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                   Booking Time
//                 </span>
//               }
//               value={editedData.bookingTime}
//               onChange={(e) => handleChange("bookingTime", e.target.value)}
//               style={{ ...inputStyle, flex: 1 }}
//               InputProps={inputProps}
//             />
//             <Select
//               label={
//                 <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                   Booking Status
//                 </span>
//               }
//               value={editedData.bookingStatus}
//               onChange={(e) =>
//                 handleChange("bookingStatus", e.target.value as string)
//               }
//               style={{
//                 ...inputStyle,
//                 flex: 1,
//                 fontFamily: "Calibri",
//                 fontSize: "large",
//               }}
//             >
//               <MenuItem value="Confirmed" style={{ fontSize: "15px", fontFamily: "Calibri" }}>Confirmed</MenuItem>
//               <MenuItem value="Pending" style={{ fontSize: "15px", fontFamily: "Calibri" }}>Pending</MenuItem>
//               <MenuItem value="Canceled" style={{ fontSize: "15px", fontFamily: "Calibri" }}>Canceled</MenuItem>
//             </Select>
//           </div>
//           <TextField
//             label={
//               <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
//                 Created On
//               </span>
//             }
//             value={editedData.createdOn}
//             onChange={(e) => handleChange("createdOn", e.target.value)}
//             style={inputStyle}
//             InputProps={inputProps}
//           />
//         </div>
//         <Button
//           onClick={handleSave}
//           style={{
//             marginTop: "16px",
//             fontSize: "medium",
//             fontFamily: "Calibri",
//             backgroundColor: "transparent",
//             border: "1px solid #003591",
//             color: "#003591",
//             borderRadius: "0",
//             width: "100px",
//             height: "30px",
//           }}
//         >
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EditPage;


// import React, { useState } from 'react';
// import {
//   DetailsList,
//   DetailsListLayoutMode,
//   SelectionMode,
//   Stack,
//   PrimaryButton,
//   Checkbox,
// } from '@fluentui/react';
// import EditPage from './EditPage';
// import jsonData from './data.json';

// interface JsonTableProps {
//   // Add any props you may need
// }

// const getStatusColor = (status: string): string => {
//   const lowercaseStatus = status.toLowerCase();

//   switch (lowercaseStatus) {
//     case 'confirmed':
//       return 'green';
//     case 'pending':
//       return 'blue';
//     case 'canceled':
//       return 'red';
//     default:
//       return 'black';
//   }
// };

// const JsonTable: React.FC<JsonTableProps> = () => {
//   const [data, setData] = useState(jsonData);
//   const [editingRow, setEditingRow] = useState<number | null>(null);

//   const handleEditClick = (rowId: number) => {
//     setEditingRow(rowId);
//   };

//   const handleSave = (updatedData: any) => {
//     setData((prevData) =>
//       prevData.map((row) => (row.id === updatedData.id ? { ...row, ...updatedData } : row))
//     );
//     setEditingRow(null);
//   };

//   const renderActionColumn: (item: any) => React.ReactElement | null = (item) => {
//     return (
//       <PrimaryButton onClick={() => handleEditClick(item.id)}>
//         Edit
//       </PrimaryButton>
//     );
//   };

//   const columns = [
//     { key: 'resource', name: 'Resource', fieldName: 'resource', minWidth: 100 },
//     { key: 'startTime', name: 'Start Time', fieldName: 'startTime', minWidth: 100 },
//     { key: 'endTime', name: 'End Time', fieldName: 'endTime', minWidth: 100 },
//     { key: 'duration', name: 'Duration', fieldName: 'duration', minWidth: 100 },
//     { key: 'bookingTime', name: 'Booking Time', fieldName: 'bookingTime', minWidth: 100 },
//     {
//       key: 'bookingStatus',
//       name: 'Booking Status',
//       fieldName: 'bookingStatus',
//       minWidth: 100,
//       onRender: (item: any) => (
//         <div style={{ color: getStatusColor(item.bookingStatus) }}>{item.bookingStatus}</div>
//       ),
//     },
//     { key: 'createdOn', name: 'Created On', fieldName: 'createdOn', minWidth: 100 },
//     { key: 'action', name: 'Action', fieldName: 'action', minWidth: 100, onRender: renderActionColumn },
//   ];

//   return (
//     <Stack>
//       {editingRow === null ? (
//         <DetailsList
//           items={data}
//           columns={columns}
//           layoutMode={DetailsListLayoutMode.justified}
//           selectionMode={SelectionMode.none}
//         />
//       ) : (
//         <EditPage data={data.find((row) => row.id === editingRow)} onSave={handleSave} onClose={() => setEditingRow(null)} />
//       )}
//     </Stack>
//   );
// };

// export default JsonTable;
