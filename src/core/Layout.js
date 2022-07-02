import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Layout = ({children}) => {

    const nav = () => (
      <div className="container my-5">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container ">
            <Link className="navbar-brand text-light" to={'/signin'}>
            Community Chat
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link text-light" to={'/signin'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to={'/signup'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );

    return (
        <Fragment>
            {nav()}
            <div className="container">
                    {children}
            </div>
        </Fragment>
    )
}

export default Layout;