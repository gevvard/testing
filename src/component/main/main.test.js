
import { Provider } from 'react-redux';
import{render,screen} from"@testing-library/react"
import Main from "../../../src/component/main/main";
import {MemoryRouter} from "react-router-dom";
import { createStore } from 'redux';
import rootReducer from '../../../src/component/main/main';

const store = createStore(rootReducer);

describe("main",()=>{


  test('renders main ', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>
    );
    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();
    expect(main).toContainElement(screen.getByTestId('pages'));
  });

})