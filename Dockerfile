# Použijte oficiální image s podporovanou verzí
FROM strapi/strapi:4.11.1

# Zkopíruje celý projekt do kontejneru
COPY . .

# Nainstaluje závislosti
RUN npm install

# Sestaví admin panel
RUN npm run build

# Spustí Strapi
CMD ["npm", "start"]