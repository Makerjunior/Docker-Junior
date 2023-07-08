## Documentação para o código Docker

O código a seguir cria uma imagem Docker, define permissões para uma pasta `messages`, cria um volume e lista e inspeciona volumes.

### Criando imagem
Para criar a imagem, execute o seguinte comando no terminal:
```
docker build -t imgphp:volumes .
```
Isso criará uma nova imagem com o nome `imgphp:volumes`.

### Definindo permissões
Para dar permissão ao container para criar arquivos na pasta `messages`, execute o seguinte comando:
```
chmod 777 messages
```
Isso permitirá que qualquer usuário crie, leia e escreva arquivos na pasta `messages`. Certifique-se de conceder permissões apenas aos usuários necessários para evitar riscos de segurança.

### Criando volume
Para criar um volume, execute o seguinte comando:
```
docker run -d -p 80:80 -v /home/neo/Documentos/Docker/Docker/Volumes/messages:/var/www/html/messages --rm 5e5
```
Este comando inicia um novo container usando a imagem `5e5`, mapeando a pasta `/home/neo/Documentos/Docker/Docker/Volumes/messages` do host para a pasta `/var/www/html/messages` do container. Isso permite que o container acesse e crie arquivos na pasta `messages`. O sinalizador `-d` executa o container em segundo plano, `-p 80:80` expõe a porta 80 do container para a porta 80 do host e `--rm` remove o container quando ele for encerrado.

### Listando volumes
Para listar todos os volumes existentes no host, execute o comando:
```
docker volume ls 
```
Isso lista todos os volumes criados no host, incluindo aqueles que foram criados com o comando `docker run`.

### Inspecionando volumes
Para inspecionar um volume específico, execute o seguinte comando:
```
docker inspect CVolumes
```
Isso exibe informações detalhadas sobre o volume `CVolumes`, incluindo seu nome, ponto de montagem, driver de armazenamento e configurações de configuração.

### Criando um volume nomeado
Para criar um volume nomeado que não armazena dados no host, execute o seguinte comando:
```
docker run -d -p 80:80 --name CVolumes --rm -v nomedovolume:/var/www/html/messages idimage
```
Este comando cria um novo container usando a imagem `idimage` com o nome `CVolumes`. O sinalizador `-v nomedovolume:/var/www/html/messages` cria um volume nomeado `nomedovolume` mapeando-a para a pasta `/var/www/html/messages` do container. Isso permite que o container acesse e crie arquivos na pasta `messages`. 

Bind mounts = salvando dados no host passamos o diretorio host:container
```
  docker run -d -p 80:80  -v  /home/neo/Documentos/Docker/Docker/Volumes/messages:/var/www/html/messages  --rm  idimage
```
  Atualizaçao em tempo  real, devemos passar o diretorio raiz do projeto para que seja atualizado altomaticamente quando houver atualizaçao no  codigo 
   ```
docker run -d -p 80:80 -v /home/neo/Documentos/RepositoriosGit/Docker/Volumes:/var/www/html/ --rm  idimagem
  ```

  Criando volumes manuamente 
  ```
  docker volume create nomedovolume
  ```
  Listando volumes 
  ```
  docker volume ls
  ```
  Inspecionando volumes
  ```
  docker volume inspect nome
  ```
  Removendo volumes
  ```
  docker volume rm nome
  ```
  Remover volumes nao utilizados 
  ```
  docker volume prune
  ```
  Volumes de somente leitura
  ```
  docker run -v volume:/data:ro
  ```

