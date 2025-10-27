FROM node:18-alpine

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./
COPY prisma ./prisma/

# Instala dependências
RUN npm install

# Gera o Prisma Client (usará a DATABASE_URL das variáveis do Railway)
RUN npx prisma generate

# Copia o código fonte
COPY . .

# Compila o TypeScript
RUN npm run build

# Expõe a porta
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]
