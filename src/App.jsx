import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Wishlist from './pages/Wishlist/Wishlist'

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path="/shop" element={<Shop />} />

         <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

      </Routes>             

    </div>
  )
}

export default App