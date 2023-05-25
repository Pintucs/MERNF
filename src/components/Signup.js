import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Header from './Header'
import HomeImage from './HomeImage'
const Signup = () => {
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    const success = async () => {

        let result = await fetch("http://localhost:5000/reg", {
            method: "post",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ fname, lname, password, email })
        })
        let add = await result.json()
        alert("Registretion successfull")
        localStorage.setItem("Registered Data", JSON.stringify(add))
        navigate("/")
    }
    useEffect(() => {
        const auth = localStorage.getItem("Registered Data")
        if (auth) {
            navigate("/")
        }
    })

    return (
        <>
            <Header />
            <div className="img-fluid">
                <div className='container'>
                    <div className='row' >
                        <div className='col'><HomeImage /></div>
                        <div className='col'>

                            <div className="form-outline d-grid gap-1">
                                <h1 className='text-center' style={{ padding: "30px" }}>Sign Up Here</h1>
                                <input type="user" placeholder="First name" name="fname" className="form-control" onChange={(e) => setFname(e.target.value)} required />
                            </div><br />
                            <div className="form-outline">
                                <input type="user" placeholder="Last name" name="lname" className="form-control" onChange={(e) => setLname(e.target.value)} required />
                            </div>
                            <br />
                            <div className="form-outline">
                                <input type="password" placeholder="Password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
                            </div><br />
                            <div className="form-outline">
                                <input type="email" placeholder="Email here..." name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <br />
                            <div>
                                <Link to="/"><Button className='bg-dark col-12' onClick={success}>SIGN UP HERE</Button></Link><br />
                                <br />
                            </div>
                            <Link to="/login" style={{ float: "right", color: "red" }}>If Already you have account please click for login</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup