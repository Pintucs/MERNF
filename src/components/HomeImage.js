import React from 'react'
import a from "../image/a.jpg"
const HomeImage = () => {

    return (
        <>
            <div>
                <h1 className='text-center' style={{padding:"20px"}}>Welcome</h1>
                <img src={a} alt="a" className="img-fluid" style={{padding:"20px"}}/>
            </div>

        </>
    )
}

export default HomeImage




