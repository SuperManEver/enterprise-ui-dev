import { render as renderComponent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

/**
 * For a complete example, see: test/utilities.ts
 */

export const render = (
  ui: React.ReactElement,
  options?: Parameters<typeof renderComponent>[1],
) => {
  const user = userEvent.setup();
  const result = renderComponent(ui, options);

  return {
    ...result,
    user,
  };
};
