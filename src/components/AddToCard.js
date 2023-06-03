import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';
import Header from './Header';

const AddToCard = () => {
  const [card, setCard] = useState([]);
  const navigate = useNavigate();  

   const auth=localStorage.getItem("CardData")
  useEffect(() => {
    if (auth) {
      setCard(JSON.parse(auth));
    }
  }, [auth]);


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
  const ProcessItem = () => {
    if (card.length === 0) {
      alert("Please add items to your cart");
      navigate('/');
    } else {
      alert("Your cart has been processed. Products will be delivered after 80000000 years later.");
      navigate('/');
    }
  };
  return (
    <>
    <Header />
      <div className='container d-flex justify-content-between h3 p-3 m-3' style={{width:"40%"}}>
      <div>
        Total Amount:{' '}
        {card.reduce((total, item) => total + item.prize * item.quantity, 0)}
      </div>
      <div>
        <Link to="/">
      <Button onClick={ProcessItem}>Process To Buy</Button>
      </Link>
      </div>
      </div>
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
