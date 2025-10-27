FROM node:18-alpine

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./
COPY prisma ./prisma/

# Instala dependências
RUN npm install

# Gera o Prisma Client
RUN npx prisma generate

# Copia o código fonte
COPY . .

# Compila o TypeScript
RUN npm run build

# Expõe a porta
EXPOSE 3000

# Comando para iniciar
CMD ["npm", "start"]
