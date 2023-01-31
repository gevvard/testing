import React from 'react';
import Logo from "../../pages/Logo/logo";
import Menu from "../../pages/menu/menu";
import css from "./header.module.scss"

const Header = () => {
  return (
    <div data-testid="header" className={css.header} >
      <Logo/>
      <Menu/>
    </div>
  );
};

export default Header;