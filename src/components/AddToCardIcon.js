import React from 'react'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { useParams } from 'react-router-dom'

// import { useParams} from 'react-router-dom';

const AddToCardIcon = () => {
    // const params=useParams()
    // const auth = localStorage.getItem(`${params.id}`)
    const auth = localStorage.getItem('count');
    const counter =
    {
        position: "relative", top: "-35px", padding: " 1px 6px", borderRadius: "50%",
        backgroundColor: "red", color: "white", fontSize: "12px", left: "15px"
    }
    return (
        <>
            {/* <AddShoppingCartIcon /> */}
           { auth?<span style={counter}>{JSON.parse(auth).count}</span>:
           <span style={counter}></span>
}
        </>

    )
}

export default AddToCardIcon