FROM node:18-alpine

WORKDIR /app

# Copia dependências e schema do Prisma
COPY package*.json ./
COPY prisma ./prisma/

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Compila o TypeScript
RUN npm run build

# Expõe a porta que o Railway usará
EXPOSE 3000

# Comando final - o Railway injeta DATABASE_URL automaticamente
CMD ["npm", "start"]
