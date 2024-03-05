import React, { useState } from 'react';
// import ScheduleDashboard from './Dashboard';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MenuItem, Select, FormControl, InputLabel, Grid } from '@material-ui/core';
import { DatePicker } from "@mui/x-date-pickers";
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import resourcesData from './data/resource.json';
import bookingsData from './data/bookings.json';

const DashboardParent = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDayChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedDay(event.target.value as string);
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const filteredBookings = bookingsData.filter(booking => {
    const bookingDate = moment(booking.starttime);
    const bookingStartTime = bookingDate.startOf('day').toDate();
    const bookingEndTime = bookingDate.endOf('day').toDate();
    return (selectedDay ? bookingDate.format('dddd').toLowerCase() === selectedDay.toLowerCase() : true) &&
      (startDate && endDate ? (bookingStartTime >= startDate && bookingEndTime <= endDate) : true);
  });

  interface GapItem {
    id: string;
    group: string;
    title: string;
    start_time: moment.Moment;
    end_time: moment.Moment;
    itemProps: {
      style: {
        background: string;
      };
    };
  }
  
  const gapItems = filteredBookings.reduce((accumulator: GapItem[], booking, index) => {
    if (index > 0) {
      const prevBookingEndTime = moment(filteredBookings[index - 1].endtime);
      const currentBookingStartTime = moment(booking.starttime);
  
      if (prevBookingEndTime.isSame(currentBookingStartTime, 'day')) {
        const gapDuration = moment.duration(currentBookingStartTime.diff(prevBookingEndTime));
  
        if (gapDuration.asMilliseconds() > 0) {
          accumulator.push({
            id: `gap-${index}`,
            group: booking.Resource.bookableresourceid,
            title: 'Gap',
            start_time: prevBookingEndTime,
            end_time: currentBookingStartTime,
            itemProps: {
              style: {
                background: 'green'
              }
            }
          });
        }
      }
    }
    return accumulator;
  }, []);
  
  

  const items = filteredBookings.map((booking, index) => ({
    id: index,
    group: booking.Resource.bookableresourceid,
    title: booking.name,
    start_time: moment(booking.starttime),
    end_time: moment(booking.endtime),
  }));


  const allItems = [...items, ...gapItems];

  const groups = resourcesData.map(resource => ({
    id: resource.bookableresourceid,
    title: resource.name,
  }));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ marginTop: "20px", marginLeft: "50px", marginRight: "50px", marginBottom: '20px', }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={handleStartDateChange}
              format="dd-MM-YYYY"
            />
          </Grid>
          <Grid item>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={handleEndDateChange}
              format="dd-MM-YYYY"
            />
          </Grid>
          <Grid item>
            <FormControl style={{ width: '150px', marginTop: '20px', marginBottom: '20px', height: '53px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <InputLabel
                id="day-select-label"
                style={{ marginLeft: '10px', marginTop: '-6px', backgroundColor: '#FFF', paddingLeft: '4px' }}
              >
                Select Day
              </InputLabel>
              <Select
                value={selectedDay}
                onChange={handleDayChange}
                style={{ width: '100%', height: '100%', border: 'none', borderBottom: '1px solid #ccc', outline: 'none', paddingTop: '5px', paddingLeft: '10px' }} // Adjusted padding
              >
                <MenuItem value="saturday">Saturday</MenuItem>
                <MenuItem value="sunday">Sunday</MenuItem>
                <MenuItem value="monday">Monday</MenuItem>
                <MenuItem value="tuesday">Tuesday</MenuItem>
                <MenuItem value="wednesday">Wednesday</MenuItem>
                <MenuItem value="thursday">Thursday</MenuItem>
                <MenuItem value="friday">Friday</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Timeline
          groups={groups}
          items={allItems}
          defaultTimeStart={moment("2024-02-28 08:00:00")}
          defaultTimeEnd={moment("2024-02-29 08:00:00")}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DashboardParent;
