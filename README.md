# My Chemical Playbook

API educativa para consultar experimentos de química, sustancias químicas, instrumentos y pasos de realización.

## Tecnologías

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens
- bcrypt
- Vitest

## Funcionalidades

- Registro e inicio de sesión de usuarios.
- Autenticación mediante JWT.
- Gestión de roles `user` y `admin`.
- Consulta de experimentos.
- Gestión de experimentos para administradores.
- Protección de contraseñas mediante hash.
- Conexión y persistencia con MongoDB.

## Requisitos

- Node.js 18 o superior.
- npm o yarn.
- MongoDB local o MongoDB Atlas.
- Git.

## Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd my-chemical-playbook
npm install
```

## Configuración

Crea un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/my-chemical-playbook
JWT_SECRET=replace_with_a_secure_secret
JWT_EXPIRES_IN=1d
```

No subas el archivo `.env` ni claves reales al repositorio.

## Ejecución

```bash
npm run dev
```


La API estará disponible en `http://localhost:3000`.

## Scripts disponibles

```bash
npm run dev       # Ejecución en modo desarrollo
npm start         # Ejecución en producción
npm test          # Ejecuta las pruebas
```

## Arquitectura

El proyecto separa la aplicación en distintas responsabilidades:

```text
src/
├── routes/
├── controllers/
├── services/
├── models/
├── middlewares/
└── index.js
```

- **Routes:** definen los endpoints HTTP.
- **Controllers:** procesan las solicitudes y respuestas.
- **Services:** contienen la lógica de negocio.
- **Models:** representan y validan los datos con Mongoose.
- **Middlewares:** gestionan autenticación, autorización y errores.

## Modelo de datos

### Usuario

- `_id`
- `username`
- `email`
- `password`
- `role`

### Experimento

- `_id`
- `title`
- `description`
- `instructions`
- `chemicalProducts`
- `instruments`

### Producto químico

- `_id`
- `name`
- `formula`
- `cas`
- `ce`
- `quantity`

### Instrumento

- `_id`
- `name`
- `quantity`


Los productos químicos e instrumentos se embeben dentro del experimento porque forman parte directa de su realización.

## Endpoints principales

| Método | Endpoint | Acceso | Descripción |
|---|---|---|---|
| `POST` | `/auth/register` | Público | Registra un usuario |
| `POST` | `/auth/login` | Público | Inicia sesión y devuelve un JWT |
| `POST` | `/auth/logut` | Privado | Finaliza la sesión |
| `GET` | `/experiment` | Público | Lista experimentos |
| `GET` | `/experiment/:id` | Público | Obtiene un experimento |
| `POST` | `/experiment` | Privado | Crea un experimento |
| `PATCH` | `/experiment/:id` | Admin | Actualiza un experimento |
| `DELETE` | `/experiment/:id` | Admin | Elimina un experimento |
| `POST` | `/experiment/:id/chemicalProduct` | Privado | Crea un producto químico en un experimento |
| `DELETE` | `/experiment/:id/chemicalProduct/:cProductId` | Admin | Elimina un producto químico de un experimento |
| `POST` | `/experiment/:id/instrument` | Privado | Crea un instrumento en un experimento |
| `DELETE` | `/experiment/:id/instrument/:instrumentId` | Admin | Elimina un instrumento de un experimento |

Las rutas exactas pueden variar según la implementación final.

## Autenticación

Las rutas protegidas requieren un token JWT en la cabecera HTTP:

```http
Authorization: Bearer <token>
```

El rol del usuario determina si puede acceder a operaciones administrativas.

## Pruebas

La aplicación debería validar al menos:

- Registro e inicio de sesión.
- Contraseñas inválidas.
- Tokens caducados o incorrectos.
- Acceso denegado sin permisos.
- CRUD de experimentos.
- Validación de esquemas.
- Identificadores inválidos.
- Búsquedas válidas y maliciosas.

Ejecuta las pruebas con:

```bash
npm test
```

## Seguridad

- Las contraseñas no se almacenan en texto plano.
- Las rutas administrativas requieren autenticación y autorización.
- Las variables sensibles se configuran mediante `.env`.
- CORS debe limitarse a los orígenes autorizados.
- Los datos recibidos deben validarse antes de usarse.
- Los parámetros de búsqueda no deben introducirse directamente como operadores MongoDB.

## Documentación técnica

La memoria técnica del proyecto está disponible en:

```text
docs/MEMORIA.md
```

## Mejoras futuras

- Paginación y filtros avanzados.
- Documentación interactiva con Swagger.
- Índices de búsqueda.
- Refresco de tokens.
- Límites de solicitudes.
- Pruebas de integración completas.
- CI/CD y despliegue automatizado.
- Clasificación de seguridad para experimentos químicos.

## Licencia

MIT License