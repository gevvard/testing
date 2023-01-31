import React from 'react';
import {Route, Routes} from "react-router-dom"
import {authRoutes} from "./routes";
const Pages = () => {
  return (

    <Routes  >
      {
        authRoutes.map(({path,element})=>{
          return <Route
            key={path}
            path={path}
            element={element}
            exact="true"
          />
        })
      }
    </Routes>

  );
};

export default Pages;