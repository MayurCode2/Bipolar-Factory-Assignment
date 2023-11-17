// src/components/UserTable.js
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UserTable = ({ data, onUpdate, onDelete }) => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  const handleEdit = (userId, user) => {
    setEditingUserId(userId);
    setEditedValues(user);
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setEditedValues({});
  };

  const handleSaveEdit = (userId) => {
    setEditingUserId(null);
    // Pass the edited values to the onUpdate callback
    onUpdate(userId, editedValues);
    setEditedValues({});
  };

  const handleInputChange = (field, value) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Last Active</TableCell>
            <TableCell>Permission</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={editedValues.name || user.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell>{user.lastActive}</TableCell>
              <TableCell>{user.permission}</TableCell>
              <TableCell style={{ backgroundColor: user.status === 'Active' ? 'lightgreen' : 'lightcoral' }}>
                {editingUserId === user.id ? 'Editing...' : user.status}
              </TableCell>
              <TableCell>
                {editingUserId === user.id ? (
                  <>
                    <Button variant="outlined" onClick={() => handleSaveEdit(user.id)}>
                      Save
                    </Button>
                    <Button variant="outlined" onClick={handleCancelEdit}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outlined" onClick={() => handleEdit(user.id, user)}>
                      <EditIcon />
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => onDelete(user.id)}>
                      <DeleteIcon />
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
