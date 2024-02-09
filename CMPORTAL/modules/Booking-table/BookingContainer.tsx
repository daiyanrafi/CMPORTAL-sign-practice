// // jsontable.tsx

// import React = require("react");
// import JsonTable from "./JsonTable";
// import { getBookingData } from './dataService';

// const BookingContainer: React.FC = () => {
//   return (
//     <JsonTable bookings={getBookingData()}  />
//   );
// };

// export default BookingContainer;


// bookingcontainer.tsx

import React, { useState } from 'react';
import JsonTable from './JsonTable';
import { getBookingData } from './dataService';
import { BookingData } from './EditPage'; // Import BookingData interface

const BookingContainer: React.FC = () => {
  const [editingRow, setEditingRow] = useState<string | null>(null);

  // const handleEditClick = (rowId: string) => {
  //   setEditingRow(rowId);
  // };

  const handleEditClick = (rowId: string | null) => {
    // Handle the edit click with a valid rowId or null
    setEditingRow(rowId);
  };
  

  const handleSave = (updatedData: BookingData) => {
    // Handle save logic here if needed
    setEditingRow(null);
  };

  return (
    <JsonTable bookings={getBookingData()} editingRow={editingRow} onEditClick={handleEditClick} onSave={handleSave} />
  );
};

export default BookingContainer;


