import React from 'react';
import { Link } from 'react-router-dom';
import logo_ecommerce from '../../../../assets/logo-ecommerce.png'
import logo_user from '../../../../assets/logo-user.png'
import logo_cart from '../../../../assets/logo-cart.png'
import './NavBar.css'

function NavBar() {
  const isLinkDisabled = true;

  const handleClick = (e) => {
    if (isLinkDisabled) e.preventDefault();
  };

  return (
    <>
      <div className='logo-ecommerce'>
        <Link to="/"><img src={logo_ecommerce} alt='logo'/></Link>
      </div>
      <nav className='navbar'>
        <Link to="/plantas-de-interior">Plantas de interior</Link>
        <Link to="/plantas-de-exterior">Plantas de exterior</Link>
        <Link to="/plantas-petfriendly">Plantas petfriendly</Link>
        <Link to="/user" aria-label="Ir a perfil de usuario" onClick={handleClick} className={isLinkDisabled ? 'disabled-link' : ''}>
          <img className='logo-user' src={logo_user} alt='logo-user'/>
        </Link>
        <Link to="/checkout" aria-label="Ir al carrito">
          <img className='logo-cart' src={logo_cart} alt='logo-cart'/>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;