// src/components/List.js
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const MyList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
  ]);

  const [open, setOpen] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditedText('');
    setSelectedItemId(null);
  };

  const handleSave = () => {
    if (selectedItemId === null) {
      // Add new item
      setItems([...items, { id: Date.now(), text: editedText }]);
    } else {
      // Update existing item
      setItems(items.map(item => (item.id === selectedItemId ? { ...item, text: editedText } : item)));
    }

    handleClose();
  };

  const handleEdit = (id, text) => {
    setOpen(true);
    setEditedText(text);
    setSelectedItemId(id);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item.id, item.text)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <IconButton edge="end" aria-label="add" onClick={handleAdd}>
        <AddIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedItemId === null ? 'Add Item' : 'Edit Item'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the text for the item.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Item Text"
            type="text"
            fullWidth
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleSave}>{selectedItemId === null ? 'Add' : 'Save'}</button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyList;
