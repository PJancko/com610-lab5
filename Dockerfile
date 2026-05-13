# Etapa 1: Build (Instalación de dependencias)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Instalamos todas las dependencias para asegurar que el build sea correcto
RUN npm ci
COPY . .

# Etapa 2: Runtime (Imagen final ligera)
FROM node:20-alpine
WORKDIR /app
# Solo copiamos lo necesario para ejecutar, ignorando tests y herramientas de desarrollo
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/app.js ./
COPY --from=builder /app/server.js ./

EXPOSE 3000
CMD ["node", "server.js"]