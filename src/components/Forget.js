import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Header from './Header'
import HomeImage from './HomeImage'

const Forget = () => {
    const succes = () => {
        alert("go to login page")
    }
    return (
        <>
            <Header />
            <div className="img-fluid">
                <div className='container'>
                    <div className='row'>
                        <div className='col'><HomeImage /></div>
                        <div className='col'>
                            <div className="form-outline d-grid gap-1">
                                <h1 className='text-center' style={{ padding: "30px" }}>Login into  your account</h1>
                                <input type="user" placeholder="alex@email.com" className="form-control" required />
                                <input type="password" placeholder="New-Password" className="form-control" required />
                                <input type="password" placeholder="Repeat-password" className="form-control" required />
                            </div>
                            <br />
                            <div>
                                <Link to="/"><Button className='bg-dark col-12' onClick={succes}>CLICK ME </Button></Link><br /><br />
                            </div>
                            <div>
                                <Link to="/login" style={{ float: "right", color: "red" }}>If Already you have account please click for login</Link>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forget