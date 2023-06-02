import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const AddToCard = ({ CardData }) => {
  const [card, setCard] = useState([]);
  // console.log("card lenght",card.reduce((sum, item) => sum + item.quantity, 0))

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
      <h1 className='float-center'>
        Total Amount:{' '}
        {card.reduce((total, item) => total + item.prize * item.quantity, 0)}
      </h1>
      {card.map((Carditem, index) => (
        <div
          className='container d-flex justify-content-between h3 p-3 m-3'
          style={{ width: '80%', backgroundColor: '#2C2929', color: 'white' }}
          key={index}
        >
          <div>{Carditem.name}</div>
          <div>Rs. {Carditem.prize * Carditem.quantity}</div>
          <div>
            <Button className='ms-2' onClick={() => handleIncreaseQuantity(index)}>
              +
            </Button>

            {Carditem.quantity}

            <Button className='ms-2 ml-5' onClick={() => handleDecreaseQuantity(index)}>
              -
            </Button>

          </div>
        </div>
      ))}
    </>
  );
};

export default AddToCard;
