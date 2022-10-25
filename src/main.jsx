import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NuevoCliente from './pages/NuevoCliente'
import Index from './pages/Index'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true, //Renderiza la primer vista que quiero renderizar
        element: <Index />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />
      }
    ]
  },
  {
    path: '/clientes/nuevo',
    element: <h1>Nosotros</h1>
  }
])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={ router }/>
  </React.StrictMode>
)
