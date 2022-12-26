# CRM - React.js

Instalar los modulos de node
- `npm i`

- This script runs the application on the client side (frontend) and raises an instance of our REST API.
- Use version of node 14
- `npm run start:json`


Description

Proyecto creado con React version 18, utilicé el framework Vite y react router dom para el sistema de rutas, integración con API REST a traves de JSON-SERVER para poder mostrar los resultados en pantalla a traves de solicitudes HTTP con fetch en javascript. Realize el control de Error Boundaries provenientes de React. Utilize expresiones regulares para validar email. Creacion de CRUD para poder insertar, actualizar, eliminar y agregar nuevos clientes a nuestra API REST local.

- Este proyecto es version Desktop no utilize media queries ni adaptaciones CSS para dispositivos mobiles

- loader :
- action : 

- Error Boundaries: son componentes de React que detectan errores de JavaScript en cualquier lugar de su árbol de componentes secundarios, registran esos errores y muestran una interfaz de usuario alternativa en lugar del árbol de componentes que se bloqueó.

hooks utiizados
- loader -  useLoaderData
- action -  useActionData
- error boundary -  useRouteError
- location - use
- navigate - useNavigate

otros metodos usados de React
- navigate (redireccion de pagina)
- Link ( utilize para realizar la navegacion dentro del aside HTML).
- redirect ( redireccion cuando utilizo action o loader)
