# Proyecto incidencias con NODE, EXPRESS, y MongoDB

Este proyecto da solución a un sistema para reportar incidencias de defectos o reportes de equipos registrados en CampusLands.



## Tabla de contenido:

- [Instrucciones de instalación](#instrucciones-para-la-instalación-del-proyecto)
- [Requerimientos del proyecto](#requerimientos)
- [Solución: Endpoints](#endpoints) 
    - [Uso del proyecto](#pasos-para-aplicación-y-testeo-de-proyecto)
    - [CRUD admin](#crud-del-proyecto)
- [Tecnologias](#tecnologías)
- [Dependencias de npm](#dependencias-utilizadas)

## Instrucciones para la instalación del proyecto:

Para la correcta instalación del proyecto siga las siguientes instrucciones: 

1. Clone el repositorio del proyecto y abra el archivo del proyecto en su editor de código. (Recomdación: utilizar Visual studio code)
2. Una vez lo tenga en forma local, abra una terminal y acceda a la ruta ./backend, de la siguiente forma: 
```bash
    cd backend
``` 
3. Una vez la terminal se encuentre en la ruta backend, implemente las dependencias que están en el package.json usando el siguiente comando:
```bash
    npm install
``` 
De esta forma verá que la carpeta "*node_modules*" y el archivo "*package-lock.json*" se crean después de contados segundos. 

4.  Para el uso de la base de datos:
* (opcional)  En este caso de que desee manejar la base de datos de manera local.  
    * Dirijase a la ruta ./backend/db/scripts, ahí encontrará el archivo llamado schema.mongodb
    * Para ejecutar este archivo instale la extensión de visual studio code "**MongoDB**". Una vez instalada la extensión tiene que realizar todo el proceso de creación y conexión con una cuenta MongoAtlas. Para más información referente a este tema recomendamos leer la documentación oficial
* Para la facilidad del evaluador las variables de entorno se dejaron especificadas en el archivo .env.example tal y como están en el .env. Por lo que en caso de querer utilizar el proyecto de forma correcta, unicamente es requerido renombrar el archivo. 

5. Cuando ya tenga la base de datos localmente se dirigirá nuevamente a la terminal que había abierto anteriormente y levantará el servidor de manera local usando el siguiente comando: 
```bash
    npm run dev
```




## Requerimientos

Generar el crud para la problematica requerida

## EndPoints 

### Pasos para aplicación y testeo de proyecto

Para la creación del JWT para el inicio de proyecto y acceso a las versiones del proyecto es importante explicar que se realizó 1 versión del proyecto únicamente como práctica y conocimiento de la libreria para versiones y permisos para los respectivos endPoints y métodos del proyecto dependiendo del rol del usuario. Por esto se crearon 2 roles en el proyecto:


#### Generación del JWT

Para crear el JWT de acceso dirijase a la extensión de testeo de preferencia mientras el servidor está activo e ingrese el endPoint:

```http
POST /login
```

Y en el cuerpo de la solicitud debe ingresar el siguiente JSON:
```JSON
{
  "nombre": "",
  "clave": ""
}
```
En este caso y por cuestiones de facilitar el trabajo del evaluador se otrogan ejemplos de los usuarios y claves como están creados en la base de datos (aunque también es posible crear un nuevo usuario, este por defecto tomará los permisos del usuario Trainer).
* Usuario **JEFE DE TRAINERS**:  "nombre": "Johlver", "clave": "Johlver"
* Usuario **TRAINER**:  "nombre": "Miguel Castro", "clave": "miguel"


Una vez creado el JWT para la session deberá copiarlo e ingresalo en los encabezados.
En los headers ingrese en "Autorization" : **Bearer *tokenGenerado***

Es importante que para el proceso de uso de los siguiente endPoints se encuentre el siguiente header en la petición:  **Accept-Version** y seguido de esto la versión que se desea manejar, en este caso tienen acceso todos los trainer a la versión 1.0.0 y 3.5.0 aunque la 3.5.0 no cuenta con ningun redireccionamiento a alguna función en específico por lo que toma por defecto la 1.0.0.



Ahora para el uso de los endPoints del proyecto hay que tener en cuenta lo siguiente:

* **JEFE DE TRAINERS**: Métodos permitidos [ GET, POST, PUT, DELETE ], versiones disponibles (1.0.0, 3.5.0). Acceso completo al CRUD.
* **TRAINER**: Métodos permitidos [ GET, POST ], versiones disponibles (1.0.0, 3.5.0). Acceso al métodos GET y POST.

### CRUD del Proyecto

#### Colección Trainer

Para todos los métodos GET, PUT, POST, DELETE se usa el siguiente endPoint
```
  /api/use/trainer
```
En caso de ser un get by id, un put o delete el id que se desea modificar u obtener se envía en los parámetros de la solicitud. Como ?id="valor_int".

Para el put y post el cuerpo de la solicitud es el siguiente: 

```JSON
{
        "nombre": "Miguel Castro",
        "clave": "miguel",
        "email": "MiguelCas@gmail.com",
        "email_trabajo": "MiguelCampus@outlook.com",
        "telefono": "+57 321 548 6549",
        "telefono_fijo": "+57 321 548 6549",
        "contacto_empresa": "+57 321 548 6549",
        "telefono_empresarial": "+57 321 548 6549",
        "cuenta_bancaria": 32434324334,
        "rol": "Trainer",
}
```
Los datos "email_trabajo", "telefono_fijo", "contacto_empresa", "telefono_empresarial", "cuenta_bancaria" son opcionales, se pueden enviar dependiendo de la circunstancia. Los permisos del trainer son puestos por defecto. Si se desea modificar tiene que hacerse directamente en la base de datos.

#### colección Incidencias

Para todos los métodos GET, PUT, POST, DELETE se usa el siguiente endPoint
```
    api/use/incidencia
```
En caso de ser un get by id, un put o delete el id que se desea modificar u obtener se envía en los parámetros de la solicitud. Como ?id="valor_int".

Para el put y post el cuerpo de la solicitud es el siguiente: 
```JSON
{
        "trainer": 1,
        "categoria_incidencia": "hardware",
        "tipo": "moderada",
        "fecha": "2022-06-03",
        "area": "Artemis",
        "equipo": "pantalla",
        "color": "negro",
        "codigo": "Ads65752",
        "descripcion_incidencia": "Aparecen lineas moradas en la pantalla"
}
```
El parámetro "color" es opcional.
## Tecnologías

 ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Dependencias utilizadas

Para el presente proyecto se van a utilizar las siguientes dependencias en sus respectivas versiones:

  ```json
        "dev": "nodemon --quiet app.js"
        "class-transformer": "0.5.1",
        "class-validator": "0.14.0",
        "dotenv": "16.3.1",
        "express": "4.18.2",
        "express-rate-limit": "6.8.1",
        "express-routes-versioning": "1.0.1",
        "jose": "4.14.4",
        "mongodb": "5.7.0",
        "nodemon": "3.0.1",
        "passport": "0.6.0",
        "passport-http-bearer": "1.0.1",
        "reflect-metadata": "0.1.13",
        "typescript": "5.1.6"
  ```


  **Autor**: David Rueda // campuslands