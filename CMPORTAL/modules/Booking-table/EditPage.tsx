//EditPage.tsx
import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

interface EditPageProps {
    data: any;
    onSave: (updatedData: any) => void;
    onClose: () => void;
  }
  
  const EditPage: React.FC<EditPageProps> = ({ data, onSave, onClose }) => {
    const [editedData, setEditedData] = useState<Record<string, any>>(data);
  
    const handleChange = (field: string, value: string) => {
      setEditedData((prevData) => ({ ...prevData, [field]: value }));
    };
  
    const handleSave = () => {
      onSave(editedData);
      onClose();
    };
  
    return (
        <div>
          <h2>Edit Page</h2>
          <div>
            <TextField
              label="Resource"
              value={editedData.resource}
              onChange={(e) => handleChange('resource', e.target.value)}
            />
            <TextField
              label="Start Time"
              value={editedData.startTime}
              onChange={(e) => handleChange('startTime', e.target.value)}
            />
            <TextField
              label="End Time"
              value={editedData.endTime}
              onChange={(e) => handleChange('endTime', e.target.value)}
            />
            <TextField
              label="Duration"
              value={editedData.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
            />
            <TextField
              label="Booking Time"
              value={editedData.bookingTime}
              onChange={(e) => handleChange('bookingTime', e.target.value)}
            />
            <TextField
              label="Booking Start"
              value={editedData.bookingStatus}
              onChange={(e) => handleChange('bookingStatus', e.target.value)}
            />
            <TextField
              label="Created On"
              value={editedData.createdOn}
              onChange={(e) => handleChange('createdOn', e.target.value)}
            />
          </div>
          <Button onClick={handleSave}>Save</Button>
        </div>
      );
    };
    
    export default EditPage;
