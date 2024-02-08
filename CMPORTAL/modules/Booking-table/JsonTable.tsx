import React, { useState } from 'react';
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  Stack,
  PrimaryButton,
  Checkbox,
} from '@fluentui/react';
import EditPage from './EditPage';
import livedata from './livedata.json';

interface JsonTableProps {
  // Add any props you may need
}

const getStatusColor = (status: string): string => {
  const lowercaseStatus = status.toLowerCase();

  switch (lowercaseStatus) {
    case 'completed':
      return 'green';
    case 'scheduled':
      return 'blue';
    case 'canceled':
      return 'red';
    default:
      return 'black';
  }
};

const JsonTable: React.FC<JsonTableProps> = () => {
  const [data, setData] = useState(jsonData);
  const [editingRow, setEditingRow] = useState<number | null>(null);

  const handleEditClick = (rowId: string) => {
    setEditingRow(rowId);
  };

  const handleSave = (updatedData: BookingData) => {
    setData(prevData =>
      prevData.map(row =>
        row.bookableresourcebookingid === updatedData.bookableresourcebookingid ? { ...row, ...updatedData } : row
      )
    );
    setEditingRow(null);
  };

  const renderActionColumn: (item: any) => React.ReactElement | null = (item) => {
    return (
      <PrimaryButton onClick={() => handleEditClick(item.id)}>
        Edit
      </PrimaryButton>
    );
  };

  const columns = [
    { key: 'resource', name: 'Resource', fieldName: 'resource', minWidth: 100 },
    { key: 'startTime', name: 'Start Time', fieldName: 'startTime', minWidth: 100 },
    { key: 'endTime', name: 'End Time', fieldName: 'endTime', minWidth: 100 },
    { key: 'duration', name: 'Duration', fieldName: 'duration', minWidth: 100 },
    { key: 'bookingTime', name: 'Booking Time', fieldName: 'bookingTime', minWidth: 100 },
    // {
    //   key: 'bookingStatus',
    //   name: 'Booking Status',
    //   fieldName: 'bookingStatus',
    //   minWidth: 100,
    //   onRender: (item: any) => (
    //     <div style={{ color: getStatusColor(item.bookingStatus) }}>{item.bookingStatus}</div>
    //   ),
    // },

    //2nd apptemp
    {
      key: 'bookingStatus',
      name: 'Booking Status',
      fieldName: 'bookingStatus',
      minWidth: 100,
      onRender: (item: any) => (
        <div style={{ color: getStatusColor(item.bookingStatus), backgroundColor: 'lightblue', padding: '5px' }}>
          {item.bookingStatus}
        </div>
      ),
    },
    { key: 'createdOn', name: 'Created On', fieldName: 'createdOn', minWidth: 100 },
    // Add other columns based on your data structure
    { key: 'action', name: 'Action', fieldName: 'action', minWidth: 100, onRender: renderActionColumn },
  ];

  return (
    <Stack>
      {editingRow === null ? (
        <DetailsList
          items={data}
          columns={columns}
          layoutMode={DetailsListLayoutMode.justified}
          selectionMode={SelectionMode.none}
        />
      ) : (
        <EditPage data={data.find((row) => row.id === editingRow)} onSave={handleSave} onClose={() => setEditingRow(null)} />
      )}
    </Stack>
  );
};

export default JsonTable;
