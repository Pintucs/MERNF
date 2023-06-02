import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const AddToCard = ({ CardData }) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    setCard(CardData);
  }, [CardData]);

  const handleIncreaseQuantity = (index) => {
    const updatedCard = card.map((item, ind) => {
      if (index === ind) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCard(updatedCard);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCard = card.map((item, ind) => {
      if (index === ind) {
        return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 };
      }
      return item;
    });
    setCard(updatedCard);
  };

  return (
    <>
      {card.map((Carditem, index) => (
        <div
          className='container d-flex justify-content-between h3 p-3 m-3'
          style={{ width: '80%', backgroundColor: '#2C2929', color: 'white' }}
          key={index}
        >
          <div>{Carditem.name}</div>
          <div>Rs. {Carditem.prize * Carditem.quantity}</div>
          <div>
            <button className='ms-2' onClick={() => handleIncreaseQuantity(index)}>
              +
            </button>

            {Carditem.quantity}

            <button className='ms-2' onClick={() => handleDecreaseQuantity(index)}>
              -
            </button>

            <Button className='m-1'>Proceed to Buy</Button>
          </div>
        </div>
      ))}

      <div className='float-right'>
        Total Amount:{' '}
        {card.reduce((total, item) => total + item.prize * item.quantity, 0)}
      </div>
    </>
  );
};

export default AddToCard;





// import React, { useEffect, useState } from 'react'
// import { Button } from 'react-bootstrap'
// // import Card from './Card'

// const AddToCard = ({CardData}) => {
//  const [card,setCard] = useState([])

//   useEffect(() => {
//     setCard(CardData)
//   }, [CardData])



//   return (
//     <>
//     {card.map((Carditem,index) =>{
//       return(
//         <>
//         <div className='container d-flex justify-content-between h3 p-3 m-3' style={{ width: "80%", backgroundColor: "#2C2929", color: "white" }}>
//               <div>{Carditem.name}</div>
//               <div>Rs. {Carditem.prize*Carditem.quantity}</div>
//               <div>
//           <button className='ms-2' onClick={()=>{ const _Card=card.map((item,ind) =>
//           { return index===ind ? {...item,quantity: item.quantity+1} : item 
//         })
//             setCard(_Card)}}>
//               +
//           </button>

//           {Carditem.quantity}

//           <button className='ms-2' onClick={()=>{ const _Card=card.map((item,ind) =>
//           { return index===ind ? {...item,quantity: item.quantity>0 ? item.quantity-1 : 0 } : item 
//         })
//             setCard(_Card)}}>
//             -
//             </button>

//           <Button className='m-1'>Proceed to Buy</Button>
//         </div>
//         </div>
//          </>
//       )
//         }

//         )
//   }

//     <div className='float-right'>Total Amount {
//       card.map(item=>item.prize*item.quantity).reduce((total,value)=>total+value,0 )
     
// }
//       </div>

   

    
//     </>
//   )
// }

// export default AddToCard



 

//       // <Header />
    
