
Este é um arquivo Dockerfile usado para criar uma imagem Node.js para executar uma aplicação. Aqui está o que cada linha faz:

- `FROM node` especifica que a imagem base para este Dockerfile deve ser a imagem oficial do Node.js.
- `WORKDIR /src` define o diretório de trabalho do contêiner para `/src`.
- `COPY package*.json .` copia os arquivos `package.json` e `package-lock.json` do host para o diretório de trabalho do contêiner.
- `RUN npm install` executa o comando `npm install` no diretório de trabalho do contêiner, o que instala todas as dependências listadas no arquivo `package.json`.
- `COPY . .` copia todos os arquivos e diretórios do host para o diretório de trabalho do contêiner.
- `EXPOSE 3000` expõe a porta 3000 no contêiner.
- `CMD ["node", "app.js"]` define o comando a ser executado quando um contêiner é iniciado a partir desta imagem. Neste caso, ele executa `node app.js`.

- `docker build .` constroi a imagem .
- `docker build nome_minha_Image:minha_tag .` constroi a imagem  e nomeia .
- `docker run -d -p 3000:3000 --name container  id_image`  rodando imagem .
- `docker tag  idimage  nome:tag `  renomeando imagens .
- `docker start -i container_node `  rodando em modo interativo.
 - `docker system prume`  remove as imagens e containers não usados.

 `  docker run -d -p 3000:3000 --name <nomeContainer> --rm <idImage>`  roda o container e remove apos a parada.

 - `docker cp <container>:caminhoContainer> <caminhodohost>`  copia arquivos entre container e host, é nessecario que o container esteja rodando exemplo: docker cp cnode:/src/app.js   ./copia/ 

 `docker top <container>`status do que esta rodando no container.

 `docker instect <container>`status do que esta rodando no container.

 `docker stats <container>` verifica procesamento.
 
  `docker stats <container>` verifica procesamento.

 