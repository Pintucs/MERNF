import React, { useEffect, useState ,useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';

const UpdateProduct = (props) => {
    const [name, setPname] = useState()
    const [prize, setPprize] = useState()
    const [model, setPmodel] = useState()
    const [company, setPcompany] = useState()
    const [showModal, setShowModal] = useState(false);
  
    const params =props.id

    const navigate = useNavigate()

    const getProduct = useCallback(async () => {
        let result = await fetch(`https://brownstackpd.onrender.com/products/${params}`)
        let r = await result.json()
        setPname(r.name)
        setPcompany(r.company)
        setPmodel(r.model)
        setPprize(r.prize)
      }, [params, setPname, setPcompany, setPmodel, setPprize]);
      
      useEffect(() => {
        getProduct();
      }, [getProduct]);

    const success = async () => {
        let result = await fetch(`https://brownstackpd.onrender.com/products/${params}`, {
            method: "Put",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ name, prize, model, company })
        })
        let add = await result.json()
        localStorage.setItem("Product item", JSON.stringify(add))
        navigate("/")
        setShowModal(false)
    }

    const back=()=>{
        setShowModal(false)
    }

    return (
        <>
        <div className="container">
      <div className="row">
        <div className="col">

        <Button className="btn btn-primary col-12" onClick={() => setShowModal(true)}>Update Product</Button>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Body>
              <div className="form-group">
                <input type="text" placeholder="Product name" name="name" className="form-control" value={name} onChange={(e) => setPname(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <input type="text" placeholder="Enter Prize" name="prize" className="form-control" value={prize} onChange={(e) => setPprize(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <input type="text" placeholder="Model Name" name="model" className="form-control" value={model} onChange={(e) => setPmodel(e.target.value)} />
              </div>
              <br />
              <div className="form-group">
                <input type="text" placeholder="Company Name here" name="company" className="form-control" value={company} onChange={(e) => setPcompany(e.target.value)} />
              </div>
              <br />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={back}>Close</Button>
              <Button variant="primary" onClick={success}>Update Product</Button>
            </Modal.Footer>
          </Modal>

        </div>
      </div>
    </div>
        </>
    )
}

export default UpdateProduct