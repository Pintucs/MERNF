import React, { useState,useEffect } from 'react'
import Header from './Header'
import Card from './Card'

const Main = () => {
    const [carditem,setcarditem]=useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);

    const cardData = (data) => {
        const existingItem = carditem.find(item => item._id === data._id);
        if (existingItem) {
            updateCardItem(existingItem._id, 1);
        } else {
            setcarditem([...carditem, { ...data, quantity: 1 }]);
        }
    };
   
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
        const sum = carditem.reduce((total, item) => total + item.quantity, 0);
        setTotalQuantity(sum);
      }, [carditem]);


      localStorage.setItem('CardData', JSON.stringify(carditem));

    return (
        <>
            <Header count={totalQuantity}/>
            <> <h1 className='text-center'>Discover NEW Arrivals</h1>
                         <div className="row w-100">
                         <div className="col-lg-12">
                         <Card handleCardData={cardData} />
                         </div>
                         </div>
                         </>
        </>
    )
}

export default Main