import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Nav from './Nav';
import '@testing-library/jest-dom';

test('renders Nav component', () => {
  render(<Nav />);
  expect(screen.getByAltText(/Logo/i)).toBeInTheDocument();
});

test('toggles theme', () => {
  render(<Nav />);
  const themeToggle = screen.getByRole('button', { name: /Toggle theme/i });
  fireEvent.click(themeToggle);
  expect(document.body).toHaveAttribute('data-theme', 'dark');
});
