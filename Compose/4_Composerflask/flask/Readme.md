
```
docker build -t flaskapinetwork:flaskmysql .
```

Criando container
```
docker run -d -p 5000:5000 --name container_api_flask --rm --network flasknetwork  idimage
```

Este é um conjunto de comandos Docker para gerar uma imagem e executar um contêiner Flask:

- `docker build -t flaskapinetwork:flaskmysql .`: gera uma nova imagem com o nome "flaskapinetwork" e a tag "flaskmysql" usando o arquivo Dockerfile presente no diretório atual ("."). 

- `docker run -d -p 5000:5000 --name container_api_flask --rm --network flasknetwork idimage`: executa um novo contêiner a partir da imagem com o ID "idimage", permitindo conexões na porta 5000 do host e renomeando o contêiner como "container_api_flask". O parâmetro "--rm" indica que o contêiner será automaticamente removido após a sua finalização. O contêiner é conectado à rede "flasknetwork" para permitir a comunicação com outros contêineres na mesma rede.