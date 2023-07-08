## Networks docker

No Docker, uma network (rede) é um recurso que permite a comunicação entre contêineres e, opcionalmente, com o host ou outros recursos externos. 

As networks são criadas com o objetivo de isolar os contêineres uns dos outros, proporcionando maior segurança e flexibilidade no gerenciamento de múltiplos contêineres em um único host. Dessa forma, os contêineres podem se comunicar entre si sem a necessidade de expor as portas diretamente ao host, o que pode ser uma brecha de segurança.

Existem três tipos de redes Docker: bridge, host e overlay. A rede "bridge" é a padrão e é usada para comunicação entre contêineres em um mesmo host. A rede "host" usa a mesma rede do host e não fornece isolamento de rede entre contêineres. A rede "overlay" é usada para comunicação entre contêineres em hosts diferentes.

As networks no Docker podem ser criadas, gerenciadas e removidas por meio da interface de linha de comando (CLI) do Docker.

Listando redes
```
docker networks ls
```

Criando redes bridge
```
docker network create nome
```

Criando redes mecvlan "ip"
```
docker network create -d macvlan nome
```
Removendo redes
```
docker network rm nome
```
Removendos redes nao utilizadas
```
docker network prume 
```
