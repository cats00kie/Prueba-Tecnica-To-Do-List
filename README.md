# Prueba Técnica - To-Do List
Pequeño sistema de gestión de tareas. Realizado como prueba técnica.
## Instalación
### Backend
Tener instalado **Docker** y **Node.js**.  
Si se tiene **MySQL** activo en el puerto **3306** en localhost, se deberá desactivar el servicio.
Instalar las dependencias utilizando:
```bash
npm install
```
Copiar el archivo `.env.example` y crear un archivo llamado `.env`:
```bash
cp .env.example .env
```
Generar una clave JWT y colocarla en el `.env`  
(En Windows):
```powershell
[System.Guid]::NewGuid().ToString("N")
```
Crear el contenedor de Docker utilizando:
```bash
docker-compose up -d
```
Subir y generar la base de datos utilizando:
```bash
npx prisma db push
```
Ejecutar el programa usando:
```bash
npm start
```
---
### Frontend
Instalar dependencias con:
```bash
npm install
```
o:
```bash
npm i
```
Ejecutar usando:
```bash
npm run dev
```
El sistema se ejecuta en:  
**http://localhost:5173/**
