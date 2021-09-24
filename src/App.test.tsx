import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Provider from './Provider';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
