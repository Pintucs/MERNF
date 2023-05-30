import React from 'react';

const AddToCartIcon = () => {
    const counterStyle = {
        position: 'relative',
        top: '-40px',
        padding: '1px 7px',
        borderRadius: '60%',
        backgroundColor: 'red',
        color: 'white',
        fontSize: '12px',
        left: '15px'
      };
  const iconStyle = {
    width: '30px',
    height: '30px',
    borderRadius:"50%"
    // Add other custom styles as needed
  };
  const a=5
  
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



// import React from 'react';
// import "../components/AddToCardIcon.css"
// const AddToCardIcon = () => {
//   return (
//     <div className="card-icon">
//       <div className="card-icon-shape">
//         <span className="card-icon-text">CARD ICON</span>
//       </div>
//     </div>
//   );
// };

// export default AddToCardIcon;


// import React from 'react'
// // import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// // import { useParams } from 'react-router-dom'

// // import { useParams} from 'react-router-dom';

// const AddToCardIcon = () => {
//     // const params=useParams()
//     // const auth = localStorage.getItem(`${params.id}`)
//     const auth = localStorage.getItem('count');
//     const counter =
//     {
//         position: "relative", top: "-35px", padding: " 1px 6px", borderRadius: "50%",
//         backgroundColor: "red", color: "white", fontSize: "12px", left: "15px"
//     }
//     return (
//         <>
//             {/* <AddShoppingCartIcon /> */}
//            { auth?<span style={counter}>{JSON.parse(auth).count}</span>:
//            <span style={counter}></span>
// }
//         </>

//     )
// }

// export default AddToCardIcon
