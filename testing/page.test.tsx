import { render, screen } from '@testing-library/react';
import page from '../app/(auth)/sign-in/page';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Page Component', () => {
  test('renders Page component', () => {
    render(<Router><page /></Router>);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});