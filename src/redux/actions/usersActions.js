// import requests from "../api/api";
//
// const axios = require(`axios`)
//
//
//
// export const GET_USERS = "GET_USERS"
// export const GET_DATA_ERRORS= "GET_DATA_ERRORS"
//
// export const getUsersThunk =()=>async (dispatch)=>{
//   try{
//     const response = await axios.get(requests.users)
//     dispatch({
//       type:GET_USERS,
//       payload:response.data
//     })
//     console.log(response.data)
//   }catch (e) {
// dispatch({
//   type:GET_DATA_ERRORS,
//   payload:e.message
// })
//     console.log(e)
//   }finally {
//
//   }
// }
import requests from "../api/api";

export const GET_USERS = "GET_USERS";
export const GET_DATA_ERRORS = "GET_DATA_ERRORS";

export const getUsersThunk = () => async (dispatch) => {
  try {
    const response = await fetch(requests.users);
    const data = await response.json();
    dispatch({
      type: GET_USERS,
      payload: data,
    });
    console.log(data);
  } catch (e) {
    dispatch({
      type: GET_DATA_ERRORS,
      payload: e.message,
    });
    console.log(e);
  }
};
