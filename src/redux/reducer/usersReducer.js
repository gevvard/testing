import {GET_DATA_ERRORS, GET_USERS} from "../actions/usersActions";


const initialState = {
  users:[],
  errors:null

}

const UsersReducer =(state=initialState,action)=>{
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users:action.payload
      }
    case GET_DATA_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state;
  }
}
export default UsersReducer