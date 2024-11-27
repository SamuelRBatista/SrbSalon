import React from 'react';
import Nav from './Nav';

function Header() {
  const openNav = () => {
    // Lógica para abrir o menu, como mostrar um sidebar ou mudar um estado
    console.log("Abrir menu");
  };

  return (
    <header className="menu">
      <div className="menu-container">
        <a className="menu-logo">
          <img src="/img/logo1.png" alt="logo" />
        </a>
        <Nav />
        <span 
          className="menu-open" 
          style={{ fontSize: '30px', cursor: 'pointer' }} 
          onClick={openNav}
        >
          &#9776;
        </span>
      </div>
    </header>
  );
}

export default Header;
