import React from 'react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Nav from './Nav';
import navCSS from'./../Nav/Nav.module.css';

export default {
  title: 'Components/Nav',
  component: Nav,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // Just check if the Nav component renders correctly
  // const nav = canvas.getByAltText('Logo');
  const nav = canvas.getByLabelText('Nav');
  expect(nav).toBeInTheDocument();
};
