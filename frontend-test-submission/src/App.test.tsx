// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  const heading = screen.getByText(/URL Shortener/i);
  expect(heading).toBeInTheDocument();
});
