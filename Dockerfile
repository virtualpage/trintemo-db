FROM node:18-alpine

WORKDIR /app

# Copia APENAS os arquivos de dependências primeiro
COPY package.json package-lock.json* ./
COPY prisma ./prisma/

# Instala TODAS as dependências (incluindo devDependencies para build)
RUN npm ci --only=production && npm cache clean --force

# Copia o restante do código
COPY . .

# Gera Prisma Client
RUN npx prisma generate

# Compila TypeScript
RUN npm run build

# Expõe a porta
EXPOSE 3000

# Inicia o servidor
CMD ["npm", "start"]
