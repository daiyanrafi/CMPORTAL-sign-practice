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
    fontSize: "medium",
    fontFamily: "Calibri",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
  };

  const inputProps = {
    style: { fontSize: "large", fontFamily: "Calibri", width: "100%" },
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
            label={
              <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
                Resource
              </span>
            }
            value={editedData.resource}
            onChange={(e) => handleChange("resource", e.target.value)}
            style={inputStyle}
            InputProps={inputProps}
          />
          <div style={{ display: "flex", gap: "20px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* Add Datepicker for Start Time */}
              <TextField
                label={
                  <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
                    Start Time
                  </span>
                }
                type="datetime-local"
                value={editedData.startTime}
                onChange={(e) => handleChange("startTime", e.target.value)}
                // style={inputStyle}
                style={{ ...inputStyle, flex: 1 }}
                InputProps={inputProps}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* Add Datepicker for End Time */}
              <TextField
                label={
                  <span style={{ fontSize: "large", fontFamily: "Calibri" }}>
                    End Time
                  </span>
                }
                type="datetime-local"
                value={editedData.endTime}
                onChange={(e) => handleChange("endTime", e.target.value)}
                // style={inputStyle}
                style={{ ...inputStyle, flex: 1 }}
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
            style={inputStyle}
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
              style={{ ...inputStyle, flex: 1 }}
              InputProps={inputProps}
            />
            {/* Add Dropdown for Booking Status */}
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
              style={{ ...inputStyle, flex: 1 }}
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
            style={inputStyle}
            InputProps={inputProps}
          />
        </div>
        <Button
          onClick={handleSave}
          style={{
            marginTop: "16px",
            fontSize: "medium",
            fontFamily: "Calibri",
            backgroundColor: "transparent",
            border: "1px solid #003591",
            color: "#003591",
            borderRadius: "0",
            width: "100px",
            height: "30px",
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
