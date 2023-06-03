import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Imageslide from './Imageslide';
import LoginSuccessfull from './Popup';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const loginData = async () => {
    if (!email || !password) {
      setError(true);
      return false;
    }

    let getData = await fetch('https://brownstackpd.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const add = await getData.json();
    console.warn(add);
    if (add.fname) {
      localStorage.setItem('Registered Data', JSON.stringify(add));
      setShowModal(true);
    } else {
      alert('Please enter the correct email or password');
      navigate('/login');
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem('Registered Data');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <div className="img-fluid">
      <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-12">
              <h1 className='text-center' style={{padding:"20px"}}>Welcome</h1>
              <Imageslide />
            </div>
          <div className="col-lg-6 col-md-12">
            <div className="form-outline d-grid gap-1">
              <h1 className="text-center" style={{ padding: '20px' }}>
                Login into your account
              </h1>
              <input
                type="email"
                placeholder="Email"
                id="form12"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && !email && (
                <b style={{ color: 'red', fontSize: '12px' }}>Enter a valid input</b>
              )}
              </div>
              <br />
              <div className="form-outline">
              <input
                type="password"
                placeholder="Password"
                id="form12"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && !password && (
                <b style={{ color: 'red', fontSize: '12px' }}>Enter a valid input</b>
              )}
              <Link to="/forget" style={{ float: 'right', textDecoration: 'none', color: 'red', padding: '10px' }}>
                Forgot password
              </Link>
              </div>
              <br />
              <div>
                <Link>
              <Button onClick={loginData} className="bg-dark col-12">
                LOGIN
              </Button>
              </Link>
              </div>
              <br />
              <div>
              <Link to="/signup">
                <Button className="bg-dark col-12">SIGN UP HERE</Button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginSuccessfull showModal={showModal} TextLable="Login Successful" />
</>
  );
};

export default Login;
