import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Ingredient from "./pages/Ingredient"
import Name from "./pages/Name"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"
import Cocktail from "./pages/Cocktail"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="name" element={<Name />} />
        <Route path="ingredient" element={<Ingredient />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cocktail/:id" element={<Cocktail />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
