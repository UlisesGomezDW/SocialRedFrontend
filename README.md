# Red Social Frontend
Aplicación frontend para Red Social (MERN Stack).

## Iniciando
Para poder probar la aplicación web puedes ingresar al siguiente link [Demo](https://red-social-app.web.app/).

O bien, sí es de tu agrado puedes clonar el repositorio a tu computadora personal mediante:
```bash
git remote https://github.com/UlisesGomezDW/SocialRedFrontend.git
```

Aclaración: Es importante instalar las dependencias que que utilice para la aplicación. Puedes hacerlo a través de:
```bash
npm install
```

Para poder ejecutar la aplicación en modo desarrollo puedes escribir el siguiente comando.
```bash
npm start
```
## Estructura de archivos
Siendo `./public` la carpeta nativa de React
Dentro de `./src`, agrupe los archivos lo más ordenado posible.

```bash
C:.
│   App.js
│   index.js
│   index.scss
│   serviceWorker.js
│
├───components
│   ├───common
│   │   ├───confirm
│   │   │       index.js
│   │   │
│   │   ├───modal
│   │   │       index.js
│   │   │
│   │   └───navbar
│   │           index.js
│   │
│   └───views
│       ├───home
│       │       index.js
│       │
│       └───posts
│               createPost.js
│               listPost.js
│
├───constants
│       index.js
│
├───hooks
│       useForm.js
│
└───utils
    ├───api
    │       category.js
    │       posts.js
    │
    └───upload
            index.js
```

- components: Carpeta en donde guardo los componentes de la aplicación.
- constants: Variables constantes.
- hooks: Hooks personalizados para los componentes.
- utils: Funciones auxiliares para la aplicación.

Además de los archivos:
- App.js: El componente padre.
- index.js: El archivo global de la aplicación que recibe las configuraciones.
- index.scss: Archivo de estilos globales.
- ServiceWorker.js: Herramientas para la configuración de una PWA.

## Entorno de trabajo con React
Para el desarrollo de esta aplicación decidí trabajarlo bajo Functional Components. Pues en mi consideración son muy útiles y reducen algunos fragmentos de código que a la larga puede ser confusos.

Dentro de `./src` hay una carpeta llamada `./components` dentro de este fichero opté por dividirlos en sus categorías correspondientes  `./commom` (Componentes autónomos que cumplen una o más funciones y que a su vez pueden aparecer más de una vez), `./views` (Componentes contenedores y de visualización de una determinada pantalla).

## Consultas a la API:
En la ruta `./src/utils/api/` se encuentran dos archivos para la consulta de la API REST a tráves de su determinado endpoint.
Puedes ocupar sus metodos disponibles para realizar las acciones que necesites:

- `category`:
```bash
import {addCategory, getCategory, getCategories, updateCategory, deleteCategory} from './utils/api/category';
  addCategory(data); // Agrega una categoría (Parámetro requerido)
  getCategories(): //Obtiene todas las categorías
  getCategory(_id): //Obtiene una categoría (Parámetro requerido)
  updateCategory(data, _id); // Modifica una categoría (Parámetros requeridos)
  deleteCategory(_id); //Elimina una categoría (Parámetro requerido)
```
- `posts`:
```bash
import {addPost, getPost, getPosts, updatePost, deletePost} from './utils/api/posts';
  addPost(data, id_category); // Agrega una publicación (Parámetros requeridos)
  getPosts(): //Obtiene todas las publicaciones
  getPost(_id): //Obtiene una publicación (Parámetro requerido)
  updatePost(data, _id); // Modifica una publicación (Parámetros requeridos)
  deletePost(_id); //Elimina una publicación (Parámetro requerido)
```

## Construido con:
- React
- SASS
- Ant Design

## Deployment
La aplicación actualmente está siendo ejecutada bajo el servicio de Firebase y esta disponible en: https://red-social-app.web.app/


