import React from 'react'
import { Link } from 'react-router-dom'
import AddToCardIcon from './AddToCardIcon';

const Header = (props) => {
    const auth = localStorage.getItem("Registered Data")
    // const anths=localStorage.setItem("id")

    const logOut = () => {
        localStorage.clear()
    }
    return (
        <>
            <nav className='navbar navbar-expand-sm navbar-dark ' style={{ backgroundColor: "brown" }}>
                <div className='container-fluid'>
                    {auth ? <Link className='navbar-brand' to="/">Brown-Stack ({JSON.parse(auth).fname})</Link>
                        : <Link className='navbar-brand' to="/">Brown-Stack My Shopping page</Link>}
                    <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#mydiv" aria-controls="mydiv" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                </div>
                <div className='collapse navbar-collapse' id="mydiv">
                    <ul className='navbar-nav ml-auto'>
                        <li className='navbar-text'><Link to='/addproduct' className='nav-link'>Add_Product</Link></li>
                        {auth ? <>
                            <li className='navbar-text'><Link to="/addtocard" className='nav-link'><AddToCardIcon /></Link></li>
                            <li className='navbar-text'><Link to="/login" className='nav-link' onClick={logOut}>Logout</Link></li>
                        </>
                            : <>
                                <li className='navbar-text'><Link to="/login" className='nav-link' >Login</Link></li>
                                <li className='navbar-text'><Link to="/signup" className='nav-link' >SignUp</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header