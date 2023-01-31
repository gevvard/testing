
import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import {MemoryRouter} from "react-router-dom";

test('renders the logo and menu components', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Header/>
    </MemoryRouter>
    );
  const headerElement = getByTestId('header');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveStyle('display: flex');
  expect(headerElement.querySelector('Logo'));
  expect(headerElement.querySelector('Menu'));
});
