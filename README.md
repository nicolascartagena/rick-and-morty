# Rick And Morty

Proyecto desarrollador en React, se utilizo los recursos de la página https://rickandmortyapi.com/, se encuentra con su archivo de docker.

## Deploy
Para descargar el proyecto debe realizar un:
```
git clone https://github.com/nicolascartagena/rick-and-morty.git
```
Dentro del proyecto tiene dos opciones para hacer el deploy de la app.
La primera es ejecutando desde la linea de comandos dentro de la carpeta de la app:
```
npm start
```
O ejecutando el siguiente comando desde dentro de la carpeta de la app:
```
docker build -t rick-and-morty:dev .
docker run -d -p 3000:3000 rick-and-morty:dev
```
