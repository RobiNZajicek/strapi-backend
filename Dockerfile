# Dockerfile pro Strapi na Google Cloud Run
FROM node:18-alpine

# Nastavení pracovního adresáře
WORKDIR /app

# Kopírování package.json a package-lock.json
COPY package*.json ./

# Instalace závislostí
RUN npm ci --only=production && npm cache clean --force

# Kopírování zdrojového kódu
COPY . .

# Build Strapi
RUN npm run build

# Cloud Run používá PORT environment variable
EXPOSE 1337

# Nastavení environment
ENV NODE_ENV=production

# Spuštění aplikace
CMD ["npm", "start"]
