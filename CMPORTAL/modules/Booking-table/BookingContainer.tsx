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
  const [bookings, setBookings] = useState<BookingData[]>(getBookingData()); // Assuming initial data is fetched

  const handleEditClick = (rowId: string | null) => {
    setEditingRow(rowId);
  };


  const handleSave = (updatedData: BookingData) => {
    updateBookingData(updatedData); // Update booking data
    setEditingRow(null);
  };

  const updateBookingData = (updatedData: BookingData) => {
    setBookings(prevBookings => {
      return prevBookings.map(booking => {
        if (booking.bookableresourcebookingid === updatedData.bookableresourcebookingid) {
          // Update the booking with the new data
          return { ...booking, ...updatedData };
        }
        return booking;
      });
    });
  };

  return (
    <JsonTable bookings={bookings} editingRow={editingRow} onEditClick={handleEditClick} onSave={handleSave} />
  );
};

export default BookingContainer;
