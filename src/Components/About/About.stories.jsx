import React from 'react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import About from './About';

export default {
  title: 'Components/About',
  component: About,
};

const Template = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Add interaction tests with descriptions
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test if the marquee text "ABOUT ME✌️💪" is in the document
  const marqueeTexts = canvas.getAllByText(/ABOUT ME✌️💪/i);
  expect(marqueeTexts[0]).toBeInTheDocument();

  // Test if the marquee text "✨✨MY WORK (2024) ✨✨" is in the document
  const workTexts = canvas.getAllByText(/✨✨MY WORK \(2024\) ✨✨/i);
  expect(workTexts[0]).toBeInTheDocument();

  // Test if the About image is in the document
  const aboutImg = await canvas.getByAltText('About-img');
  expect(aboutImg).toBeInTheDocument();

  // Test if the introduction text is in the document
  const introText = canvas.getByText((content, element) => {
    const hasText = (text) => text.includes("Hello I'm") && text.includes('Namanjeet') && text.includes('Designer & Developer');
    const elementHasText = hasText(element.textContent);
    return element.tagName.toLowerCase() === 'h3' && elementHasText;
  });
  expect(introText).toBeInTheDocument();

  // Test if the experience details "50+ Projects Completed" is in the document
  // const projectsText = canvas.getByText((content, element) => {
  //   const hasText = (text) => text.includes("50+") && text.includes('Projects Completed');
  //   const elementHasText = hasText(element.textContent);
  //   return element.tagName.toLowerCase() === 'h1' && elementHasText;
  // });
  // expect(projectsText).toBeInTheDocument();

  // // Test if the experience details "2+ Years Of Experience" is in the document
  // const experienceText = canvas.getByText((content, element) => {
  //   const hasText = (text) => text.includes("2+") && text.includes('Years Of Experience');
  //   const elementHasText = hasText(element.textContent);
  //   return element.tagName.toLowerCase() === 'h1' && elementHasText;
  // });
  // expect(experienceText).toBeInTheDocument();

  // // Test if the experience details "10+ Happy Clients" is in the document
  // const clientsText = canvas.getByText((content, element) => {
  //   const hasText = (text) => text.includes("10+") && text.includes('Happy Clients');
  //   const elementHasText = hasText(element.textContent);
  //   return element.tagName.toLowerCase() === 'h1' && elementHasText;
  // });
  // expect(clientsText).toBeInTheDocument();
};
