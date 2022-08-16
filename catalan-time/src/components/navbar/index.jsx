import React from "react";
import { Link } from 'react-router-dom';

export function Navbar () {
    return(
        <header className="header">
        <h1 className='header__title'>CATALAN TIME</h1>
          <nav className="header__navbar">            
          <Link
          to={'/'}
          type="button"
          className="navbar__handler"
        >
            HOME
        </Link>
          <Link
          to={'/tutorial'}
          type="button"
          className="navbar__handler"
        >
            TUTORIAL
        </Link>
          <Link
          to={'/practice'}
          type="button"
          className="navbar__handler"
        >
            PRACTICE
        </Link>
        </nav>
      </header>
    )
}

export default Navbar;