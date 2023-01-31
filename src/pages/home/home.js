import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersThunk} from "../../redux/actions/usersActions";
import {getUsersValues} from "../../redux/selectors/getUsersValue";


const Home = () => {

  const dispatch = useDispatch()
  const {users} = useSelector(getUsersValues)
  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])


  return (
    <div>
      {
        users?.map(({name,id})=>{
          return <div key={id} >{name}</div>
        })
      }
    </div>
  );
};

export default Home;