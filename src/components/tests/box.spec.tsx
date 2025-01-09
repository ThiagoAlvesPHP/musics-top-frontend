import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Box } from '../box'

import '@testing-library/jest-dom'

describe('<Box>', () => {
  it('should render box', () => {
    const { getByText } = render(<Box>Content Box</Box>)

    expect(getByText('Content Box')).toBeInTheDocument();
  });
});
