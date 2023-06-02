import React from 'react';
import { Link } from 'react-router-dom';
import CardIcon from './AddToCardIcon';

const Header = ({count,ShowAllCard}) => {
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
      <Link className="navbar-brand" onClick={(()=>ShowAllCard(true))}>
      <img src="image/ab.png" alt="Logo" className="logo" style={iconStyle}/>
      </Link>
        {auth ? (
          <div className="navbar-brand" >
            Brown-Stack ({JSON.parse(auth).fname})
          </div>
        ) : (
          <div className="navbar-brand">
            Brown-Stack My Shopping page
          </div>
        )}
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#mydiv" 
        aria-controls="mydiv" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mydiv">
          <ul className="navbar-nav ml-auto">
            {auth ? (
              <>
                <li>
                  <Link to="/addproduct" className="nav-link" style={{ color: 'white' }}>
                    Add Product
                  </Link>
                </li>
                <li onClick={(()=>ShowAllCard(false))}>
                  <Link className="nav-link">
                    <CardIcon counter={count}/>
                  </Link>
                </li>
               
                <li>
                  <Link to="/login" className="nav-link" onClick={logOut} style={{ color: 'white' }}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="nav-link" style={{ color: 'white' }}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="nav-link" style={{ color: 'white' }}>
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