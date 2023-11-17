// src/stories/List.stories.js
import React from 'react';
import MyList from '../components/List';

export default {
  title: 'Material-UI/List',
  component: MyList,
};

const Template = (args) => <MyList {...args} />;

export const Default = Template.bind({
    
});
