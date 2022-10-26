import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'
import Index, { loader as clientesLoader} from './pages/Index'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true, //Renderiza la primer vista que quiero renderizar
        element: <Index />,
        loader: clientesLoader, //loader
        errorElement: <ErrorPage /> // Error boundary
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction //action 
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
