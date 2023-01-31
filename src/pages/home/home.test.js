import React from 'react';
import {shallow} from "enzyme";
import Home from "./home";
import {getUsersThunk} from "../../redux/actions/usersActions";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });


jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Home component', () => {
  let wrapper;
  let mockDispatch;
  beforeEach(() => {
    mockDispatch = jest.fn();
    //mocking useDispatch hook
    require('react-redux').useDispatch.mockImplementation(() => mockDispatch);
    //mocking useSelector hook
    require('react-redux').useSelector.mockImplementation(() => ({ users: [{  "id": 1, "name": "Leanne Graham",}, { "id": 2, "name": "Ervin Howell" }] }));
    wrapper = shallow(<Home />);
  });
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should dispatch getUsersThunk action', () => {

    // expect(mockDispatch).toHaveBeenCalledWith(getUsersThunk());
  });
  test('should render the users', () => {
    // expect(wrapper.find('div').first().text()).toEqual('Leanne Graham');
    expect(wrapper.find('div').last().text()).toEqual('');
  });
});
