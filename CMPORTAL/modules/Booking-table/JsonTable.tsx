
// jsontable.tsx

import React from 'react';
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  Stack,
  PrimaryButton,
  Panel,
  PanelType,
} from '@fluentui/react';
import { BookingData } from './EditPage';
import EditPage from './EditPage';

interface JsonTableProps {
  bookings: BookingData[];
  onSave: (updatedData: BookingData) => void;
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

const JsonTable: React.FC<JsonTableProps> = ({ bookings, onSave }) => {
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);
  const [editedData, setEditedData] = React.useState<BookingData | null>(null);

  const openPanel = (data: BookingData) => {
    setEditedData(data);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setEditedData(null);
  };

  const handleSave = (updatedData: BookingData) => {
    onSave(updatedData); // Save the updated data
    closePanel(); // Close the panel
  };

  const renderActionColumn = (item: BookingData): React.ReactElement => (
    <PrimaryButton onClick={() => openPanel(item)}>Edit</PrimaryButton>
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
        <span style={{ color: getStatusColor(item.bookingstatus) }}>{item.bookingstatus}</span>
      ),
    },
    { key: 'createdon', name: 'Created On', fieldName: 'createdon', minWidth: 100 },
    { key: 'action', name: 'Action', fieldName: 'action', minWidth: 100, onRender: renderActionColumn },
  ];

  return (
    <Stack>
      <DetailsList
        items={bookings}
        columns={columns.map(column => ({
          ...column,
          onRender: (item: BookingData) => {
            if (column.key === 'action') {
              return renderActionColumn(item);
            }
            const color = getStatusColor(item.bookingstatus);
            return <span style={{ color }}>{(item as any)[column.fieldName]}</span>;
          },
        }))}
        layoutMode={DetailsListLayoutMode.justified}
        selectionMode={SelectionMode.none}
      />
      <Panel
        isOpen={isPanelOpen}
        type={PanelType.medium}
        onDismiss={closePanel}
        headerText="Edit Booking"
        closeButtonAriaLabel="Close"
      >
        {editedData && (
          <EditPage data={editedData} onSave={handleSave} onClose={closePanel} />
        )}
      </Panel>
    </Stack>
  );
};

export default JsonTable;
