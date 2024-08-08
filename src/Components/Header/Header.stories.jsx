import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Add interaction tests
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test if the greeting text "Hello, There !" is in the document
  const greetingText = canvas.getByText(/Hello, There !/i);
  expect(greetingText).toBeInTheDocument();

  // Test if the name text "I m Namanjeet" is in the document
  const nameText = canvas.getByText(/I m Namanjeet/i);
  expect(nameText).toBeInTheDocument();

  // Test if the description text is in the document
  const descriptionText = canvas.getByText(/A Combination Of My Passion For Design , Code and Interaction Web Design World./i);
  expect(descriptionText).toBeInTheDocument();

  // Test if the "Get In Touch" button is in the document
  const getInTouchButton = canvas.getByText(/Get In Touch/i);
  expect(getInTouchButton).toBeInTheDocument();

  // Test if the hero image is in the document
  const heroImage = await canvas.getByAltText('HeroIMG');
  expect(heroImage).toBeInTheDocument();

  // Test if the arrow images are in the document
  const arrowTopImage = await canvas.getByAltText('arrowTop');
  expect(arrowTopImage).toBeInTheDocument();

  const arrowBottomImage = await canvas.getByAltText('arrowBottom');
  expect(arrowBottomImage).toBeInTheDocument();

  // Test if the social media icons are in the document
  const facebookIcon = canvas.getByLabelText(/facebook/i);
  expect(facebookIcon).toBeInTheDocument();

  const instagramIcon = canvas.getByLabelText(/instagram/i);
  expect(instagramIcon).toBeInTheDocument();

  const twitterIcon = canvas.getByLabelText(/twitter/i);
  expect(twitterIcon).toBeInTheDocument();

  const githubIcon = canvas.getByLabelText(/github/i);
  expect(githubIcon).toBeInTheDocument();

  // Test button click interactions
  userEvent.click(getInTouchButton);
  expect(getInTouchButton).toBeVisible();
};