import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contect from './components/Contect'
import Card from './components/Card'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'
import Signup from './components/Signup'
import Forget from './components/Forget'
import CardDetails from './components/CardDetails'
import Private from './components/Private'
import AddProduct from './components/AddProduct'
import AddToCardIcon from './components/AddToCardIcon'
import AddToCard from './components/AddToCard'
import UpdateProduct from './components/UpdateProduct'

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/header" element={<Header />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forget" element={<Forget />} />


                <Route element={<Private />}>
                    <Route path="/addtocardicon" element={<AddToCardIcon />} />
                    <Route path="/" element={<Main />} />
                    <Route path="/addtocard/:id" element={<AddToCard />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/carddetails" element={<CardDetails />} />
                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route path="/updateproduct/:id" element={<UpdateProduct />} />
                    <Route path="/contect" element={<Contect />} />
                </Route>
            </Routes>
        </>
    )
}
export default App