import React from 'react';
import {authRoutes} from "../routes";
import {Link} from "react-router-dom";
import css from "./menu.module.scss"

const Menu = () => {
  return (
    <div data-testid="menu" className={css.menuContainer} >
      <ul style={{display:"flex",width:500,height:40,alignItems:"center",justifyContent:"space-between"}} >
        {
          authRoutes.map(({name,path})=>{
            return <li key={path}  data-testid="menu-link">
              <Link to={path} key={name} exact="true" >
                {name}
              </Link>
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default Menu;