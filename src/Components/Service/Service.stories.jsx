import React from 'react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Service from './Service';

export default {
  title: 'Components/Service',
  component: Service,
};

const Template = (args) => <Service {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Add basic interaction tests
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Test if the "Trusted By Other Brands" text is present
  const trustedByText = canvas.getByText(/Trusted By Other Brands/i);
  expect(trustedByText).toBeInTheDocument("The 'Trusted By Other Brands' text should be present");

  // Test if the brand images are in the document
  const brandImages = canvas.getAllByAltText('brands-img');
  expect(brandImages.length).toBe(5, "There should be 5 brand images with alt text 'brands-img'");

  // Test if the section title "My Services" is in the document
  const sectionTitle = canvas.getByText(/My Services/i);
  expect(sectionTitle).toBeInTheDocument("The section title 'My Services' should be present");

  // Test if the services titles are present
  const serviceTitles = canvas.getAllByText(/UI\/UX Design|Web Design|Mobile App Design|Branding/i);
  expect(serviceTitles.length).toBe(4, "There should be 4 service titles: 'UI/UX Design', 'Web Design', 'Mobile App Design', and 'Branding'");
};

