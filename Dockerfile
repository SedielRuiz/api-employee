# Usa una imagen de Node.js como base
FROM node:21

# Instala las dependencias
RUN mkdir -p /home/app

# Copia el archivo de dependencias y el archivo package-lock.json
COPY . /home/app

# Expone el puerto 3000
EXPOSE 3015

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "run", "start:dev"]
