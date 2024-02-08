// EditPage.tsx

import React, { useState } from "react";
import {
  TextField,
  PrimaryButton,
  Stack,
  ComboBox,
  DatePicker,
} from "@fluentui/react";

interface BookingData {
  bookableresourcebookingid: string;
  resource: string;
  starttime: string;
  endtime: string;
  duration: number;
  bookingtypetext: string;
  bookingstatus: string;
  createdon: string;
}

const formatDate = (date?: Date): string => {
  if (!date) return "";
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

interface EditPageProps {
  data: BookingData;
  onSave: (updatedData: BookingData) => void;
  onClose: () => void;
}

const bookingStatusOptions = [
  { key: "completed", text: "Completed" },
  { key: "scheduled", text: "Scheduled" },
  { key: "canceled", text: "Canceled" },
];

const EditPage: React.FC<EditPageProps> = ({ data, onSave, onClose }) => {
  const [editedData, setEditedData] = useState<BookingData>(data); // Adjusted to use BookingData

  const handleChange = (field: keyof BookingData, value: string | Date) => { // Adjusted to use keyof BookingData
    setEditedData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "100vh",
    }}
    >
      <Stack tokens={{ padding: "30px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "large" }}>Edit Page</h2>

        <div style={{ width: "400px" }}>
          {/* {" "} */}
          <TextField
            label="Resource"
            value={editedData.resource}
            onChange={(e, newValue) => handleChange("resource", newValue || "")}
            styles={{ root: { marginBottom: "12px", width: "100%" } }}
          />
          <Stack horizontal tokens={{ childrenGap: "20px" }}>
            <DatePicker
              label="Start Time"
              value={new Date(editedData.starttime)} // Adjusted to use starttime
              onSelectDate={(date) =>
                handleChange("starttime", date || "")
              }
              formatDate={formatDate}
              styles={{ root: { width: "200px", marginBottom: "12px" } }}
            />
            <DatePicker
              label="End Time"
              value={new Date(editedData.endtime)} // Adjusted to use endtime
              onSelectDate={(date) =>
                handleChange("endtime", date || "")
              }
              formatDate={formatDate}
              styles={{ root: { width: "200px", marginBottom: "12px" } }}
            />
          </Stack>
          <TextField
            label="Duration"
            value={editedData.duration.toString()} // Adjusted to use duration
            onChange={(e, newValue) => handleChange("duration", newValue || "")}
            styles={{ root: { marginBottom: "12px", width: "100%" } }}
          />
          <Stack horizontal tokens={{ childrenGap: "20px" }}>
            <TextField
              label="Booking Time"
              value={editedData.bookingtypetext} // Adjusted to use bookingtypetext
              onChange={(e, newValue) =>
                handleChange("bookingtypetext", newValue || "")
              }
              styles={{ root: { marginBottom: "12px", width: "100%" } }}
            />
            <ComboBox
              label="Booking Status"
              selectedKey={editedData.bookingstatus} // Adjusted to use bookingstatus
              onChange={(e, option) =>
                handleChange("bookingstatus", option?.text || "")
              }
              options={bookingStatusOptions}
            />
          </Stack>
          <TextField
            label="Created On"
            value={editedData.createdon} // Adjusted to use createdon
            onChange={(e, newValue) =>
              handleChange("createdon", newValue || "")
            }
            styles={{ root: { marginBottom: "12px", width: "100%" } }}
          />
          <PrimaryButton
            onClick={handleSave}
            styles={{ root: { marginTop: "16px", width: "100%" } }}
          >
            Save
          </PrimaryButton>
        </div>
      </Stack>
    </div>
  );
};

export default EditPage;
