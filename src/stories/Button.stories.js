// src/stories/Button.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import CustomButton from '../components/Button';

export default {
  title: 'Material-UI/Button',
  component: CustomButton,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    color: { control: 'select', options: ['default', 'inherit', 'primary', 'secondary'] },
  },
};

const Template = (args) => <CustomButton {...args} />;

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  children: 'Contained Primary Button',
  variant: 'contained',
  color: 'primary',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  children: 'Outlined Secondary Button',
  variant: 'outlined',
  color: 'secondary',
};

export const TextDefault = Template.bind({});
TextDefault.args = {
  children: 'Text Default Button',
  variant: 'text',
  color: 'default',
};
