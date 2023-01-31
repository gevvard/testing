import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";

describe("app",()=>{
  test("renders the header",()=>{
    render(<MemoryRouter>
      <App />
    </MemoryRouter>);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  })
  test("renders the main",()=>{
    render(<MemoryRouter>
      <App />
    </MemoryRouter>);
    const mainElement = screen.getByTestId('main');
    expect(mainElement).toBeInTheDocument();
  })
  test("renders the footer",()=>{
    render(<MemoryRouter>
      <App />
    </MemoryRouter>);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  })
})