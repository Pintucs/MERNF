import React from 'react'
import Card from './Card'
import { Button } from 'react-bootstrap'
import Header from './Header'

const CardDetails = () => {

    return (
        <>
        <Header />
                <div className='row'>
                    <div className='col-2'><Card />
                    <Button>Add to card</Button>
                    </div>
                    <diV className='col-2'> fbb </diV>
                </div>
        </>

    )
}

export default CardDetails