import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
// import Card from './Card'

const AddToCard = ({CardData}) => {
 const [card,setCard] = useState([])

  useEffect(() => {
    setCard(CardData)
  }, [CardData])



  return (
    <>
    {card.map((Card,index) =>{
      return(
        <>
        <div key={index} className='container d-flex justify-content-between h3 p-3 m-3' style={{ width: "80%", backgroundColor: "#2C2929", color: "white" }}>
              <div>{Card.name}</div>
              <div>Rs. {Card.prize*Card.quantity}</div>
              <div>
          <button 
          onClick={(()=>{
            const _Card=card.map((C,i) =>{
              return index===i ? {...C,quantity:C.quantity+1}:i
            })
            setCard(_Card)
          })}
          >+</button>
          {Card.quantity}

          <button className='ms-2'
          
          
          >-</button>
          <Button className='m-1'>Proceed to Buy</Button>
        </div>
        </div>
         </>
      )
        })
  }
    

   

    
    </>
  )
}

export default AddToCard



 

      // <Header />
    
