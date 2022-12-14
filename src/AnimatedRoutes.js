import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Random from "./pages/Random"
import Name from "./pages/Name"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"
import Cocktail from "./pages/Cocktail"

const AnimatedRoutes = () => {
  const location = useLocation()

  return(
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="name" element={<Name />} />
        <Route path="random" element={<Random />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cocktail/:id" element={<Cocktail />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}

export default AnimatedRoutes;
