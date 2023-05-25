import React, { useEffect, useState,useCallback } from 'react'
import Header from './Header'
import { useParams,useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const AddToCard = () => {
  const params = useParams()
  const [name, setPname] = useState()
  const [prize, setPprize] = useState()
  const [count, setCount] = useState(1)
  const navigate = useNavigate()

  // const getProduct = async () => {
  //   let result = await fetch(`http://localhost:5000/products/${params.id}`)
  //   let r = await result.json()
  //   setPname(r.name)
  //   setPprize(r.prize)
  // }

  // useEffect(() => {
  //   getProduct()
  // }, [])
const submit =()=>{
  alert("Thank you for purchase this item")
  navigate("/")
}

  const getProduct = useCallback(async () => {
    let result = await fetch(`http://localhost:5000/products/${params.id}`)
    let r = await result.json()
    setPname(r.name)
    setPprize(r.prize)
  }, [params.id])
  
  useEffect(() => {
    getProduct()
  }, [getProduct])

  const inc = () => {
    setCount(count + 1)
  }

  const dic = () => {
    if (count > 1) {
      setCount(count - 1)
    }

  }
  return (
    <>
      <Header />
      <div className='container d-flex justify-content-between h3 p-3 m-3' style={{ width: "80%", backgroundColor: "#2C2929", color: "white" }}>
        <div>{name}</div>
        <div>{prize * count}</div>
        <div>
          <button onClick={inc}>+</button>
          {count}
          <button onClick={dic} className='ms-2'>-</button>
        </div>
        <Button className='m-1' onClick={submit}>Proceed to Buy</Button>
      </div>
    </>
  )
}

export default AddToCard