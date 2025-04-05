# Základní image Strapi s Node.js
FROM strapi/strapi:4.1.5

# Zkopíruje celý projekt do kontejneru
COPY . .

# Nainstaluje závislosti
RUN npm install

# Sestaví admin panel
RUN npm run build

# Spustí Strapi
CMD ["npm", "start"]