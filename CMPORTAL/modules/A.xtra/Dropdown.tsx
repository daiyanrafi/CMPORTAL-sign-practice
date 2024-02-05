// import React, { useState } from 'react';
// import { Button, TextField, Select, MenuItem, InputLabel, Box } from '@mui/material';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// // ... (rest of the imports)

// const EditPage: React.FC<EditPageProps> = ({ data, onSave, onClose }) => {
//   // ... (rest of the code)
//   const [editedData, setEditedData] = useState<Record<string, any>>(data);

//   const [startTimeValue, setStartTimeValue] = useState<Dayjs | null>(data.startTime ? dayjs(data.startTime) : null);
//   const [endTimeValue, setEndTimeValue] = useState<Dayjs | null>(data.endTime ? dayjs(data.endTime) : null);
//   const [bookingStatus, setBookingStatus] = useState(data.bookingStatus || '');

//   // ... (rest of the code)

//   const handleChange = (field: string, value: string) => {
//     setEditedData((prevData) => ({ ...prevData, [field]: value }));
//   };

//   const handleSave = () => {
//     onSave(editedData);
//     onClose();
//   };

//   const inputStyle = {
//     marginBottom: '12px',
//     width: '100%',
//   };

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '20px',
//   };

//   const handleStartTimeChange = (newValue: Dayjs | null) => {
//     setStartTimeValue(newValue);
//     if (newValue) {
//       handleChange('startTime', newValue.format('MM/DD/YYYY HH:mm A'));
//     } else {
//       handleChange('startTime', '');
//     }
//   };

//   const handleEndTimeChange = (newValue: Dayjs | null) => {
//     setEndTimeValue(newValue);
//     if (newValue) {
//       handleChange('endTime', newValue.format('MM/DD/YYYY HH:mm A'));
//     } else {
//       handleChange('endTime', '');
//     }
//   };

//   const handleBookingStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setBookingStatus(event.target.value);
//     handleChange('bookingStatus', event.target.value);
//   };

//   return (
//     // ... (rest of the JSX)

//       <div>
//         <h2 style={{ marginBottom: '16px' }}>Edit Page</h2>
//         <div>
//           <TextField
//             label="Resource"
//             value={editedData.resource}
//             onChange={(e) => handleChange('resource', e.target.value)}
//             style={inputStyle}
//           />
//           <Box sx={{ display: 'flex', gap: '20px' }}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DatePicker
//                 label="Start Time"
//                 value={startTimeValue}
//                 onChange={handleStartTimeChange}
//                 renderInput={(params) => <TextField {...params} style={inputStyle} />}
//               />
//             </LocalizationProvider>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DatePicker
//                 label="End Time"
//                 value={endTimeValue}
//                 onChange={handleEndTimeChange}
//                 renderInput={(params) => <TextField {...params} style={inputStyle} />}
//               />
//             </LocalizationProvider>
//           </Box>
//           <TextField
//             label="Duration"
//             value={editedData.duration}
//             onChange={(e) => handleChange('duration', e.target.value)}
//             style={inputStyle}
//           />
//           <Box sx={{ display: 'flex', gap: '20px' }}>
//             <TextField
//               label="Booking Time"
//               value={editedData.bookingTime}
//               onChange={(e) => handleChange('bookingTime', e.target.value)}
//               style={{ ...inputStyle, flex: 1 }}
//             />
//             <TextField
//               label="Booking Status"
//               value={editedData.bookingStatus}
//               onChange={(e) => handleChange('bookingStatus', e.target.value)}
//               style={{ ...inputStyle, flex: 1 }}
//             />
//           </div>
//           <TextField
//             label="Created On"
//             value={editedData.createdOn}
//             onChange={(e) => handleChange('createdOn', e.target.value)}
//             style={inputStyle}
//           />
//         </div>
//         <Button onClick={handleSave} style={{ marginTop: '16px' }}>
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EditPage;
