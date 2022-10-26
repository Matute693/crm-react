import { useNavigate, Form, redirect } from 'react-router-dom';
import { deleteClient } from '../data/clientes'

export async function action({ params}) {
  await deleteClient(params.id)
  return redirect('/')
}

function Cliente({ cliente }) {

  const navigate = useNavigate()
  const { nombre, empresa, email, telefono, id } = cliente;
  
  return (


    // first column in the table
    <tr className="border-b">
        <td className='p-5 space-y-2'>
          <p className="text-2xl text-geay-800">{ nombre }</p>
          <p className="text-gray-500">{ empresa }</p>
        </td>

        {/* second column in the table */}
        <td className="p-6">
          <p className="text-gray-600"> 
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            { email }
          </p>
          <p className="text-gray-600"> 
            <span className="text-gray-800 uppercase font-bold">Tel: </span>
            { telefono }
          </p>
        </td>

        {/* // third column in the table */}
        <td className="p-6 flex">
            <button
            type="button"
            className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
            onClick={() => navigate(`/client/${id}/editar`)}
            >
              Editar
            </button>
            <Form
              method='post'
              action={`/clientes/${id}/eliminar`}
              onSubmit={(e) =>{
                if(!confirm('Deseas Eliminar el cliente registrado ?')) {
                  e.preventDefault();
                  return
                }
              }}
            >
              <button
                type="submit"
                className=" ml-3 text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                >
                  Eliminar
              </button>
            </Form>
        </td>
    </tr>
  )
}

export default Cliente