import React, { useState } from 'react'
import Header from './Header'
import Card from './Card'
import AddToCard from './AddToCard'
// import Imageslide from './Imageslide'

const Main = () => {
    const [A,setA]=useState([])
    const [Show,setShow]=useState(true)
    const cardData = (data) => {
        setA([...A,{...data,quantity:1}])
      };
      console.log(A)
    return (
        <>
            <Header count={A.length} ShowAllCard={setShow}/>
            {
            Show ? <> <h1 className='text-center'>Discover NEW Arrivals</h1>
                         <div className="row w-100">
                         <div className="col-lg-12">
                         <Card handleCardData={cardData} />
                         </div>
                         </div>
                         </>
                         :
                         <AddToCard CardData={A} />
                }

            {/* <Imageslide /> */}
        </>
    )
}

export default Main