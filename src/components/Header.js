import React from 'react';
import { Link } from 'react-router-dom';
import CardIcon from './AddToCardIcon';

const Header = () => {
  const auth = localStorage.getItem('Registered Data');

  const logOut = () => {
    localStorage.clear();
  };
  const iconStyle = {
    width: '50px',
    height: '50px',
    paddingRight:"5px"
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "brown" }}>
      <div className="container">
      <img src="image/ab.png" alt="Logo" className="logo" style={iconStyle}/>
        {auth ? (
          <Link className="navbar-brand" to="/">
            Brown-Stack ({JSON.parse(auth).fname})
          </Link>
        ) : (
          <Link className="navbar-brand" to="/">
            Brown-Stack My Shopping page
          </Link>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mydiv"
          aria-controls="mydiv"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mydiv">
          <ul className="navbar-nav ml-auto">
            {auth ? (
              <>
                <li className="nav-item">
                  <Link to="/addproduct" className="nav-link">
                    Add Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addtocard" className="nav-link">
                    <CardIcon />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link" onClick={logOut}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    SignUp
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;