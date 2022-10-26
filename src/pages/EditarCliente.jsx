import { useLoaderData, Form, useNavigate, useActionData, redirect } from 'react-router-dom';
import { editClients, updateClient } from '../data/clientes';
import Formulario from '../components/Formulario';
import Error from '../components/Error';

 export async function loader({ params }) {
    const client = await editClients(params.id)
    if(Object.values(client).length === 0) {
      throw new Response('', {
        status: 404,
        statusText: 'No hay resultados'
      })
    }
    return client
  }
  
  export async function action({ request, params }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const email = formData.get('email');

    //validations
    const errors = [];
    if(Object.values(datos).includes('')) {
      errors.push('El email no es valido')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(email)) {
      errores.push('El email no es valido')
    }
 

    // return de errors
    if(Object.keys(errors).length) {
      return errors;
    }
    
    // Actualizar cliente
    await updateClient(params.id, datos)

    return redirect('/')
  }

function EditarCliente() {
    const navigate = useNavigate();
    const cliente = useLoaderData()
    const errors = useActionData();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar clientes</h1>
      <p className="mt-3">A continuacion puedes actualizar o editar el cliente.</p>

      <div className="flex justify-end">
        <button 
          onClick={() => navigate(-1)} 
          className="bg-blue-800 text-white py-1 px-3 font-bold uppercase">
            Volver
        </button>
      </div>

      <div className="bg-white mt-10 shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        { errors?.length && errors.map( (error, i) => <Error key={i}> { error }</Error> )}
        <Form
          method='put'
          noValidate
          >
          <Formulario cliente={cliente} />
          
          <input 
            type="submit"
            className='mt-5 hover:pointer hover:cursor-pointer w-full bg-blue-800 p-3 font-bold text-white text-lg'
            value='Editar cliente' 
          />
          
        </Form>

      </div>
    
    </>
  )
}

export default EditarCliente