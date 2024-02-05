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

  const inputStyle = {
    marginBottom: "12px",
    width: "100%",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      {/* Blank Container */}
      <div></div>

      {/* Form Container */}
      <div style={{ flex: 1, marginLeft: "20px" }}>
        <h2 style={{ marginBottom: "16px" }}>Edit Page</h2>
        <div>
          <TextField
            label="Resource"
            value={editedData.resource}
            onChange={(e) => handleChange("resource", e.target.value)}
            style={inputStyle}
          />
          <div style={{ display: "flex", gap: "20px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* Add Datepicker for Start Time */}
              <TextField
                label="Start Time"
                type="datetime-local"
                value={editedData.startTime}
                onChange={(e) => handleChange("startTime", e.target.value)}
                // style={inputStyle}
                style={{ ...inputStyle, flex: 1 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* Add Datepicker for End Time */}
              <TextField
                label="End Time"
                type="datetime-local"
                value={editedData.endTime}
                onChange={(e) => handleChange("endTime", e.target.value)}
                // style={inputStyle}
                style={{ ...inputStyle, flex: 1 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LocalizationProvider>
          </div>
          <TextField
            label="Duration"
            value={editedData.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
            style={inputStyle}
          />
          <div style={{ display: "flex", gap: "20px" }}>
            <TextField
              label="Booking Time"
              value={editedData.bookingTime}
              onChange={(e) => handleChange("bookingTime", e.target.value)}
              style={{ ...inputStyle, flex: 1 }}
            />
            {/* Add Dropdown for Booking Status */}
            <Select
              label="Booking Status"
              value={editedData.bookingStatus}
              onChange={(e) =>
                handleChange("bookingStatus", e.target.value as string)
              }
              style={{ ...inputStyle, flex: 1 }}
            >
              <MenuItem value="Confirmed">Confirmed</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Canceled">Canceled</MenuItem>
            </Select>
          </div>
          <TextField
            label="Created On"
            value={editedData.createdOn}
            onChange={(e) => handleChange("createdOn", e.target.value)}
            style={inputStyle}
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
