import { render } from '@testing-library/svelte';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it.skip('should demonstrate this matcher`s usage', async () => {});
