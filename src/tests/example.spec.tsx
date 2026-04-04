import { render, screen } from '@/lib/test-utils';

describe('Example', () => {
  it('this will run', () => {
    render(<span>Test</span>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
