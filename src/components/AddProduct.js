import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { Button } from 'react-bootstrap'
import Header from './Header'
const AddPosduct = () => {
    const [name, setPname] = useState()
    const [prize, setPprize] = useState()
    const [model, setPmodel] = useState()
    const [company, setPcompany] = useState()
    const [error, setError] = useState(false)
    const navigate = useNavigate()




    const success = async () => {
        if (!name || !prize || !model || !company) {
            setError(true)
            return false
        }

        let result = await fetch("http://localhost:5000/products", {
            method: "post",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ name, prize, model, company })
        })
        let add = await result.json()
        console.log(add)
        alert("Product Added successfully")
        navigate("/")
    }

    return (
        <>
            <Header />
            <div className='container'>
                <div className='row' >
                    <div className='col'>

                        <div className="form-outline d-grid gap-1">
                            <h1 className='text-center' style={{ padding: "30px" }}>Add Product Here</h1>
                            <input type="text" placeholder="Product name" name="name" className="form-control" onChange={(e) => setPname(e.target.value)} required />
                            {error && !name && <span>Enter valid input</span>}
                        </div>
                        <br />
                        <div className="form-outline">
                            <input type="text" placeholder="Enter Prize" name="prize" className="form-control" onChange={(e) => setPprize(e.target.value)} required />
                            {error && !prize && <span>Enter valid input</span>}
                        </div>
                        <br />
                        <div className="form-outline">
                            <input type="text" placeholder="Model Name" name="model" className="form-control" onChange={(e) => setPmodel(e.target.value)} required />
                            {error && !model && <span>Enter valid input</span>}
                        </div><br />
                        <div className="form-outline">
                            <input type="text" placeholder="Company Name here" name="company" className="form-control" onChange={(e) => setPcompany(e.target.value)} required />
                            {error && !company && <span>Enter valid input</span>}
                        </div>
                        <br />
                        <div>
                            <Button className='bg-dark col-12' onClick={success}>Click-to-Add-Product</Button><br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPosduct