# My Chemical Playbook - Memoria Técnica

*My Chemical Playbook* es un sitio donde se recopilan y se exponen experimentos de química con motivo lúdico - educativo.

## Índice

1.  **Descripción de la API:** qué problema resuelve y qué entidades tiene.
2.  **Por qué MongoDB:** por qué encaja (o no) con tus datos y qué habría cambiado de haberlo hecho con SQL.
3.  **Modelo de datos:** tus esquemas y qué datos has **embebido** y cuáles has **referenciado**, con el motivo de cada decisión.
4.  **Arquitectura:** estructura de carpetas y qué hace cada capa (rutas, controladores, servicios, modelos, middlewares).
5.  **Seguridad:** cómo funcionan la autenticación y los roles.
6.  **Endpoints:** listado de rutas con su método, quién puede usarlas y qué devuelven.
7.  **Testing:** qué has probado y por qué.
8.  **Retos y soluciones:** problemas que te has encontrado y cómo los resolviste.
9.  **Mejoras futuras:** qué añadirías o cambiarías con más tiempo.

---

## 1 Descripción de la API

### 1.1 Qué problema resuelve

Ofrece una colección de típicos experimentos de química con propósito de entretener y educar.
(Esbozar detalles).

### 1.2 Usuarios y roles

| Rol | Quién | Qué puede hacer |
|---|---|---|
| Anónimo | Cualquiera, sin cuenta | ? |
| `user` | Usuarios registrados | Buscar y visualizar experimentos |
| `admin` | El profesor | Todo lo anterior, más administrar los contenidos del sitio |

### 1.3 Entidades

| Entidad | Tipo | Descripción |
|---|---|---|
| `User` | Colección | Una persona registrada: credenciales y rol |
| `Experiment` | Colección | Un experimento con todos sus detalles, nombre ,instrucciones, material... |
| `ChemicalProduct` | Subdocumento **embebido** en `Experiment` | Sustancia química que interviene el el experimento con sus datos. |
| `Instrument` | Subdocumento **embebido** en `Experiment` | Instrumento de laboratorio necesario para el experimento. |

## 2 Por qué MongoDB

Los experimentos se agrupan por documentos detro de los cuales se desglosan los productos químicos y el instrumental necesario para su realización.

En SQL habría que construir un mínimo de 6 tablas: Usuario, Producto Químico, Instrumento, Experimento más las interrrelacionales de Expermimento con Producto Químico e Instrumento respectívamente.



## 3 Modelo de datos



## 4 Arquitectura



## 5 Seguridad

### 5.1. Registro
### 5.2. Login
### 5.3. El token (JWT)
### 5.4. Middleware `authenticate`
### 5.5. Middleware `requireRole`
### 5.6. Permisos sobre recursos
### 5.7. CORS
### 5.8. Búsqueda segura


## 6 Endpoints



## 7 Testing



## 8 Retos y soluciones



## 9 Mejoras futuras


