// src/stories/UserTable.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import UserTable from '../components/UserTable';

export default {
  title: 'Example/UserTable',
  component: UserTable,
  argTypes: {
    onUpdate: { action: 'update clicked' },
    onDelete: { action: 'delete clicked' },
  },
};

const Template = (args) => <UserTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      location: 'City A',
      lastActive: '2023-01-01',
      permission: 'Read/Write',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      role: 'User',
      location: 'City B',
      lastActive: '2023-01-05',
      permission: 'Read Only',
      status: 'Inactive',
    },
  ],
};
