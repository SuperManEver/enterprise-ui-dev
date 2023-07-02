// @vitest-environment happy-dom

import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
});

test('initial value should be 0', () => {
  render(<Counter />);

  const element = screen.getByTestId('current-count');

  expect(element.textContent).toBe('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  render(<Counter />);

  const element = screen.getByTestId('current-count');

  expect(element).toHaveTextContent('0');

  const button = screen.getByRole('button', { name: 'Increment' });

  fireEvent.click(button);

  expect(element).toHaveTextContent('1');
});
