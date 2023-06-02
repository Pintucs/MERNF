import React from 'react';

const AddToCartIcon = ({counter}) => {
  const counterStyle = {
        position: 'relative',
        top: '-10px',
        padding: '1px 7px',
        borderRadius: '60%',
        backgroundColor: 'red',
        color: 'white',
        fontSize: '12px',
        left: '-12px'
      };
  const iconStyle = {
    width: '30px',
    height: '30px',
    borderRadius:"50%"
  };
  const a=counter
  
  return (
    <>
    <div className="add-to-cart-icon">
      <img src='image/AddToCardIcon.jpg' alt="Add to Cart" style={iconStyle} />
      <span style={counterStyle}>{a}</span>
    </div>
    
  </>
  );
};

export default AddToCartIcon;