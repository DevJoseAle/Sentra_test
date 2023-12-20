# Instrucciones para el Uso de la API

## 1. Descarga del Repositorio
Clone el repositorio desde GitHub en tu máquina local:

git clone https://github.com/DevJoseAle/Sentra_test/

## 2. Instalación de Módulos de Node
Instala las dependencias del proyecto:
npm install

## 3. Ejecución del Servidor con Nodemon
Inicia el servidor utilizando Nodemon para detectar cambios en el código:
npm run dev

## 4. Variables de Entorno y Puerto
Para efectos de este test, las variables de entorno necesarias ya están configuradas y son publicas el servidor estará disponible en el puerto 3000.

## 5. Datos en la Carpeta "data"
La carpeta "data" contiene archivos JSON con información de usuarios y países.

## 6. Realizar Login
Para iniciar sesión desde Postman, realiza una solicitud POST a localhost:3000/api/login. Asegúrate de tener configurado el localhost en el puerto 3000.

## 7. Obtener Token (JWT)
Es necesario realizar el login primero para obtener un token JWT.

## 8. Consultar Países
Para consultar información sobre países, realiza una solicitud GET a localhost:3000/api/countries. Asegúrate de incluir en los headers un campo "Authorization" con el token obtenido en el paso anterior.

## 9. Búsqueda por Nombre y Población
Para buscar por nombre, agrega el query name seguido del nombre del país deseado.
Para buscar por población, usa el query population seguido de un número de población.
Puedes combinar ambas búsquedas al mismo tiempo. Por ejemplo:

## 10. Prueba de Consumo de la API: localhost:3000/api/countries?name=Argentina&population=10000000

¡Listo! Ahora puedes explorar y utilizar la API según tus necesidades. ¡Disfruta de tu experiencia! 🚀

