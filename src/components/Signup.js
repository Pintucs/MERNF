import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Imageslide from './Imageslide';
import SignupSuccessfull from './Popup';

const Signup = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const success = async () => {
    if (!fname || !lname || !password || !email) {
      setError(true);
      return false;
    }

    let result = await fetch('https://brownstackpd.onrender.com/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fname, lname, password, email })
    });
    let add = await result.json();
    localStorage.setItem('Registered Data', JSON.stringify(add));
    setShowModal(true);
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
                  Sign Up Here
                </h1>
                <input
                  type="user"
                  placeholder="First name"
                  name="fname"
                  className="form-control"
                  onChange={(e) => setFname(e.target.value)}
                />
                {error && !fname && <b style={{ color: 'red', fontSize: '12px' }}>Enter First Name</b>}
              </div>
              <br />
              <div className="form-outline">
                <input
                  type="user"
                  placeholder="Last name"
                  name="lname"
                  className="form-control"
                  onChange={(e) => setLname(e.target.value)}
                />
                {error && !lname && <b style={{ color: 'red', fontSize: '12px' }}>Enter Last Name</b>}
              </div>
              <br />
              <div className="form-outline">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && !password && <b style={{ color: 'red', fontSize: '12px' }}>Enter Password</b>}
              </div>
              <br />
              <div className="form-outline">
                <input
                  type="email"
                  placeholder="Email here..."
                  name="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && !email && <b style={{ color: 'red', fontSize: '12px' }}>Enter Email ID</b>}
              </div>
              <br />
              <div>
                <Link>
                  <Button className="bg-dark col-12" onClick={success}>
                    SIGN UP HERE
                  </Button>
                </Link>
                <br />
                <br />
              </div>
              <Link to="/login" style={{ float: 'right', color: 'red' }}>
                If you already have an account, please click here to login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SignupSuccessfull showModal={showModal} TextLable="Thank you for Registration " />
    </>
  );
};

export default Signup;
