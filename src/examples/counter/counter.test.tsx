// @vitest-environment happy-dom

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from './test/utilities';
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
  const user = userEvent.setup();

  render(<Counter />);

  const element = screen.getByTestId('current-count');

  expect(element).toHaveTextContent('0');

  const button = screen.getByRole('button', { name: 'Increment' });

  await user.click(button);

  expect(element).toHaveTextContent('1');
});
