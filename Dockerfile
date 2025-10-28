FROM node:18-alpine

WORKDIR /app

# Copia arquivos de dependências e Prisma
COPY package*.json ./
COPY prisma ./prisma/

# Instala dependências (só gera o Prisma Client)
RUN npm install

# Copia o restante do código
COPY . .

# Compila TypeScript
RUN npm run build

# Expõe a porta
EXPOSE 3000

# Inicia o servidor (o db:push rodará aqui, no runtime)
CMD ["npm", "start"]
