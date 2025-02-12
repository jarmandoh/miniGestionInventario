
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

