// EditPage.tsx

import React from "react";
import { useState } from 'react';
import {
  TextField,
  PrimaryButton,
  Stack,
  ComboBox,
  DatePicker,
} from "@fluentui/react";

export interface BookingData {
  bookableresourcebookingid?: string;
  resource?: string;
  starttime: string;
  endtime: string;
  duration: number;
  bookingtypetext?: string;
  bookingstatus: string;
  createdon?: string;
  sabs_canceledbytext?: string;
}


// const formatDate = (date?: Date): string => {
//   if (!date) return "";
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   const year = date.getFullYear();

//   return `${day}.${month}.${year}`;
// };

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
  const [editedData, setEditedData] = useState<BookingData>(data);

  const handleChange = (field: keyof BookingData, value: string | Date | number) => {
    setEditedData((prevData) => ({ ...prevData, [field]: value }));
  };

  // const handleSave = () => {
  //   onSave(editedData);
  //   onClose();
  // };

  const handleSave = () => {
    onSave(editedData);
    console.log("Updated Data:", editedData); // Add this line to log the updated data
    onClose();
  };

  return (
    <div className="edit-container">
      <Stack tokens={{ padding: "30px" }}>
        <h2 className="edit-title">Edit Fields</h2>

        <div className="edit-form">
          <TextField
            label="Resource"
            value={editedData.resource}
            onChange={(e, newValue) =>
              handleChange("resource", newValue || "")
            }
            styles={{ root: { marginBottom: "12px", width: "100%" } }}
          />
          <Stack horizontal tokens={{ childrenGap: "20px" }}>
            <DatePicker
              label="Start Time"
              value={new Date(editedData.starttime)}
              onSelectDate={(date) => handleChange("starttime", date || "")}
              styles={{ root: { width: "200px", marginBottom: "12px" } }}
            />
            <DatePicker
              label="End Time"
              value={new Date(editedData.endtime)}
              onSelectDate={(date) => handleChange("endtime", date || "")}
              styles={{ root: { width: "200px", marginBottom: "12px" } }}
            />
            <TextField
              label="Duration"
              value={editedData.duration.toString()}
              onChange={(e, newValue) => handleChange("duration", newValue || "")}
              styles={{ root: { marginBottom: "12px", width: "20%" } }}
            />
          </Stack>
          <Stack horizontal tokens={{ childrenGap: "20px" }}>
            <TextField
              label="Booking Time"
              value={editedData.bookingtypetext}
              onChange={(e, newValue) =>
                handleChange("bookingtypetext", newValue || "")
              }
              styles={{ root: { marginBottom: "12px", width: "47%" } }}
            />
            <ComboBox
              label="Booking Status"
              selectedKey={editedData.bookingstatus}
              onChange={(e, option) =>
                handleChange("bookingstatus", option?.text || "")
              }
              options={bookingStatusOptions}
            />
          </Stack>
          <Stack horizontal tokens={{ childrenGap: "20px" }}>
          <TextField
            label="Created On"
            value={editedData.createdon}
            onChange={(e, newValue) =>
              handleChange("duration", parseInt(newValue || "0"))
            }
            styles={{ root: { marginBottom: "12px", width: "50%" } }}
          />
          <TextField
            label="Canceled By"
            value={editedData.sabs_canceledbytext}
            onChange={(e, newValue) =>
              handleChange("sabs_canceledbytext", parseInt(newValue || "0"))
            }
            styles={{ root: { marginBottom: "12px", width: "50%" } }}
          />
          </Stack>
          <div className="button-container">
            <PrimaryButton onClick={handleSave} style={{ marginTop: '15px', marginRight: '15px' }}>Save</PrimaryButton>
            <PrimaryButton onClick={onClose} style={{ marginTop: '15px', marginLeft: '15px' }}>Cancel</PrimaryButton>
          </div>

        </div>
      </Stack>
    </div>
  );
};

export default EditPage;
