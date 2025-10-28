FROM node:18-alpine

WORKDIR /app

# Copia arquivos de dependências e Prisma
COPY package*.json ./
COPY .env ./
COPY prisma ./prisma/

# Instala dependências (roda o postinstall automaticamente)
RUN npm install

# Copia o restante do código
COPY . .

# Compila TypeScript
RUN npm run build

# Expõe a porta
EXPOSE 3000

# Inicia o servidor
CMD ["npm", "start"]
