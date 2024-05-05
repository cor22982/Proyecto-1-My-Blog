# Preguntas
[Puedo publicar algo?](#Puedo-publicar-algo?)

[Como es la estructura del folder?](#Como-es-la-estructura-del-folder?)

[Que hace cada script?](#Que-hace-cada-script?)
---


## Puedo publicar algo?
Si puedes solo ve hablame por privado a mi reddit en [u/donmatthiuz](https://www.reddit.com/user/donmatthiuz/) 

Te dare informacion de como ingresar al blog.

## Como es la estructura del folder?
### Backend
```bash
├── documentation.yaml
├── ecosystem.config.cjs
├── package-lock.json
├── package.json
├── schema.sql
└── src
    ├── conn.js
    ├── db.js
    ├── jwt.js
    └── main.js

```

### Fronted
```bash
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── Admin
│   │   │   ├── Creacion.css
│   │   │   ├── Creacion.jsx
│   │   │   ├── Editar.css
│   │   │   ├── Editar.jsx
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── Admin
│   │   ├── Creacion.css
│   │   ├── Creacion.jsx
│   │   ├── Editar.css
│   │   ├── Editar.jsx
│   │   ├── Inicio.jsx
│   │   ├── Nav_Admin.css
│   │   ├── Nav_Admin.jsx
│   │   ├── PantallaAdmin.css
│   │   └── PantallaAdmin.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── Components
│   │   ├── Boton.css
│   │   ├── Boton.jsx
│   │   ├── DragyDrop.css
│   │   ├── DragyDrop.jsx
│   │   ├── EditableText.css
│   │   ├── EditableText.jsx
│   │   ├── MenuButton.css
│   │   ├── MenuButton.jsx
│   │   ├── Tarjeta.css
│   │   ├── Tarjeta.jsx
│   │   ├── TextInput.css
│   │   ├── TextInput.jsx
│   │   ├── TextInputPost.css
│   │   └── TextInputPost.jsx
│   ├── Indice_Nav.jsx
│   ├── Login
│   │   ├── Login.css
│   │   └── Login.jsx
│   ├── UsuarioNormal
│   │   ├── Descripcion.css
│   │   ├── Descripcion.jsx
│   │   ├── NavigationUsuario.jsx
│   │   ├── PantallaUsuario.css
│   │   ├── PantallaUsuario.jsx
│   │   └── Posts.jsx
│   ├── assets
│   │   ├── gratis-png-bandera-de-guatemala-computadora-iconos-icono-diseno-educacion-en-el-extranjero-removebg-.ico
│   │   ├── gratis-png-bandera-de-guatemala-computadora-iconos-icono-diseno-educacion-en-el-extranjero-removebg-.ico:Zone.Identifier
│   │   └── react.svg
│   ├── hooks
│   │   ├── useApi.jsx
│   │   ├── useForm.jsx
│   │   ├── useNavigate.jsx
│   │   └── useToken.jsx
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

## Que hace cada script?
### Backend
|Script| Descripcion |
|----------|-------|
| npm run start| Inicia el programa y ejecuta lo que este en main.js |
| npm run lint| Ejecuta eslint y verifica los errores o alertas en todos los js |
### Fronted
|Script| Descripcion |
|----------|-------|
| npm run dev| Crea un servidor para correr el codigo React |
| npm run lint| Ejecuta eslint y verifica los errores o alertas en todos los jsx |
| npm run build| Compila la app creada en React |
| npm run preview| Hace una vista previa de la app final |