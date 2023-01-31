
import {getUsersValues} from "./getUsersValue";

describe('usersSelectors', () => {
  it('getUsersValues should select the users field from the state', () => {
    const state = { users: [{  "id": 1, "name": "Leanne Graham",}, { "id": 2, "name": "Ervin Howell" }], errors: null };
    const selectedUsers = getUsersValues(state);
    expect(selectedUsers).toEqual([{  "id": 1, "name": "Leanne Graham",}, { "id": 2, "name": "Ervin Howell" }]);
  });
});