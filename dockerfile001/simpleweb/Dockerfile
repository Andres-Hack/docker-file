# Indicamos la imagen correcta para el servidor node
FROM node:8.12.0-alpine

# El directorio de trabajo del contenedor
WORKDIR /usr/app

# Copeamos los archivos "DE" a "DONDE" 
COPY ./package.json ./

# Insatalamos los paquetes necesarios
RUN npm install

COPY ./ ./

# Correr un comando dentro del contenedor
CMD ["npm", "start"]
