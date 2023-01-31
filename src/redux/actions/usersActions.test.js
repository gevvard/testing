import UsersReducer from "../reducer/usersReducer";

describe('UsersReducer', () => {
  test('should handle GET_USERS', () => {
    const initialState = {
      users: [],
      errors: null,
    };

    const action = {
      type: 'GET_USERS',
      payload: [{  "id": 1, "name": "Leanne Graham",}, { "id": 2, "name": "Ervin Howell" }],
    };

    const newState = UsersReducer(initialState, action);

    expect(newState).toEqual({
      users: [{  "id": 1, "name": "Leanne Graham",}, { "id": 2, "name": "Ervin Howell" }],
      errors: null,
    });
  });

  test('should handle GET_DATA_ERRORS', () => {
    const initialState = {
      users: [],
      errors: null,
    };

    const action = {
      type: 'GET_DATA_ERRORS',
      payload: 'Error: Could not fetch data',
    };

    const newState = UsersReducer(initialState, action);

    expect(newState).toEqual({
      users: [],
      errors: 'Error: Could not fetch data',
    });
  });
});




