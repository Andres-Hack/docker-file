# Usamos una imagen que tubieramos en nuestra maquina
FROM alpine

# Listamos lo que hay en el servidor de l contenedor
RUN apk add --update redis
RUN apk add --update gcc

# corremos el comando que queremos ejecutar dentro de nuestro contenedor
CMD ["redis-server"]
