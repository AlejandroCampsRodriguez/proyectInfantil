import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css'; 

export const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink to='/' className='btn btn-primary'>
      Inicio
      </NavLink>

      <NavLink to='/colores' className='btn btn-primary'>
        Colores
      </NavLink>
       
      <NavLink to='/figuras' className='btn btn-primary'>
        Figuras
      </NavLink>

    </nav>
  );
};
