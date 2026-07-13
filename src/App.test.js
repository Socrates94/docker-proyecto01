import { render, screen } from '@testing-library/react';
import App from './App';

test('renders haciendo cambios link', () => {
  render(<App />);
  const linkElement = screen.getByText(/haciendo cambios/i);
  expect(linkElement).toBeInTheDocument();
});
