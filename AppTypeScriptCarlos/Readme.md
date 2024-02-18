

**Passo 1: Configuração do projeto TypeScript com Express**

Certifique-se de ter o Node.js e o TypeScript instalados em seu sistema.

1. Crie um diretório para o projeto e acesse-o no terminal.
   
   ```bash
   mkdir minha-aplicacao
   cd minha-aplicacao
   ```

2. Inicialize um novo projeto Node.js e instale as dependências necessárias.

   ```bash
   npm init -y
   npm install express typescript @types/express
   ```

3. Configure o TypeScript executando `tsc --init` e ajuste o `tsconfig.json` conforme necessário.

4. Crie um arquivo `index.ts` para o código da sua aplicação Express.

   ```typescript
   import express, { Request, Response } from 'express';

   const app = express();
   const PORT = 3000;

   app.get('/', (req: Request, res: Response) => {
       res.send('Olá, mundo!');
   });

   app.listen(PORT, () => {
       console.log(`Servidor rodando na porta ${PORT}`);
   });
   ```

5. Compile o código TypeScript para JavaScript.

   ```bash
   tsc
   ```

6. Agora, você pode iniciar sua aplicação executando:

   ```bash
   node index.js
   ```

   Acesse `http://localhost:3000` em seu navegador para ver a mensagem "Olá, mundo!".

**Passo 2: Dockerfile**

Agora, vamos criar um arquivo `Dockerfile` para containerizar nossa aplicação.

```Dockerfile
# Use uma imagem base do Node.js
FROM node:latest

# Cria o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia os arquivos necessários para o contêiner
COPY package*.json ./
COPY tsconfig.json ./
COPY index.js ./

# Instala as dependências
RUN npm install

# Expõe a porta em que a aplicação Express está sendo executada
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["node", "index.js"]
```

**Passo 3: docker-compose.yml**

Agora, vamos criar um arquivo `docker-compose.yml` para gerenciar os contêineres de nossa aplicação.

```yaml
version: '3'
services:
  minha-aplicacao:
    build: .
    ports:
      - "3000:3000"
```

**Passo 4: Construindo e executando os contêineres**

Certifique-se de ter o Docker instalado em seu sistema. Em seguida, execute os seguintes comandos:

1. Construa as imagens dos contêineres:

   ```bash
   docker-compose build
   ```

2. Inicie os contêineres:

   ```bash
   docker-compose up
   ```

Agora sua aplicação estará sendo executada dentro de um contêiner Docker. Acesse `http://localhost:3000` para ver sua aplicação Express em funcionamento dentro do contêiner Docker.