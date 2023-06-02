import React, { useState,useEffect } from 'react'
import Header from './Header'
import Card from './Card'
import AddToCard from './AddToCard'
// import Imageslide from './Imageslide'

const Main = () => {
    const [carditem,setcarditem]=useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [Show,setShow]=useState(true)

    const cardData = (data) => {
        const existingItem = carditem.find(item => item._id === data._id);
        if (existingItem) {
            updateCardItem(existingItem._id, 1);
        } else {
            setcarditem([...carditem, { ...data, quantity: 1 }]);
        }
    };
   
         // Helper function to update the quantity of an existing card item
    const updateCardItem = (_id, quantity) => {
        setcarditem(prevItems => {
            return prevItems.map(item => {
                if (item._id === _id) {
                    return { ...item, quantity: item.quantity + quantity };
                }
                return item;
            });
        });
    };

    useEffect(() => {
        // Calculate the sum of total quantity
        const sum = carditem.reduce((total, item) => total + item.quantity, 0);
        setTotalQuantity(sum);
      }, [carditem]);


    

    return (
        <>
            <Header count={totalQuantity} ShowAllCard={setShow}/>
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