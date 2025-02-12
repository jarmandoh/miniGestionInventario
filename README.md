# MiniGestionInventario

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



# MiniSistema de Gestión de Inventario

Este proyecto es una aplicación web desarrollada con **.NET Core 9**, **PostgreSQL** y **Angular 19**, que permite gestionar el inventario de productos mediante la autenticación de usuarios.

## Características

- **Backend:** .NET Core 9 con autenticación JWT y API RESTful.
- **Base de Datos:** PostgreSQL con una tabla de productos.
- **Frontend:** Angular 19 con Tailwind CSS para una interfaz moderna y responsiva.
- **Funcionalidades:**
  - Inicio de sesión con JWT.
  - Registro de movimientos de productos (entrada/salida).
  - Consulta del inventario.

## Requisitos Previos

Asegúrese de tener instalados los siguientes programas en su sistema:

- [Node.js](https://nodejs.org/) (versión recomendada: 18+)
- [Angular CLI](https://angular.io/cli) (versión recomendada: 19+)
- [.NET Core 9](https://dotnet.microsoft.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Configuración del Backend

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio/backend
   ```
2. **Configurar la Base de Datos:**
   - Crear una base de datos en PostgreSQL.
   - Actualizar el archivo `appsettings.json` con la conexión a PostgreSQL:
     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Host=localhost;Port=5432;Database=inventario_db;Username=postgres;Password=tucontraseña"
     }
     ```
3. **Restaurar dependencias y ejecutar migraciones:**
   ```bash
   dotnet restore
   dotnet ef database update
   ```
4. **Ejecutar el servidor backend:**
   ```bash
   dotnet run
   ```
   El backend correrá en `http://localhost:5000`

## Configuración del Frontend

1. **Ir a la carpeta del frontend:**
   ```bash
   cd ../frontend
   ```
2. **Instalar las dependencias:**
   ```bash
   npm install
   ```
3. **Configurar el archivo `environment.ts` con la URL del backend:**
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:5000'
   };
   ```
4. **Ejecutar el frontend:**
   ```bash
   ng serve
   ```
   La aplicación estará disponible en `http://localhost:4200`

## Uso de la Aplicación

1. Iniciar sesión con las credenciales configuradas en el backend.
2. Registrar movimientos de productos (entrada/salida).
3. Consultar el inventario en la tabla de productos.

## Tecnologías Utilizadas

- **Backend:** .NET Core 9, Entity Framework Core, JWT, PostgreSQL
- **Frontend:** Angular 19, Tailwind CSS, TypeScript

## Autor
Desarrollado por Janier Hernandez.

## Licencia
Este proyecto está bajo la licencia MIT.

