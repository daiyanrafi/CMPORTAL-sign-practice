// bookingcontainer.tsx

import React, { useState } from 'react';
import JsonTable from './JsonTable';
import { getBookingData } from './dataService';
import { BookingData } from './EditPage'; // Import BookingData interface

const BookingContainer: React.FC = () => {
  const [bookings, setBookings] = useState<BookingData[]>(getBookingData()); // Assuming initial data is fetched

  const handleSave = (updatedData: BookingData) => {
    updateBookingData(updatedData); // Update booking data
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
    <JsonTable bookings={bookings} onSave={handleSave} />
  );
};

export default BookingContainer;
