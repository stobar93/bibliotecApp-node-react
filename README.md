# BibliotecApp (bibliotecApp-node-react)

Hola!

Bienvenido a BibliotecApp. Esta app tiene las siguientes funciones:
1. CRUD (api/UI) de libros y usuarios
2. CRUP (api) de prestamos de libros

## Comenzando

### 1. Configure su base de datos (PostgreSQL):
  La base de datos de BibliotecApp se realizó en PostgreSQL version 13.4
  Para descargar la ultima versión de Postgres, visite el sitio oficial y siga las instrucciones:
  
> https://www.postgresql.org/download/

  Es importante que conserve el usuario y contraseña que asigno a Postgres durante la instalacion
  
  Una vez tenga instalado Postgres en su equipo:
  Debe iniciar sesion en Postgres en su equipo y crear una nueva base de datos
  Para hacerlo con Git bash use los siguientes comandos:
  
   Iniciar sesion:
  > > psql -U postgres
  > Ingrese su contraseña + ENTER
  
   Crear base de datos:
    
  > > CREATE DATABASE nombre ;

   Para asegurarse de que se creo la base de datos, utilice el comando \l para ver el listado de todas las bases de datos que ha creado en su equipo 
  
### 2. Clone el repositorio
  Copiar la direccion HTTPS del repositorio que aparece en la opcion 'Code' en color verde.
 
