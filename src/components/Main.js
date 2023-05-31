import React from 'react'
import Header from './Header'
import Card from './Card'
// import Imageslide from './Imageslide'

const Main = () => {
    return (
        <>
       
            <Header />
            <h1 className='text-center'>Discover NEW Arrivals</h1>
            
  {/* <div className="row">
    <div className="col-12 col-lg-6 col-lg-3 mb-4">
      <div className="card">
        
      </div>
  </div>
</div> */}
            <Card />
            {/* <Imageslide /> */}
        </>
    )
}

export default Main