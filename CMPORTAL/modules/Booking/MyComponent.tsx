import React, { useState, useEffect } from 'react';
import { Dropdown, IDropdownOption, DatePicker, DayOfWeek } from '@fluentui/react';

interface Booking {
  name: string;
  starttime: string;
  endtime: string;
}

interface Resource {
  name: string;
  bookableresourceid: string;
}

const MyComponent: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<DayOfWeek | undefined>();
  const [selectedStartDate, setSelectedStartDate] = useState<Date | undefined>();
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);

  // Function to fetch data from JSON files
  const fetchData = async () => {
    try {
      const dataResponse = await fetch('data.json');
      const resourceResponse = await fetch('resource.json');

      const data = await dataResponse.json();
      const resources = await resourceResponse.json();

      setBookings(data);
      setResources(resources);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to filter bookings based on selected date range and day
  const filterBookings = () => {
    if (!selectedDay || !selectedStartDate || !selectedEndDate) return;

    const filtered = bookings.filter(booking => {
      const bookingDate = new Date(booking.starttime);
      const bookingDay = bookingDate.getDay();
      const bookingDateString = bookingDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });

      // Check if booking is on the selected day and within the selected date range
      return bookingDay === selectedDay &&
        bookingDate >= selectedStartDate &&
        bookingDate <= selectedEndDate;
    });

    setFilteredBookings(filtered);
  };

  // Event handler for when day dropdown value changes
  const onDayChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
    setSelectedDay(option?.key as DayOfWeek);
  };

  // Event handler for when start date picker value changes
  const onStartDateChange = (date?: Date | null | undefined) => {
    setSelectedStartDate(date || undefined);
  };

  // Event handler for when end date picker value changes
  const onEndDateChange = (date?: Date | null | undefined) => {
    setSelectedEndDate(date || undefined);
  };

  // Function to render table headers based on selected date range
const renderTableHeaders = () => {
    if (!selectedDay || !selectedStartDate || !selectedEndDate) return;
  
    const headers = [];
    const currentDate = new Date(selectedStartDate);
  
    // Loop through the selected date range to generate column headers
    while (currentDate <= selectedEndDate) {
      if (currentDate.getDay() === selectedDay) {
        const headerTitle = currentDate.toLocaleDateString('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'short'
        });
        headers.push(
          <th
            key={currentDate.toISOString()}
            style={{
              border: '1px solid black',
              padding: '8px',
              textAlign: 'center'
            }}
          >
            {headerTitle}
          </th>
        );
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return headers;
  };
  

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Filter bookings whenever selectedDay, selectedStartDate, or selectedEndDate changes
  useEffect(() => {
    filterBookings();
  }, [selectedDay, selectedStartDate, selectedEndDate]);

  return (
    <div>
      <Dropdown
        placeholder="Select a day"
        options={[
          { key: DayOfWeek.Sunday, text: 'Sunday' },
          { key: DayOfWeek.Monday, text: 'Monday' },
          { key: DayOfWeek.Tuesday, text: 'Tuesday' },
          { key: DayOfWeek.Wednesday, text: 'Wednesday' },
          { key: DayOfWeek.Thursday, text: 'Thursday' },
          { key: DayOfWeek.Friday, text: 'Friday' },
          { key: DayOfWeek.Saturday, text: 'Saturday' },
        ]}
        selectedKey={selectedDay}
        onChange={onDayChange}
      />
      <DatePicker
        placeholder="Select start date"
        value={selectedStartDate}
        onSelectDate={onStartDateChange}
      />
      <DatePicker
        placeholder="Select end date"
        value={selectedEndDate}
        onSelectDate={onEndDateChange}
      />
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {renderTableHeaders()}
          </tr>
        </thead>
        <tbody>
          {/* Render table data based on filtered bookings */}
          {/* Implement this part based on your specific data structure */}
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;
