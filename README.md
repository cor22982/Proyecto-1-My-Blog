<p align="center">
  <img src="https://static.eldiario.es/clip/37460793-dad7-4fa6-a300-ae64450ae597_16-9-discover-aspect-ratio_default_0.jpg"  style="object-fit: contain; width: 1000px; height: 400px;"/>
</p>

---
[![Build status: Linux](https://img.shields.io/travis/coryhouse/react-slingshot.svg?style=flat-square)](https://travis-ci.org/coryhouse/react-slingshot)

# Guatepedia
## Descripcion 
Guatepedia es un blog personal que muestra todas las personalidades de internet y de la vida real de la cultura guatemalteca. Presentandolo todo de manera entretenida y con burla hacia algunas de estas personalidades.
Este blog nacio como parte de un post de r/guatemala. Para que se documente todas las personalidades de las que se han llegado hablar en el reditt. Cualquier descripcion es valida en este blog.

## Como empezar  
[Accede al blog por este enlace](https://tiburoncin.lat/22982/Lab6_React/Guatepedia.html)


## Funcionamiento API
### GET 'api.web05.lol/22982/'
- Descripcion: Entras a la pagina principal del api
### GET 'api.web05.lol/22982/posts'
- Descripcion: Obtienes toda la informacion de los posts en formato json
```json
{
      "Pearson": "nombre_persona",
      "Fewdescription": "Breve Descripcion",
      "History": "Historia de la persona",
      "Crucialevents": "Eventos cruciales de la persona",
      "Curiosities": "Curiosidades",
      "AlternativeText": "Un titulo alternativo",
      "AlternativeDescription": "Descripcion del titulo",
      "Textreferences": "referencia usadas",
      "images": "imagen en formato base64"
}
```
### GET 'api.web05.lol/22982/posts/postId'
- Descripcion: Este metodo obtiene un post en especifico
- parametros: postId: id del post a obtener
```json
{
      "Pearson": "nombre_persona",
      "Fewdescription": "Breve Descripcion",
      "History": "Historia de la persona",
      "Crucialevents": "Eventos cruciales de la persona",
      "Curiosities": "Curiosidades",
      "AlternativeText": "Un titulo alternativo",
      "AlternativeDescription": "Descripcion del titulo",
      "Textreferences": "referencia usadas",
      "images": "imagen en formato base64"
}
```

### POST 'api.web05.lol/22982/posts'
- Description: Con este metodo se crea un nuevo post
- body: json de la informacion de la persona
```json
{
      "Pearson": "nombre_persona",
      "Fewdescription": "Breve Descripcion",
      "History": "Historia de la persona",
      "Crucialevents": "Eventos cruciales de la persona",
      "Curiosities": "Curiosidades",
      "AlternativeText": "Un titulo alternativo",
      "AlternativeDescription": "Descripcion del titulo",
      "Textreferences": "referencia usadas",
      "images": "imagen en formato base64"
}
```
### PUT  'api.web05.lol/22982/posts/:postId '
- Descripcion: Con este metodo se modifica un elemento de un post
- parametros: postId: id del post a modificar
- body: json de el dato a modificar
```json
{
      "columna": "Nombre de la columna a modificar",
      "valor": "Valor a modificar"
}
```
### DELETE  'api.web05.lol/22982/posts/:postId '
- Descripcion: Con este metodo se elimina un post
- parametros: postId: id del post a editar
## Respuestas
### 200
Devuelve OK que se realizo el metodo de manera correcta
### 400
Es devuelto cuando se visito un endpoint no existente. O se mandan datos incorrectos en el body del PUT y POST
### 500
Es devuelto si hubo un error de codigo o en el servidor
### 501
Es devuelto si se trate de utilizar un metodo no implementado de http
## Como iniciar el backend
Para poder ejecutar el backend del codigo vea a la carpeta backend de ejecucion. 

- Hacer la instalacion de node modules con npm. Recuerde tener una version no tan vieja de node
```
  npm install
```
- Ejecutar el codigo
```
  npm start
```
- Visitar el sitio
```
http://127.0.0.1:22982/
```
## Como iniciar el fronted.

- Hacer la instalacion de node modules con npm. Recuerde tener una version no tan vieja de node
```
  npm install
```
- Ejecutar el comando de inicializacion del entorno de desarrollo
```
  npm run dev
```
- Visitar el sitio
```
http://127.0.0.1:5173/
```

## Tecnologias
Las tecnologias que se utilizar para desarrollar este blog fueron las siguientes
| **Tecnologia** | **Descripcion** |**Uso**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/) | Framework de javascript para construccion de componentes | Se uso para la creacion del fronted y componentes |
| [Express](https://expressjs.com)| Framework de javascript usado para construccion de enpoints | Se uso para la creacion de los enpoints de la api |
|  [Eslint](https://eslint.org) | Herramienta de linting para codigo javascript | Se uso para dar un formato conciso y detectar errores en el codigo, la plantilla de linting usada fue la de Airbnb |
|  [Vite](https://es.vitejs.dev/guide/) | Herramienta de compilacion y de desarrollo web | Se uso para iniciar un proyecto y emular un servidor local donde corre el codigo React |
|  [Postgres](https://www.postgresql.org) | Gestor de base de datos relacional | se uso como base de datos del blog |
|  [Postgresjs](https://www.npmjs.com/package/pg) | Libreria para conectar postgres con javascript | Se uso para poder conectar la base de datos con el API |
|  [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | Libreria para crear tokens | Se uso para crear tokens de autentificacion |
|  [AWS](https://aws.amazon.com) | Servicio de Amazon de hostin y mas | Se uso para crear un servidor y alojar el api de la web |
|  [Yup](https://www.npmjs.com/package/yup) | Libreria para evaluacion de formularios | Se uso para evaluar los inputs de los formularios. |

## Preguntas
[Ve aqui para ver las preguntas y respuestas](./docs/Preguntas.md) 

