import { render, screen } from '@testing-library/react';
import App from './App';
import NoResult from "./components/NoResult";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app')
  expect(linkElement).toBeInTheDocument();
});



test('Header', ()=>{
  render(<NoResult/>);
  expect("Not Found Messages")
})