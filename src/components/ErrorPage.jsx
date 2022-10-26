import { useRouteError, useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate();
  const error = useRouteError()
  console.log(error.message)
    return ( 
    <div className="space-y-8">
        <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">CRM - Clientes</h1>

        <p className='text-center bg-orange-300 p-2'>Hubo un error</p>
        <p className='text-center text-red-800'>{ error.message }</p>
        <button 
            onClick={() => navigate(-1)}
            className='bg-blue-500 text-white p-2 rounded'
            >Volver al inicio</button>
    </div>
  )
}

export default ErrorPage