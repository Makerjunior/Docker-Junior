
Este é um arquivo Docker Compose que define dois serviços: um container de banco de dados MySQL e um container do WordPress. O container do banco de dados usa a imagem oficial do MySQL 5.7, configura um volume para armazenar os dados do banco de dados e define variáveis ​​de ambiente para a senha do usuário root, o nome do banco de dados WordPress e um usuário não-root com acesso ao banco de dados.

O container do WordPress depende do container do banco de dados e usa a imagem mais recente do WordPress. Ele expõe a porta 80 dentro do container, que é mapeada para a porta 8000 na máquina host. Ele também define variáveis ​​de ambiente para o host do banco de dados WordPress, nome de usuário, senha e nome do banco de dados.

Por fim, o arquivo define um volume chamado `db_data` para armazenamento persistente dos dados do MySQL.

Para usar esse arquivo Docker Compose, navegue até o diretório onde ele está armazenado e execute o comando `docker-compose up`para rodar no terminal ou `docker-compose up -d` para que o terminal não seja ocupado. Isso iniciará os dois containers e configurará as conexões de rede necessárias entre eles. Os usuários podem acessar o site do WordPress abrindo um navegador da web e navegando até `http://localhost:8000`.

Comandos basicos:
 `docker-compose up -d`: Roda em backgound
 `docker-compose down`: Parando containers

Variavéis de ambiente


