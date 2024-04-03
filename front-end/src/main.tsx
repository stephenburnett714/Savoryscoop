import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Cart from './pages/Cart.tsx'
import Contact from './pages/Contact.tsx'
import EditCart from './pages/EditCart.tsx'
import PreviousOrders from './pages/PreviousOrders.tsx'
import PreviosOrderSingle from './pages/PreviosOrderSingle.tsx'
import Story from './pages/Story.tsx'
import Values from './pages/Values.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/edit-cart',
        element: <EditCart/>
      },
      {
        path: '/story',
        element: <Story/>
      },
      {
        path: '/previous-orders/:orderSlug',
        element: <PreviousOrders/>
      },
      {
        path: '/orders/:orderSlug',
        element: <PreviosOrderSingle/>
      },
      {
        path: '/values',
        element: <Values/>
      },
      
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
