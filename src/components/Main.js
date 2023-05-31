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