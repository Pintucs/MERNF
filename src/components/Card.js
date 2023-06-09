import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import UpdateProduct from './UpdateProduct';

const Card = ({handleCardData}) => {
  const [product, setProduct] = useState([]);

  const getData = useCallback(async () => {
    const result = await fetch('https://brownstackpd.onrender.com/products');
    const show = await result.json();
    setProduct(show);
  }, [setProduct]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleUpdate = useCallback(async () => {
    const result = await fetch('https://brownstackpd.onrender.com/products');
    const show = await result.json();
    setProduct(show);
    getData();
  }, [getData]);

  const searchHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`https://brownstackpd.onrender.com/search/${key}`);
      result = await result.json();
      if (result) {
        setProduct(result);
      }
    } else {
      getData();
    }
  };

  const deleteData = async (id) => {
    let result = await fetch(`https://brownstackpd.onrender.com/products/${id}`, {
      method: 'delete'
    });
    const ids = await result.json();
    if (ids) {
      getData();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-end m-3">
        <div className="col-md-4 mb-4">
          <input
            type="text"
            onChange={searchHandle}
            placeholder="Find Product Here..."
            name="name"
            className="form-control m-2"
          />
        </div>
      </div>
      <div className="row m-3" style={{backgroundColor:"brown"}}>
        {product.length > 0 ? (
          product.map((v, index) => (
            <div key={index} className="col-lg-3" style={{paddingBottom:"15px",paddingTop:"25px"}}>
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">{v.name}</h5>
                  <p className="card-text">{v.model}</p>
                  <p className="card-text">{v.prize}</p>
                  <p className="card-text"> {v.company}</p>
                  <div className="d-grid gap-2">
                    {/* <Link to={'/addtocard/' + v._id}> */}

                      {/* <Button className="btn btn-primary col-12" onClick={() => cardData(v)} >
                        Add To Cart
                      </Button> */}
                      <Button className="btn btn-primary col-12" onClick={() => handleCardData(v)}>
                         Add To Cart
                      </Button>

                    {/* </Link> */}
                    <Button onClick={() => deleteData(v._id)} className="btn btn-danger">
                      Delete
                    </Button>
                    <Button className="btn btn-primary p-0">
                      <UpdateProduct id={v._id} onUpdate={handleUpdate} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>No Result Found</h1>
        )}
      </div>
    </>
  );
};

export default Card;