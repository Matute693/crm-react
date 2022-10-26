import { useNavigate, Form, useActionData } from 'react-router-dom';
import Error from '../components/Error';
import Formulario from '../components/Formulario';

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get('email');

  // Validations
  const errores = []
   if(Object.values(datos).includes('')) {
      errores.push('Todos los campos son obligatorios')
   }
   
   let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
   if(!regex.test(email)) {
     errores.push('El email no es valido')
   }

   // return de errores
   if(Object.keys(errores).length) {
     return errores;
    }
}



function NuevoCliente() {
  const errors = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevos clientes</h1>
      <p className="mt-3"> Llena todos los campos para registrar un nuveo cliente.</p>

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
          method='post'
          noValidate
          >
          <Formulario />
          
          <input 
            type="submit"
            className='mt-5 hover:pointer hover:cursor-pointer w-full bg-blue-800 p-3 font-bold text-white text-lg'
            value='Registrar cliente' 
          />
          
        </Form>

      </div>
    
    </>
  )
}

export default NuevoCliente