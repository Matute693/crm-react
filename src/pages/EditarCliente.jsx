// import { useLoaderData } from 'react-router-dom';
import { editClients } from '../data/clientes';

 export function loader({ params }) {
    const client = editClients(params)
    console.log(client)
    // return client;
  }
function EditarCliente() {

    // const client = useLoaderData()
  return (
    <div></div>
  )
}

export default EditarCliente