import React from 'react'

import {NavLink,Link} from 'react-router-dom'

import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
            <Link 
            style={{textDecoration:"none" }}
            to="/" 
            className="navabr-brand ubuntu fs-3 text-dark fw-bold">
              Rick & Morty 
              <span className="text-primary"> WiKi</span> 
            </Link>
            <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">

              <style jsx>
                {`
                  button[aria-expanded="false"]>.close{
                    display:none;
                  }
                  button[aria-expanded="true"]>.open{
                    display:none;
                  }
                `}
              </style>

            <i className='fas fa-bars open fw-bold text-dark'></i>
            <i className='fas fa-times close fw-bold text-dark'></i>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav fs-5">
                <NavLink activeClassName="active" to="/" className="nav-link">Characters
                </NavLink>
                <NavLink to="/episodes" className="nav-link"> Episodes</NavLink>
                <NavLink to="/locations" className="nav-link"> Locations</NavLink>
            </div>
            </div>
        </div>
        </nav>
  );
};

export default Navbar
