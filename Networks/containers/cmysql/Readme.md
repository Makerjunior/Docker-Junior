Gerando imagem
```
docker build -t imgmysql:mysqlflask .
```
Criando conexao com o container 
```
docker network create flasknetwork
```
Criando container 
```
docker run -d -p 3306:3306 --name mysql_api_container --rm --network flasknetwork -e MYSQL_ALLOW_EMPTY_PASSWORD=True idimage
```

Este é um conjunto de comandos Docker para gerar uma imagem e executar um contêiner MySQL com uma rede específica:

- `docker build -t imgmysql:mysqlflask .`: gera uma nova imagem com o nome "imgmysql" e a tag "mysqlflask" usando o arquivo Dockerfile presente no diretório atual ("."). 

- `docker network create flasknetwork`: cria uma nova rede Docker chamada "flasknetwork".

- `docker run -d -p 3306:3306 --name mysql_api_container --rm --network flasknetwork -e MYSQL_ALLOW_EMPTY_PASSWORD=True idimage`: executa um novo contêiner a partir da imagem com o ID "idimage", permitindo conexões na porta 3306 do host e renomeando o contêiner como "mysql_api_container". O parâmetro "--rm" indica que o contêiner será automaticamente removido após a sua finalização. A variável de ambiente "MYSQL_ALLOW_EMPTY_PASSWORD" é definida como "True" para permitir acesso sem senha ao banco de dados. O contêiner é conectado à rede "flasknetwork" para permitir a comunicação com outros contêineres na mesma rede.