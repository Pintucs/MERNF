import React, { useState } from 'react'
import Header from './Header'
import Card from './Card'
import AddToCard from './AddToCard'
// import Imageslide from './Imageslide'

const Main = () => {
    const [carditem,setcarditem]=useState([])
    const [Show,setShow]=useState(true)
    const cardData = (data) => {
        // const existingItem = carditem.find((item) => item.id === data.id);
        setcarditem([...carditem,{...data,quantity:1}])
      }
    return (
        <>
            <Header count={carditem.length} ShowAllCard={setShow}/>
            {
            Show ? <> <h1 className='text-center'>Discover NEW Arrivals</h1>
                         <div className="row w-100">
                         <div className="col-lg-12">
                         <Card handleCardData={cardData} />
                         </div>
                         </div>
                         </>
                         :
                         <AddToCard CardData={carditem} />
                }

            {/* <Imageslide /> */}
        </>
    )
}

export default Main