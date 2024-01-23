import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Favorites from './components/Favorites.jsx'
import OrderFrom from './components/OrderForm.jsx'
import Contact from "./components/Contact.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="shop" element={<Shop/>} />
      <Route path="favorites" element={<Favorites/>} />
      <Route path="Orderform" element={<OrderFrom/>} />
      <Route path="contact" element={<Contact/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
