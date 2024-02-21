Para executar este contêiner Docker, você precisa primeiro construí-lo em uma imagem e depois iniciar um contêiner a partir dessa imagem. Aqui está como você pode fazer isso usando os comandos Docker:

1. Certifique-se de ter o Docker instalado e em execução em sua máquina.

2. Navegue até o diretório onde você salvou o Dockerfile e os arquivos do seu aplicativo Node.js.

3. Construa a imagem Docker usando o seguinte comando:

```
docker build -t nome-da-imagem .
```

Substitua "nome-da-imagem" pelo nome que deseja dar à sua imagem Docker. O ponto no final do comando indica ao Docker para procurar o Dockerfile no diretório atual.

4. Após a conclusão da construção da imagem, você pode iniciar um contêiner usando o seguinte comando:

```
docker run -p 3000:3000 nome-da-imagem
```

Isso iniciará um contêiner a partir da imagem que você construiu, expondo a porta 3000 do contêiner para a porta 3000 do host. Se o seu aplicativo Node.js estiver configurado para ouvir na porta 3000 (como indicado pelo `EXPOSE 3000` no Dockerfile), você poderá acessá-lo em `http://localhost:3000` no seu navegador da web.

Se você precisar fazer alterações na execução do contêiner, como vincular uma porta diferente ou definir variáveis de ambiente, pode fazê-lo passando argumentos adicionais para o comando `docker run`.

Por exemplo, se você quiser definir uma variável de ambiente:

```
docker run -p 3000:3000 -e NOME_DA_VARIAVEL=VALOR nome-da-imagem
```

Onde `NOME_DA_VARIAVEL` é o nome da variável de ambiente que você deseja definir e `VALOR` é o valor que você deseja atribuir a ela.




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

 