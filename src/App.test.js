import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the new link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Docker Compose works!/i);
  expect(linkElement).toBeInTheDocument();
});