![image](https://user-images.githubusercontent.com/86356868/144994169-349ec703-71dc-42cd-b4e0-e75f659384b9.png)

  En un nuevo directorio en su equipo, inicie el interprete de comandos (Bash, PowerShell, etc) escriba el siguiente comando y presione ENTER:
> git clone https://github.com/stobar93/bibliotecApp-node-react.git

Abra el repositorio clonado en su editor de codigo preferido

### 3. Configurar variables de entorno
Dentro del repositorio, vaya a la ruta /api y cree un archivo con el nombre: .env
Reemplace los valores de DB_USER (nombre de usuario de Postgres), DB_PASSWORD (contraseña de Postgres) y DB_NAME (nombre de la base de datos que creo recientemente)
Guarde los cambios

### 4. Iniciando la APP

#### Para efectos de realizar pruebas, se creo un mockup de libros en la ruta:

> /api/src/mock

Puede evitar que se carguen estos datos eliminando en el archivo 
> /api/index.js

las siguientes lineas:

``` 
Book.bulkCreate(books)
.then(()=>console.log("Books loaded"))
.catch((e)=>console.log(`There was an error loading Books: ${e.message}`)) 
```

#### Instale las dependencias del proyecto usando el siguiente comando
```
npm install
```
En las rutas dentro del repositorio:

> /api
> /client

Despues de la instalacion, ya puede iniciar la aplicacion

#### Primero inicie el servidor desde la ruta

> /api

usando Git Bash con el siguiente comando:
```
npm start
```
Repita la operacion en la ruta

> /client


## Ya estamos listos para empezar a usar BibliotecApp desde el FRONTEND

### Vista inicial
Seleccione una opcion de la barra superior (Books, Users o Transactions)

![image](https://user-images.githubusercontent.com/86356868/145001561-78a0507c-c871-4125-857d-6083f298cced.png)

#### La estructura de cada apartado es similar. En la parte superior central se encuentran unas pestañas con las opciones disponibles
#### Debajo de las pestañas se puede ver una tabla con la informacion correspondiente.

La tabla permite buscar por cada campo presionando el boton de busqueda al lado del titulo de cada columna

![image](https://user-images.githubusercontent.com/86356868/145002717-2f960ee4-ec84-4a0c-aaf9-122d0e5092d3.png)

En la parte inferior de la tabla se tiene la opcion de paginado

![image](https://user-images.githubusercontent.com/86356868/145002618-cd1a4416-23c6-4922-b80c-d79d10bc5ea8.png)

Al final de cada fila (Solo en Books y Users), encuentra botones para realizar rapidamente un prestamo asociado al libro o usuario de esa fila o tambien puede realizar modificaciones sobre la informacion 

> Opciones de prestamo rapido y editar registro

![image](https://user-images.githubusercontent.com/86356868/145003279-2c8c28db-1ad4-4d9b-bf58-d35c2d6cc19c.png)

> Opciones para guardar cambios, eliminar registro o cancelar edicion sin guardar cambios

![image](https://user-images.githubusercontent.com/86356868/145003317-00769844-2eb2-466e-9ce9-58fe1ca65e4f.png)


### Books

#### Vista principal Books

![image](https://user-images.githubusercontent.com/86356868/145003998-f42c1fc4-2566-45b5-89ef-9029c99a1f49.png)

#### Crear libro nuevo

![image](https://user-images.githubusercontent.com/86356868/145004198-6e43e3ef-58c3-411c-8f3e-664e596bd5fc.png)

### Users

#### Vista principal Users

![image](https://user-images.githubusercontent.com/86356868/145004613-6e4384c4-3740-43ca-807e-853d077e30c4.png)

#### Crear usuario nuevo

![image](https://user-images.githubusercontent.com/86356868/145004684-857377f9-f67a-4214-8b3f-d5651115e009.png)

### Transactions
Aqui se puede ver el registro de los prestamos que se ha realizado. Se registra una transaccion por cada libro prestado en la pestaña "LEND A BOOK"
Esta transaccion queda en estado 'open' hasta cuando el usuario retorne el libro, momento en que se debe actualizar la transaccion a estado 'closed' desde la pestaña "RETURN A BOOK" 

#### Vista principal

![image](https://user-images.githubusercontent.com/86356868/145005263-df54b90a-46cd-496b-aea8-47aeedc3f839.png)

#### Prestar un libro
Se debe registrar el ID del libro a prestar y del usuario que se solicita el libro

![image](https://user-images.githubusercontent.com/86356868/145005342-0e8aecc7-2aa6-4a1a-8ddb-a16b9b5ed7f5.png)

#### Retornar un libro
Se debe registrar el ID del libro retornado y del usuario que lo tenia en prestamo

![image](https://user-images.githubusercontent.com/86356868/145005405-c911427a-5646-418f-b97f-3e2869e150d4.png)

### Manejo de errores
BibliotecApp genera alertas al usuario en caso de exito o si ocurre algun problema con alguna peticion

![image](https://user-images.githubusercontent.com/86356868/145005774-b2fd7133-dd9e-4024-aa51-29733365e36e.png)

![image](https://user-images.githubusercontent.com/86356868/145005879-fa052f29-00c1-4248-a596-175eb49d6038.png)

### Componente Modal para prestamo rapido desde apartado Books o Users
Se abre un componente emergente con uno de los campos diligenciados (Sea bookId o userId) segun el apartado donde se encuentre el usuario y la fila donde haya seleccionado la opcion

![image](https://user-images.githubusercontent.com/86356868/145006181-f267b9a7-ece1-4d7c-b904-5494a86d2509.png)


## Usar BibliotecApp desde el BACKEND

## BOOK - GET
### http://localhost:3001/book
Responde con la lista completa de libros disponibles en la base de datos

![image](https://user-images.githubusercontent.com/86356868/145006818-4034992c-b51f-4c0d-b5cb-93559d00b713.png)

### http://localhost:3001/book?id=1
Permite buscar por id del libro cuando se envia por req.query

![image](https://user-images.githubusercontent.com/86356868/145007126-a427446b-f1a3-4668-968d-cd19c5fe9aa3.png)

## BOOK - POST
### http://localhost:3001/book
Para crear un libro se debe enviar la informacion completa por req.body. Todos los campos son STRING, excepto el año del libro que debe ser INTEGER

![image](https://user-images.githubusercontent.com/86356868/145007688-e5640be4-9105-4109-ac94-9ef31b9e26a3.png)

## BOOK - PUT
### http://localhost:3001/book?id=34
Para modificar un registro de un libro. Se envia el id del libro por req.query y los campos a ser modificados se envian por req.body. Puede ser un solo campo o todos, excepto por el id y los timestamps

![image](https://user-images.githubusercontent.com/86356868/145008514-4ea69b0e-6b89-4395-9532-6226e18ee07a.png)

## BOOK - DELETE
### http://localhost:3001/book?id=34
Para eliminar un libro solamente se debe enviar el request con el id del libro por req.query

![image](https://user-images.githubusercontent.com/86356868/145008862-46574595-516f-4e85-9304-3a07f394d0a6.png)

## USER - GET
### http://localhost:3001/user
### http://localhost:3001/user?id=1234
Para obtener un usuario se envia el id por req.query. Si no se envia el id, retorna todos los usuarios de la base de datos

## USER - POST
### http://localhost:3001/user
Para crear un usuario en la base de datos se debe enviar la informacion por req.body de la siguiente manera:

```
req.body = {
  "id": 1234,
  "firstName": "Sebastian",
  "lastName": "Tobar"
}
```

## USER - PUT
### http://localhost:3001/user?id=1234
Para modificar un usuario se debe enviar el id del usuario por req.query y la informacion a modificar por req.body. Puede ser uno o todos los parametros.
A continuacion un ejemplo de un req.body con todos los posibles atributos a modificar:

```
req.body = {
  "status": "banned", //Otra opcion "active"
  "firstName": "Sebas",
  "lastName": "T"
}
```

## USER - DELETE
### http://localhost:3001/user?id=1234
Para eliminar de la base de datos a un usuario se debe enviar solamente el id del usuario por req.query









