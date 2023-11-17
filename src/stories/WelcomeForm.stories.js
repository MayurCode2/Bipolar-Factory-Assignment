// src/stories/WelcomeForm.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import WelcomeForm from '../components/WelcomeForm';

export default {
  title: 'Example/WelcomeForm',
  component: WelcomeForm,
};

const Template = (args) => <WelcomeForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: action('form submitted'),
};
