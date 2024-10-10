# Fase de construção
FROM node:17 AS build

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package*.json ./
COPY . .

# Instala as dependências
RUN npm install

# Compila a aplicação (caso necessário)

# Fase de produção
FROM node:17 AS production

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia as dependências instaladas e a aplicação
COPY --from=build /usr/src/app .

# Expondo a porta
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["node", "app.js"]
