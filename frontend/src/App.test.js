import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the minimum calls to action for the user', () => {
  render(<App />);
  const myFavoritesLink = screen.getByText(/My favorites/i);
  const allVideoLink = screen.getByText(/All videos/i);
  expect(myFavoritesLink).toBeInTheDocument();
  expect(allVideoLink).toBeInTheDocument();
  const nextButton = screen.getByText('Next');
  const previousButton = screen.getByText('Previous');
  expect(nextButton).toBeInTheDocument();
  expect(previousButton).toBeInTheDocument();
});
