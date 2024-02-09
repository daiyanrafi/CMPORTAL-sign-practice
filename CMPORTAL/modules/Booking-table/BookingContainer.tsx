// jsontable.tsx

import React = require("react");
import JsonTable from "./JsonTable";
import { getBookingData } from './dataService';

const BookingContainer: React.FC = () => {
  return (
    <JsonTable bookings={getBookingData()}  />
  );
};

export default BookingContainer;
