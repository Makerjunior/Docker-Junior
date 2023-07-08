# Estrutura 

* Em Arquivos temos o arquivo .pdf com a versão em português.
* Em MysqlContainer vemos como criar um container Mysql, criar o banco, tabelas, salvar dados e consulta-los usando SQL.
* Em Networks temos 3 aplicações mostrando como ligar containers docker entre si, como host e APIs externas.
* Em node temos uma aplicação usando Node.js
* Em volumes temos uma aplicação em PHP que permite salvar dados no host.
* Em Yaml temos uma breve explicação de como trabalhar com Yaml, que usaremos em breve para trabalhar docker-compose.



## Comandos Docker e suas explicações:

1. `docker run`: Cria e inicia um novo contêiner.
2. `docker build`: Cria uma nova imagem a partir de um arquivo Dockerfile.
3. `docker images`: Lista todas as imagens disponíveis no sistema.
4. `docker ps`: Lista todos os contêineres em execução no momento.
5. `docker stop`: Para um contêiner em execução.
6. `docker rm`: Remove um contêiner existente.
7. `docker rmi`: Remove uma imagem existente.
8. `docker exec`: Executa um comando dentro de um contêiner em execução.
9. `docker cp`: Copia arquivos entre o host e o contêiner.
10. `docker network`: Gerencia redes Docker.


## Alguns exemplos de combinações comuns:

1. `docker run -it <image_name> /bin/bash`: Inicia um novo contêiner interativo com um shell Bash.
2. `docker build -t <image_name> .`: Constrói uma nova imagem usando um arquivo Dockerfile localizado no diretório atual.
3. `docker ps -a`: Lista todos os contêineres, incluindo aqueles que não estão em execução no momento.
4. `docker stop $(docker ps -q)`: Para todos os contêineres em execução.
5. `docker rm $(docker ps -aq)`: Remove todos os contêineres existentes.
6. `docker rmi $(docker images -q)`: Remove todas as imagens existentes.
7. `docker exec -it <container_name> /bin/bash`: Executa um shell Bash em um contêiner em execução.
8. `docker cp <container_name>:<path_to_file> <path_on_host>`: Copia um arquivo do contêiner para o host.
9. `docker network create <network_name>`: Cria uma nova rede Docker.
10. `docker run --network=<network_name> <image_name>`: Inicia um novo contêiner e o conecta a uma rede Docker existente.
11. `docker network connect <rede> <container>`: Conecta um container a uma rede.
12. `docker network disconnect <rede> <container>`: Desconecta um container de uma rede.
13. `docker network rm <rede>`: Remove uma rede.
14. `docker network ls`: Lista todas as redes existentes.
15. `docker network inspect <rede>`: Exibe informações sobre uma rede.


## Para editar um arquivo ou pasta em um contêiner Docker e ver as alterações em tempo real no navegador, siga estas etapas:

1. Execute o contêiner Docker com a opção de compartilhamento de volume `-v` para mapear a pasta do host para a pasta do contêiner. Por exemplo, o comando abaixo inicia um contêiner do Nginx com uma pasta compartilhada chamada `html`:

   ```
   docker run -d -p 80:80 -v /caminho/para/pasta/html:/usr/share/nginx/html nginx
   ```

2. Abra a pasta compartilhada em seu editor de código (por exemplo, VSCode) e faça as alterações necessárias nos arquivos.

3. Quando você salvar as alterações, elas serão sincronizadas automaticamente com a pasta dentro do contêiner.

4. Abra o navegador e acesse o endereço IP do contêiner na porta especificada (por exemplo, `http://localhost:80`). As alterações feitas nos arquivos na pasta compartilhada devem ser refletidas imediatamente no navegador.

Observação: se você estiver usando um servidor web que armazena cache, pode ser necessário limpar o cache do navegador ou reiniciar o servidor web para ver as alterações atualizadas.







### Comandos Docker e suas explicações:

1. `docker run`: Cria e inicia um novo contêiner.
   - Exemplo: `docker run hello-world`
   - Este comando cria e inicia um novo contêiner com a imagem "hello-world", que imprime uma mensagem de saudação.

2. `docker build`: Cria uma nova imagem a partir de um arquivo Dockerfile.
   - Exemplo: `docker build -t my-image .`
   - Este comando cria uma nova imagem a partir do Dockerfile localizado no diretório atual e a nomeia como "my-image".

3. `docker images`: Lista todas as imagens disponíveis no sistema.
   - Exemplo: `docker images`
   - Este comando lista todas as imagens disponíveis no sistema, incluindo o repositório, a tag, o ID da imagem e o tamanho.

4. `docker ps`: Lista todos os contêineres em execução no momento.
   - Exemplo: `docker ps`
   - Este comando lista todos os contêineres em execução no momento, incluindo o ID, o status, o nome e a imagem associada.

5. `docker stop`: Para um contêiner em execução.
   - Exemplo: `docker stop my-container`
   - Este comando para um contêiner em execução com o nome "my-container".

6. `docker rm`: Remove um contêiner existente.
   - Exemplo: `docker rm my-container`
   - Este comando remove o contêiner com o nome "my-container".

7. `docker rmi`: Remove uma imagem existente.
   - Exemplo: `docker rmi my-image`
   - Este comando remove a imagem com o nome "my-image".

8. `docker exec`: Executa um comando dentro de um contêiner em execução.
   - Exemplo: `docker exec my-container ls`
   - Este comando executa o comando "ls" dentro do contêiner com o nome "my-container".

9. `docker cp`: Copia arquivos entre o host e o contêiner.
   - Exemplo: `docker cp /path/to/local/file my-container:/path/to/container/file`
   - Este comando copia o arquivo local "/path/to/local/file" para o contêiner com o nome "my-container" no caminho "/path/to/container/file".

10. `docker network`: Gerencia redes Docker.
    - Exemplo: `docker network create my-network`
    - Este comando cria uma nova rede Docker com o nome "my-network".

## Algumas combinações comuns:

1. `docker run -it <image_name> /bin/bash`: Inicia um novo contêiner interativo com um shell Bash.
2. `docker build -t <image_name> .`: Constrói uma nova imagem usando um arquivo Dockerfile localizado no diretório atual.
3. `docker ps -a`: Lista todos os contêineres, incluindo aqueles que não estão em execução no momento.
4. `docker stop $(docker ps -q)`: Para todos os contêineres em execução.
5. `docker rm $(docker ps -aq)`: Remove todos os contêineres existentes.
6. `docker rmi $(docker images -q)`: Remove todas as imagens existentes.
7. `docker exec -it <container_name> /bin/bash`: Executa um shell Bash em um contêiner em execução.
8. `docker cp <container_name>:<path_to_file> <path_on_host>`: Copia um arquivo do contêiner para o host.
9. `docker network create <network_name>`: Cria uma nova rede Docker.
10. `docker run --network=<network_name> <image_name>`: Inicia um novo contêiner e o conecta a uma rede Docker existente.
11. `docker volume ls`: Lista volumes docker
12. `docker volume inspect <volume_name>`: Inspeciona volumes
13. `docker volume rm <volume_name>`: Remove Volume



