import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Add interaction tests
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test if the title is in the document
  const title = canvas.getByText("Let's Talk About Next Big Thing");
  expect(title).toBeInTheDocument();

  // Test if the "Write A Message" button is in the document
  const writeMessageButton = canvas.getByText("Write A Message");
  expect(writeMessageButton).toBeInTheDocument();

  // Test if the "Discuss A Project" button is in the document
  const discussProjectButton = canvas.getByText("Discuss A Project");
  expect(discussProjectButton).toBeInTheDocument();

  // Test if the Facebook social media info is in the document
  const facebookInfo = canvas.getByText((content, element) => {
    const hasText = (text) => text.includes('Facebook') && text.includes('@Facebook_user');
    const elementHasText = hasText(element.textContent);
    return element.tagName.toLowerCase() === 'h2' && elementHasText;
  });
  expect(facebookInfo).toBeInTheDocument();

  // Test if the Instagram social media info is in the document
  const instagramInfo = canvas.getByText((content, element) => {
    const hasText = (text) => text.includes('Instagram') && text.includes('@Instagram_user');
    const elementHasText = hasText(element.textContent);
    return element.tagName.toLowerCase() === 'h2' && elementHasText;
  });
  
  // Test button click interactions
  userEvent.click(writeMessageButton);
  expect(writeMessageButton).toBeVisible();

  userEvent.click(discussProjectButton);
  expect(discussProjectButton).toBeVisible();
};
