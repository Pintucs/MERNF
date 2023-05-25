import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
const Card = () => {
  const [product, setProduct] = useState([])
  const [count, setCount] = useState(1)
  const [id, setId] = useState(null)

     localStorage.setItem(`${id}`, JSON.stringify({ id }))
     localStorage.setItem(`count`, JSON.stringify({ count }))



  const getData = async () => {
    const result = await fetch("http://localhost:5000/products");
    const show = await result.json()
    setProduct(show)
  }

  useEffect(() => {
    getData();
  }, [])

  const searchHandle = async (e) => {
    let key = e.target.value
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`)
      result = await result.json()
      if (result) {
        setProduct(result)
      }
    }
    else {
      getData()
    }
  }
  const deleteData = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "delete"
    })
    const ids = await result.json()
    if (ids) {
      getData()
    }
  }

  return (
    <>
      <div className="d-flex justify-content-end">

        <div style={{ width: "30%" }}>
          <input type="text" onChange={searchHandle} placeholder="Find Product Here..." name="name" className="form-control m-2" />
        </div>

      </div>

      <div className="row">
        {product.length > 0 ? product.map((v, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{v.name}</h5>
                <p className="card-text">{v.model}</p>
                <p className="card-text">{v.prize}</p>
                <p className="card-text"> {v.company}</p>
                <div className="d-grid gap-2">
                  {/* <Link to={"/addtocard/" + v._id} > */}
                  <Link to={"/addtocard/" + v._id} >
                    <Button className="btn btn-primary" onClick={() => {
                      setCount(count + 1)
                      setId(v._id)
                    }}>Add To Card</Button>
                  </Link>
                  <Button onClick={() => deleteData(v._id)} className='btn btn-danger' >Delete</Button>
                  <Link to={"/updateproduct/" + v._id} >
                    <Button className="btn btn-primary">Update</Button>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        ))
          : <h1>No Result Found</h1>
        }
      </div>
    </>
  )
}

export default Card