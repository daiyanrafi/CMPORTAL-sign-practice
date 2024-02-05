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



import React, { useState } from "react";
import { Button, TextField, Select, MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface EditPageProps {
  data: any;
  onSave: (updatedData: Record<string, any>) => void;
  onClose: () => void;
}

const EditPage: React.FC<EditPageProps> = ({ data, onSave, onClose }) => {
  const [editedData, setEditedData] = useState<Record<string, any>>(data);

  const handleChange = (field: string, value: string) => {
    setEditedData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
  };

  const inputProps = {
    style: { fontSize: 'large', fontFamily: 'Calibri', width: "100%" },
  };

  return (
    <div style={containerStyle}>
      <div></div>
      <div style={{ flex: 1, marginLeft: "20px" }}>
        <h2 style={{ marginBottom: "16px" }}>Edit Page</h2>
        <div>
          <TextField
            label={
              <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
                Resource
              </span>
            }
            value={editedData.resource}
            onChange={(e) => handleChange("resource", e.target.value)}
            InputProps={inputProps}
          />
          <div style={{ display: "flex", gap: "20px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TextField
                label={
                  <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
                    Start Time
                  </span>
                }
                type="datetime-local"
                value={editedData.startTime}
                onChange={(e) => handleChange("startTime", e.target.value)}
                InputProps={inputProps}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TextField
                label={
                  <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
                    End Time
                  </span>
                }
                type="datetime-local"
                value={editedData.endTime}
                onChange={(e) => handleChange("endTime", e.target.value)}
                InputProps={inputProps}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LocalizationProvider>
          </div>
          <TextField
            label={
              <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
                Duration
              </span>
            }
            value={editedData.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
            InputProps={inputProps}
          />
          <div style={{ display: "flex", gap: "20px" }}>
            <TextField
              label={
                <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
                  Booking Time
                </span>
              }
              value={editedData.bookingTime}
              onChange={(e) => handleChange("bookingTime", e.target.value)}
              InputProps={inputProps}
            />
            <Select
              label={
                <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
                  Booking Status
                </span>
              }
              value={editedData.bookingStatus}
              onChange={(e) =>
                handleChange("bookingStatus", e.target.value as string)
              }
            >
              <MenuItem
                value="Confirmed"
                style={{ fontSize: "15px", fontFamily: "Calibri" }}
              >
                Confirmed
              </MenuItem>
              <MenuItem
                value="Pending"
                style={{ fontSize: "15px", fontFamily: "Calibri" }}
              >
                Pending
              </MenuItem>
              <MenuItem
                value="Canceled"
                style={{ fontSize: "15px", fontFamily: "Calibri" }}
              >
                Canceled
              </MenuItem>
            </Select>
          </div>
          <TextField
            label={
              <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
                Created On
              </span>
            }
            value={editedData.createdOn}
            onChange={(e) => handleChange("createdOn", e.target.value)}
            InputProps={inputProps}
          />
        </div>
        <Button onClick={handleSave} style={{ marginTop: "16px" }}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
