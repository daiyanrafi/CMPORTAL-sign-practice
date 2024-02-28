import React, { useState, useEffect } from 'react';
import { Dropdown, IDropdownOption, DatePicker, DayOfWeek } from '@fluentui/react';

interface Resource {
  name: string;
  bookableresourceid: string;
}

interface Booking {
  name: string;
  starttime: string;
  endtime: string;
  Resource?: Resource;
}


// Import JSON data directly
import bookingsData from './data.json';
import resourcesData from './resource.json';

const MyComponent: React.FC = () => {
  const [selectedResource, setSelectedResource] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<DayOfWeek | undefined>();
  const [selectedStartDate, setSelectedStartDate] = useState<Date | undefined>();
  const [selectedEndDate, setSelectedEndDate] = useState<Date | undefined>();
  const [bookings, setBookings] = useState<Booking[]>([]); // Use imported data
  const [resources, setResources] = useState<Resource[]>(resourcesData); // Use imported data
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);

  const filterBookings = () => {
    if (!selectedDay || !selectedStartDate || !selectedEndDate || !selectedResource) return;

    const filtered = bookings.filter(booking => {
      const bookingDate = new Date(booking.starttime);
      const bookingDay = bookingDate.getDay();
      const bookingDateString = bookingDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });

      return (
        bookingDay === selectedDay &&
        bookingDate >= selectedStartDate &&
        bookingDate <= selectedEndDate &&
        booking.name === selectedResource
      );
    });

    setFilteredBookings(filtered);
  };

  const onResourceChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
    setSelectedResource(option?.text || '');
  };

  const onDayChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
    setSelectedDay(option?.key as DayOfWeek);
  };

  const onStartDateChange = (date?: Date | null | undefined) => {
    setSelectedStartDate(date || undefined);
  };

  const onEndDateChange = (date?: Date | null | undefined) => {
    setSelectedEndDate(date || undefined);
  };

  const renderTableHeaders = (): React.JSX.Element[] => {
    if (!selectedStartDate || !selectedEndDate) return [];

    const headers = [];
    const currentDate = new Date(selectedStartDate);

    while (currentDate <= selectedEndDate) {
      if (selectedDay === undefined || currentDate.getDay() === selectedDay) {
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

  const renderTableData = (booking: Booking): React.ReactNode[] => {
    if (!selectedStartDate || !selectedEndDate) return [];
  
    const tableData = [];
    const currentDate = new Date(selectedStartDate);
  
    while (currentDate <= selectedEndDate) {
      if (selectedDay === undefined || currentDate.getDay() === selectedDay) {
        const bookingDate = new Date(booking.starttime);
        const bookingDateString = bookingDate.toLocaleDateString('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'short'
        });
        
        if (currentDate.toLocaleDateString() === bookingDateString) {
          const resourceMatch = resources.find(resource => resource.bookableresourceid === booking.Resource?.bookableresourceid);
          tableData.push(
            <td
              key={currentDate.toISOString()}
              style={{
                border: '1px solid black',
                padding: '8px',
                textAlign: 'center'
              }}
            >
              {resourceMatch ? 'Yes' : ''}
            </td>
          );
        } else {
          tableData.push(
            <td
              key={currentDate.toISOString()}
              style={{
                border: '1px solid black',
                padding: '8px',
                textAlign: 'center'
              }}
            >
              {/* Empty cell for dates without bookings */}
            </td>
          );
        }
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return tableData;
  };
  


  useEffect(() => {
    filterBookings();
  }, [selectedDay, selectedStartDate, selectedEndDate, selectedResource]);

  return (
    <div>
      <Dropdown
        placeholder="Select a resource"
        options={resources.map(resource => ({ key: resource.name, text: resource.name }))}
        selectedKey={selectedResource}
        onChange={onResourceChange}
      />
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
        {/* <tbody>
          {filteredBookings.map((booking, index) => (
            <tr key={index}>
              {renderTableHeaders().map(header => {
                const bookingDate = new Date(booking.starttime);
                const bookingDateString = bookingDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'short'
                });

                if (header.props.children === bookingDateString) {
                  // Find the corresponding resource based on bookableresourceid directly within the booking object
                  const matchedResource = resources.find(resource => resource.bookableresourceid === booking.Resource?.bookableresourceid);

                  if (matchedResource) {
                    return <td key={header.key}>{matchedResource.name}</td>;
                  } else {
                    return <td key={header.key}></td>; // Empty cell if resource not found
                  }
                } else {
                  return <td key={header.key}></td>;
                }
              })}
            </tr>
          ))}
        </tbody> */}

<tbody>
  {filteredBookings.map((booking, index) => (
    <tr key={index}>
      {renderTableData(booking)}
    </tr>
  ))}
</tbody>


        {/* <tbody>
          {resources.map(resource => (
            <tr key={resource.bookableresourceid}>
              {renderTableHeaders().map(header => {
                if (header.key === null) {
                  return null; // Handle null key
                }

                const headerDate = new Date(header.key);
                const matchingBooking = filteredBookings.find(booking => {
                  const bookingDate = new Date(booking.starttime);
                  return (
                    bookingDate.getDate() === headerDate.getDate() &&
                    bookingDate.getMonth() === headerDate.getMonth() &&
                    bookingDate.getFullYear() === headerDate.getFullYear() &&
                    booking.name === selectedResource &&
                    booking.Resource?.bookableresourceid === resource.bookableresourceid
                  );
                });

                return (
                  <td key={`${header.key}-${resource.bookableresourceid}`}>
                    {matchingBooking ? matchingBooking.Resource?.bookableresourceid : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody> */}


      </table>
    </div>
  );
};

export default MyComponent;
