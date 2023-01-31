import {render, screen} from "@testing-library/react";
import Logo from "./logo";

describe("logoTest",()=>{
  test("img test",()=>{
    render(<Logo/>)
    const logoElem = screen.getByTestId('logoImg');
    expect(logoElem).toBeInTheDocument();
  })
})