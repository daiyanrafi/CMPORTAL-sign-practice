// import React, { useState } from "react";
// import {
//   TextField,
//   PrimaryButton,
//   Stack,
//   Select,
//   MenuItem,
// } from "@fluentui/react";
// import { AdapterDayjs } from "@fluentui/react-date-time";

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

//   const inputStyle = {
//     marginBottom: "12px",
//     width: "100%",
//     fontSize: "medium",
//     fontFamily: "Calibri",
//   };

//   const handleSave = () => {
//     onSave(editedData);
//     onClose();
//   };

//   return (
//     <Stack tokens={{ padding: "30px" }}>
//       <h2 style={{ marginBottom: "20px", fontSize: "large" }}>Edit Page</h2>
//       <TextField
//         label="Resource"
//         value={editedData.resource}
//         onChange={(e, newValue) => handleChange("resource", newValue || "")}
//         styles={{ root: { marginBottom: "12px", width: "100%" } }}
//       />
//       <Stack horizontal tokens={{ childrenGap: "20px" }}>
//         <AdapterDayjs>
//           <TextField
//             label="Start Time"
//             type="datetime-local"
//             value={editedData.startTime}
//             onChange={(e, newValue) =>
//               handleChange("startTime", newValue || "")
//             }
//             styles={{ root: { ...inputStyle, flex: 1 } }}
//           />
//         </AdapterDayjs>
//         <AdapterDayjs>
//           <TextField
//             label="End Time"
//             type="datetime-local"
//             value={editedData.endTime}
//             onChange={(e, newValue) => handleChange("endTime", newValue || "")}
//             styles={{ root: { ...inputStyle, flex: 1 } }}
//           />
//         </AdapterDayjs>
//       </Stack>
//       <TextField
//         label="Duration"
//         value={editedData.duration}
//         onChange={(e, newValue) => handleChange("duration", newValue || "")}
//         styles={{ root: { marginBottom: "12px", width: "100%" } }}
//       />
//       <Stack horizontal tokens={{ childrenGap: "20px" }}>
//         <TextField
//           label="Booking Time"
//           value={editedData.bookingTime}
//           onChange={(e, newValue) =>
//             handleChange("bookingTime", newValue || "")
//           }
//           styles={{ root: { ...inputStyle, flex: 1 } }}
//         />
//         <Select
//           label="Booking Status"
//           selectedKey={editedData.bookingStatus}
//           onChange={(option: { key?: string | number; text?: string }) =>
//             handleChange("bookingStatus", option ? option.text || "" : "")
//           }
//           styles={{ root: { ...inputStyle, flex: 1 } }}
//         >
//           <MenuItem key="Confirmed">Confirmed</MenuItem>
//           <MenuItem key="Pending">Pending</MenuItem>
//           <MenuItem key="Canceled">Canceled</MenuItem>
//         </Select>
//       </Stack>
//       <TextField
//         label="Created On"
//         value={editedData.createdOn}
//         onChange={(e, newValue) => handleChange("createdOn", newValue || "")}
//         styles={{ root: { marginBottom: "12px", width: "100%" } }}
//       />
//       <PrimaryButton
//         onClick={handleSave}
//         styles={{ root: { marginTop: "16px", width: "100%" } }}
//       >
//         Save
//       </PrimaryButton>
//     </Stack>
//   );
// };

// export default EditPage;

import React, { useState } from "react";
import {
  TextField,
  PrimaryButton,
  Stack,
  ComboBox,
  DatePicker,
} from "@fluentui/react";

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
  { key: "confirmed", text: "Confirmed" },
  { key: "pending", text: "Pending" },
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
      alignItems: "flex-start",  // Center content at the top
      height: "100vh",
    }}
    >
      <Stack tokens={{ padding: "30px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "large" }}>Edit Page</h2>

        <div style={{ width: "400px" }}>
          {" "}
          {/* Adjust the width as needed */}
          <TextField
            label="Resource"
            value={editedData.resource}
            onChange={(e, newValue) => handleChange("resource", newValue || "")}
            styles={{ root: { marginBottom: "12px", width: "100%" } }}
          />
          <Stack horizontal tokens={{ childrenGap: "20px" }}>
            <DatePicker
              label="Start Time"
              value={new Date(editedData.startTime)}
              onSelectDate={(date) =>
                handleChange("startTime", date?.toISOString() || "")
              }
              formatDate={formatDate}
              styles={{ root: { width: "200px", marginBottom: "12px" } }}
            />
            <DatePicker
              label="End Time"
              value={new Date(editedData.endTime)}
              onSelectDate={(date) =>
                handleChange("endTime", date?.toISOString() || "")
              }
              formatDate={formatDate}
              styles={{ root: { width: "200px", marginBottom: "12px" } }}
            />
          </Stack>
          <TextField
            label="Duration"
            value={editedData.duration}
            onChange={(e, newValue) => handleChange("duration", newValue || "")}
            styles={{ root: { marginBottom: "12px", width: "100%" } }}
          />
          <Stack horizontal tokens={{ childrenGap: "20px" }}>
            <TextField
              label="Booking Time"
              value={editedData.bookingTime}
              onChange={(e, newValue) =>
                handleChange("bookingTime", newValue || "")
              }
              styles={{ root: { marginBottom: "12px", width: "100%" } }}
            />
            <ComboBox
              label="Booking Status"
              selectedKey={editedData.bookingStatus}
              onChange={(e, option) =>
                handleChange("bookingStatus", option?.text || "")
              }
              options={bookingStatusOptions}
            />
          </Stack>
          <TextField
            label="Created On"
            value={editedData.createdOn}
            onChange={(e, newValue) =>
              handleChange("createdOn", newValue || "")
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
