import React from 'react';
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  Stack,
  Panel,
  PanelType,
  DefaultButton,
} from '@fluentui/react';
import { BookingData } from './EditPage';
import EditPage from './EditPage';

interface JsonTableProps {
  bookings: BookingData[];
  onSave: (updatedData: BookingData) => void;
  // openFrom: (updatedData: BookingData) => void;
}

const getStatusColor = (status: string, canceledByText?: string): string => {
  const lowercaseStatus = status.toLowerCase();

  if (lowercaseStatus === 'completed') {
    return 'green';
  } else if (lowercaseStatus === 'scheduled') {
    return 'blue';
  } else if (lowercaseStatus === 'canceled' && canceledByText) {
    if (canceledByText.toLowerCase() === 'clinic') {
      return 'yellow';
    } else if (canceledByText.toLowerCase() === 'client') {
      return 'red';
    }
  }

  return 'black'; // Default color
};

const JsonTable: React.FC<JsonTableProps> = ({ bookings, onSave }) => {
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);
  const [editedData, setEditedData] = React.useState<BookingData | null>(null);

  const openPanel = (data: BookingData) => {
    // openFrom(data);
    setEditedData(data);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setEditedData(null);
  };

  const handleSave = (updatedData: BookingData) => {
    onSave(updatedData);
    closePanel();
  };

  const handleRowDoubleClick = (item: BookingData) => {
    // Handle row double click
    console.log('Row double clicked:', item);
    // Show "Coming soon"
    alert('Coming soon');
  };

  const renderActionColumn = (item: BookingData): React.ReactElement => (
    <DefaultButton
      iconProps={{ iconName: 'Edit' }}
      styles={{
        root: { padding: '6px', border: 'none', width: '24px', minWidth: '24px' }, 
        icon: { fontSize: '16px' }
      }}
      onClick={() => openPanel(item)}
    />
  );

  const columns = [
    { 
      key: 'resource', 
      name: 'Resource', 
      fieldName: 'resource', 
      minWidth: 100, 
      onRender: (item: BookingData) => (
        <span style={{ color: getStatusColor(item.bookingstatus, item.sabs_canceledbytext) }}>
          {item.resource}
        </span>
      ),
    },
    { 
      key: 'starttimetext', 
      name: 'Start Time', 
      fieldName: 'starttimetext', 
      minWidth: 120, 
      onRender: (item: BookingData) => (
        <span style={{ color: getStatusColor(item.bookingstatus, item.sabs_canceledbytext) }}>
          {item.starttime}
        </span>
      ),
    },
    { 
      key: 'endtimetext', 
      name: 'End Time', 
      fieldName: 'endtimetext', 
      minWidth: 120, 
      onRender: (item: BookingData) => (
        <span style={{ color: getStatusColor(item.bookingstatus, item.sabs_canceledbytext) }}>
          {item.endtime}
        </span>
      ),
    },
    { 
      key: 'duration', 
      name: 'Duration', 
      fieldName: 'duration', 
      minWidth: 60, 
      onRender: (item: BookingData) => (
        <span style={{ textAlign: 'right', color: getStatusColor(item.bookingstatus, item.sabs_canceledbytext), display: 'block', }}>
          {item.duration}
        </span>
      ),
    },
    { 
      key: 'bookingtypetext', 
      name: 'Booking Time', 
      fieldName: 'bookingtypetext', 
      minWidth: 100, 
      onRender: (item: BookingData) => (
        <span 
          style={{ 
            color: getStatusColor(item.bookingstatus, item.sabs_canceledbytext),
            textAlign: 'center', // Align text to the center
            display: 'block', // Ensure that textAlign works
          }}
        >
          {item.bookingtypetext}
        </span>
      ),
    },
    { 
      key: 'bookingstatus', 
      name: 'Booking Status', 
      fieldName: 'bookingstatus', 
      minWidth: 100, 
      onRender: (item: BookingData) => (
        <span 
          style={{ 
            color: getStatusColor(item.bookingstatus, item.sabs_canceledbytext),
            textAlign: 'center', // Align text to the center
            display: 'block', // Ensure that textAlign works
          }}
        >
          {item.bookingstatus}
        </span>
      ),
    },
    { 
      key: 'createdontext', 
      name: 'Created On', 
      fieldName: 'createdontext', 
      minWidth: 120, 
      onRender: (item: BookingData) => (
        <span style={{ color: getStatusColor(item.bookingstatus, item.sabs_canceledbytext) }}>
          {item.createdon}
        </span>
      ),
    },
    { 
      key: 'sabs_canceledbytext', 
      name: 'Canceled By', 
      fieldName: 'sabs_canceledbytext', 
      minWidth: 100, 
      onRender: (item: BookingData) => (
        <span style={{ color: getStatusColor(item.bookingstatus, item.sabs_canceledbytext) }}>
          {item.sabs_canceledbytext}
        </span>
      ),
    },
    { 
      key: 'action', 
      name: 'Action', 
      fieldName: 'action', 
      minWidth: 100, 
      onRender: renderActionColumn 
    },
  ];
  
  return (
    <Stack>
      <div>
        <DetailsList
          items={bookings}
          columns={columns}
          layoutMode={DetailsListLayoutMode.justified}
          selectionMode={SelectionMode.none}
          onItemInvoked={handleRowDoubleClick} // Attach double click handler
        />
      </div>
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
