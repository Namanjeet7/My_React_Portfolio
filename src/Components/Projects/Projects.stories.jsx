import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Projects from './Projects';
import projectCSS from './../Projects/Projects.module.css';

export default {
  title: 'Components/Projects',
  component: Projects,
};

const Template = (args) => <Projects {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Add interaction tests
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test if the marquee text is present multiple times
  const marqueeText = canvas.getAllByText(/MY PROJECTS✌️💪/i);
  expect(marqueeText.length).toBeGreaterThan(1, "Marquee text 'MY PROJECTS✌️💪' should appear multiple times");

  // Test if the project images are in the document
  const projectImages = canvas.getAllByAltText('Project-Img');
  expect(projectImages.length).toBe(3, "There should be 3 project images with alt text 'Project-Img'");

  // Test if the section title "Projects" is in the document within the correct container
  const sectionTitles = canvas.getAllByText(/Projects/i);
  expect(sectionTitles.length).toBeGreaterThan(0, "There should be at least one element with the text 'Projects'");
  
  // Test if the "View All Projects" button is in the document within the correct container
  const viewAllProjectsButton = canvas.getByRole('button', { name: /View All Projects/i });
  expect(viewAllProjectsButton).toBeInTheDocument("The 'View All Projects' button should be in the document");
  
  // Click the "View All Projects" button
  userEvent.click(viewAllProjectsButton);
};

