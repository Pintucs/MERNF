import React, { useEffect, useState,useCallback } from 'react'
import { Button } from 'react-bootstrap'
import Header from './Header'
import { useParams, useNavigate } from 'react-router-dom'

const UpdatePosduct = () => {
    const [name, setPname] = useState()
    const [prize, setPprize] = useState()
    const [model, setPmodel] = useState()
    const [company, setPcompany] = useState()
    const params = useParams()
    const navigate = useNavigate()


    // const getProduct = async () => {
    //     let result = await fetch(`http://localhost:5000/products/${params.id}`)
    //     let r = await result.json()
    //     setPname(r.name)
    //     setPcompany(r.company)
    //     setPmodel(r.model)
    //     setPprize(r.prize)
    // }

    // useEffect(() => {
    //     getProduct();
    // }, [])

    const getProduct = useCallback(async () => {
        let result = await fetch(`http://localhost:5000/products/${params.id}`)
        let r = await result.json()
        setPname(r.name)
        setPcompany(r.company)
        setPmodel(r.model)
        setPprize(r.prize)
      }, [params.id, setPname, setPcompany, setPmodel, setPprize]);
      
      useEffect(() => {
        getProduct();
      }, [getProduct]);


    const success = async () => {
        let result = await fetch(`http://localhost:5000/products/${params.id}`, {
            method: "Put",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ name, prize, model, company })
        })
        let add = await result.json()
        alert("Product update successfully")
        localStorage.setItem("Product item", JSON.stringify(add))
        navigate("/")
    }

    return (
        <>
            <Header />
            <div className='container'>
                <div className='row' >
                    <div className='col'>

                        <div className="form-outline d-grid gap-1">
                            <h1 className='text-center' style={{ padding: "30px" }}>Update Product Here</h1>
                            <input type="text" placeholder="Product name" name="name" className="form-control" value={name} onChange={(e) => setPname(e.target.value)} />

                        </div>
                        <br />
                        <div className="form-outline">
                            <input type="text" placeholder="Enter Prize" name="prize" className="form-control" value={prize} onChange={(e) => setPprize(e.target.value)} />

                        </div>
                        <br />
                        <div className="form-outline">
                            <input type="text" placeholder="Model Name" name="model" className="form-control" value={model} onChange={(e) => setPmodel(e.target.value)} />

                        </div><br />
                        <div className="form-outline">
                            <input type="text" placeholder="Company Name here" name="company" className="form-control" value={company} onChange={(e) => setPcompany(e.target.value)} />

                        </div>
                        <br />
                        <div>
                            <Button className='bg-dark col-12' onClick={success}>Click-to-Update-Product</Button><br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdatePosduct