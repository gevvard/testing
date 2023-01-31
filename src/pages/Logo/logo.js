import React from 'react';
import logo from "./logo.jpg"

const Logo = () => {
  return (
    <div data-testid="logo" >
      <img  data-testid="logoImg" style={{width:50 ,height:50}} src={logo} />
    </div>
  );
};

export default Logo;