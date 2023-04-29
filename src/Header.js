import React from 'react';
import Logo from './Amazon-Logo.png'
function Header() {
  return (
    <header>
            
              <img className='logo' src={Logo}/>
            
      <nav>
        <ul>
          <li><a href="/HOME">Home</a></li>
          <li><a href="/registration">Registration</a></li>
          <li><a href="#">Favorites</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;