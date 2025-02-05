import React from 'react'
import { Link } from 'react-router-dom';
import './HeaderAdmin.css'
import logo_ecommerce from "../../../assets/logo-ecommerce.png";

function HeaderAdmin() {
  return (
    <div className='header-container'>
        <div className='logo-ecommerce-admin'>
        <Link to="http://localhost:5173/plantas"><img src={logo_ecommerce} alt='logo'/></Link>
      </div>
      <h1>Panel de Administración</h1>
    </div>
  );
}

export default HeaderAdmin