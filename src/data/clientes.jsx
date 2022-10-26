export async function getClients() {
    // const url = import.meta.env.url
    const url = 'http://localhost:3000/clientes';
    const response = await fetch(import.meta.env.VITE_API_URL); //Accedo a la variable de entorno
    const result = await response.json();
    return result;
}