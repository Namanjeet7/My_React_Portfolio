import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Nav from './Nav';
import navCSS from './../Nav/Nav.module.css';

export default {
  title: 'Components/Nav',
  component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Add interaction tests
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test if the logo is in the document
  const logo = canvas.getByAltText('Logo');
  expect(logo).toBeInTheDocument();

  // Test if the theme toggle button is in the document
  const themeToggleButton = canvas.getByLabelText('Toggle theme');
  expect(themeToggleButton).toBeInTheDocument();

  // Test theme toggle
  userEvent.click(themeToggleButton);
  expect(document.querySelector('body')).toHaveAttribute('data-theme', 'dark');
  userEvent.click(themeToggleButton);
  expect(document.querySelector('body')).toHaveAttribute('data-theme', 'light');

  // Test if the menu button is in the document
  const menuButton = canvas.getByRole('button', { name: /menu/i });
  expect(menuButton).toBeInTheDocument();

  // Test menu toggle
  userEvent.click(menuButton);
  expect(menuButton).toHaveClass(navCSS.showMenu);
};
