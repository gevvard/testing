

import {MemoryRouter} from "react-router-dom";

import {render,screen} from "@testing-library/react";
import Menu from "./menu/menu";
import {authRoutes} from "./routes";

describe("menuTesting",()=>{
  test("menuTest",()=>{
    render(<MemoryRouter>
      <Menu/>
    </MemoryRouter>)
    const menuElem = screen.getByTestId(`menu`)
    expect(menuElem).toBeInTheDocument()
  })
  test("mapping test",()=>{
    const { getAllByText } = render(<MemoryRouter>
      <Menu/>
    </MemoryRouter>)
    const links = screen.getAllByTestId(`menu-link`);
    expect(links).toHaveLength(authRoutes.length);
    authRoutes.forEach(({ name }) => {
      const link = getAllByText(name).at(0)
      expect(link).toBeInTheDocument()
    })
  })
})