import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../app/App';

test('renders homepage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Homepage/i);
  expect(linkElement).toBeInTheDocument();
});
