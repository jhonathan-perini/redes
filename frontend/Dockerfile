# Dockerfile

# Usando a imagem do Node.js
FROM node:alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Compila a aplicação
RUN npm run dev

# Fase de produção
FROM nginx:alpine

# Copia os arquivos do build para o nginx
# COPY --from=build /app/dist /usr/share/nginx/html

# Expondo a porta
EXPOSE 80

# Comando para iniciar o nginx
# CMD ["nginx", "-g", "daemon off;"]
