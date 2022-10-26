export async function getClients() {
    // const url = import.meta.env.url
    const response = await fetch(import.meta.env.VITE_API_URL); //Accedo a la variable de entorno
    const result = await response.json();
    return result;
}

export async function editClients(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const result = await response.json();
    return result;
}

export async function addClient(datos) {
    //intenta hacer la accion del try y en caso de que haya un error en cualquier lugar se ejecuta el catch
    try {
        const resp = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await resp.json();
    } catch(error) {
        console.log(error)
    }
}

export async function updateClient(id, datos) {
    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        await resp.json()
    } catch( error ) {
        console.log(error)
    } 
}

export async function deleteClient( id ) {
    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await resp.json()
    } catch( error ) {
        console.log( error )
    }
}