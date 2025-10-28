FROM node:18-alpine

WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./
COPY prisma ./prisma/

# Limpa cache e instala todas as dependências corretamente
RUN npm cache clean --force
RUN npm install

# Copia o restante do código
COPY . .

# Compila TypeScript
RUN npm run build

# Expõe a porta
EXPOSE 3000

# Inicia o servidor
CMD ["npm", "start"]
