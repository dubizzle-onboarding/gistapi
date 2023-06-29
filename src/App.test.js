import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app')
  expect(linkElement).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText('Search Gists for the username');
  expect(searchInput).toBeInTheDocument();
});

test('allows input to be typed into search', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText('Search Gists for the username');
  
  userEvent.type(searchInput, 'westc');

  expect(searchInput).toHaveValue('westc');
});

test('makes API call on search', async () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText('Search Gists for the username');
  userEvent.type(searchInput, 'westc');
});
