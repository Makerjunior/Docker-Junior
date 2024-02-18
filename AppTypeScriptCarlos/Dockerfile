# Use uma imagem base do Node.js
FROM node:latest

# Cria o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia os arquivos necessários para o contêiner
COPY package*.json ./
COPY tsconfig.json ./
COPY index.js ./
COPY index.html ./
COPY styles.css ./



# Instala as dependências
RUN npm install

# Expõe a porta em que a aplicação Express está sendo executada
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["node", "index.js"]
