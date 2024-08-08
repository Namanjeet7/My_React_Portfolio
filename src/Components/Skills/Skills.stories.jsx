import React from 'react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Skills from './Skills';

export default {
  title: 'Components/Skills',
  component: Skills,
};

const Template = (args) => <Skills {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Add basic interaction tests
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test if the section title "Advantage" is present
  const sectionTitle = canvas.getByText(/Advantage/i);
  expect(sectionTitle).toBeInTheDocument("The section title 'Advantage' should be present");

  // Test if the main title "Skills & Tools" is present
  const mainTitle = canvas.getByText(/Skills & Tools/i);
  expect(mainTitle).toBeInTheDocument("The main title 'Skills & Tools' should be present");

  // Test if the description paragraph is present
  const description = canvas.getByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, excepturi?/i);
  expect(description).toBeInTheDocument("The description paragraph should be present");

  // Test if the tool names are present
  const toolNames = canvas.getAllByText(/Figma|Sketch|Photoshop|XD|Vue|Angular/i);
  expect(toolNames.length).toBe(6, "There should be 6 tool names: 'Figma', 'Sketch', 'Photoshop', 'XD', 'Vue', 'Angular'");

  // Test if the tool images are present
  const toolImages = canvas.getAllByRole('img');
  expect(toolImages.length).toBe(6, "There should be 6 tool images");
};

