import React from 'react'
import Header from './Header'
import Card from './Card'
import Imageslide from './Imageslide'

const Main = () => {


    return (
        <>
            <Header />
            <h1 className='text-center'>Discover NEW Arrivals</h1>
             <Card />
             <Imageslide />
        </>

    )
}

export default Main
// import React from 'react';
// import Header from './Header';
// import Card from './Card';
// import Imageslide from './Imageslide';

// const Main = () => {
//   return (
//     <>
//       <Header />
//       <div className="container">
//         <h1 className="text-center mt-4 mb-3">Discover NEW Arrivals</h1>
//         <div className="row">
//           <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
//             <Card />
//           </div>
//         </div>
//         <Imageslide />
//       </div>
//     </>
//   );
// };

// export default Main;
