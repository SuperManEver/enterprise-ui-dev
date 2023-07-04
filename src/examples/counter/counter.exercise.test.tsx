import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from './test/utilities';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  await user.click(incrementButton);

  expect(currentCount).toHaveTextContent('1');
});

test('it should render the component with an initial count', async () => {
  const user = userEvent.setup();

  render(<Counter initialCount={2} />);

  const element = screen.getByTestId('current-count');

  expect(element).toHaveTextContent('2');

  const button = screen.getByRole('button', { name: 'Increment' });

  await user.click(button);

  expect(element).toHaveTextContent('3');
});

test('it should reset the count when the "Reset" button is pressed', async () => {
  const user = userEvent.setup();

  render(<Counter />);

  const element = screen.getByTestId('current-count');

  expect(element).toHaveTextContent('0');

  const button = screen.getByRole('button', { name: 'Increment' });

  await user.click(button);

  expect(element).toHaveTextContent('1');

  const resetButton = screen.getByRole('button', { name: 'Reset' });

  await user.click(resetButton);

  expect(element).toHaveTextContent('0');
});
