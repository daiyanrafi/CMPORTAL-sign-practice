import React, { useState } from 'react';
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  Stack,
  PrimaryButton,
} from '@fluentui/react';
import EditPage from './EditPage';
import livedata from './livedata.json';

interface BookingData {
  bookableresourcebookingid: string;
  resource: string;
  starttime: string;
  endtime: string;
  duration: number;
  bookingtypetext: string;
  bookingstatus: string;
  createdon: string;
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

const JsonTable: React.FC = () => {
  const [data, setData] = useState<BookingData[]>(livedata);
  const [editingRow, setEditingRow] = useState<string | null>(null);

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

  const renderActionColumn = (item: BookingData): React.ReactElement => (
    <PrimaryButton onClick={() => handleEditClick(item.bookableresourcebookingid)}>Edit</PrimaryButton>
  );

  const columns = [
    { key: 'resource', name: 'Resource', fieldName: 'resource', minWidth: 100 },
    { key: 'starttime', name: 'Start Time', fieldName: 'starttime', minWidth: 100 },
    { key: 'endtime', name: 'End Time', fieldName: 'endtime', minWidth: 100 },
    { key: 'duration', name: 'Duration', fieldName: 'duration', minWidth: 100 },
    { key: 'bookingtypetext', name: 'Booking Time', fieldName: 'bookingtypetext', minWidth: 100 },
    {
      key: 'bookingstatus',
      name: 'Booking Status',
      fieldName: 'bookingstatus',
      minWidth: 100,
      onRender: (item: BookingData) => (
        <div style={{ color: getStatusColor(item.bookingstatus) }}>{item.bookingstatus}</div>
      ),
    },
    { key: 'createdon', name: 'Created On', fieldName: 'createdon', minWidth: 100 },
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
        <EditPage
        data={data.find(row => row.bookableresourcebookingid === editingRow) || {} as BookingData}
        onSave={handleSave}
        onClose={() => setEditingRow(null)}
      />
      
     )}
    </Stack>
  );
};

export default JsonTable;
