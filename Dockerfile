FROM node:18-alpine

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./
COPY prisma ./prisma/

# Cria um .env TEMPORÁRIO apenas para o build do Prisma
RUN echo 'DATABASE_URL="postgresql://temp:temp@localhost:5432/temp"' > .env

# Instala dependências
RUN npm install

# Gera o Prisma Client (usa o .env temporário)
RUN npx prisma generate

# Remove o .env temporário (importante!)
RUN rm .env

# Copia o código fonte
COPY . .

# Compila o TypeScript
RUN npm run build

# Expõe a porta
EXPOSE 3000

# Comando para iniciar (usará a DATABASE_URL real do Railway)
CMD ["npm", "start"]
