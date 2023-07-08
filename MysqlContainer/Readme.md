Segue um exemplo básico de Dockerfile para criar uma imagem com o MySQL:

```
# Imagem base
FROM mysql:latest

# Variáveis de ambiente
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=mydb
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

# Copiar arquivo SQL para o container
COPY script.sql /docker-entrypoint-initdb.d/

# Expor porta padrão do MySQL
EXPOSE 3306
```

Nesse exemplo, a imagem é criada a partir da imagem oficial mais recente do MySQL (`mysql:latest`). Em seguida, são definidas variáveis de ambiente para configurar o usuário e senha do root, nome do banco de dados, usuário e senha adicionais. O comando `COPY` copia um arquivo SQL para o diretório `/docker-entrypoint-initdb.d/`, que será executado na criação do banco de dados. Por fim, a porta padrão do MySQL é exposta para permitir conexões externas.

Com esse Dockerfile, a imagem pode ser construída com o seguinte comando na linha de comando:

```
docker build -t my-mysql-image .
```

E depois, um container pode ser iniciado a partir dessa imagem com o seguinte comando:

```
docker run --name my-mysql-container -p 3306:3306 -d my-mysql-image
```
Este comando inicia um novo container chamado `my-mysql-container` a partir da imagem `my-mysql-image`, mapeia a porta 3306 do container para a porta 3306 do host e executa o container em segundo plano (`-d`).





Segue uma query SQL para criar uma tabela "usuarios" com 20 registros, contendo nome, idade e endereço:

```
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    endereco VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (nome, idade, endereco) VALUES
('João', 25, 'Rua A'),
('Maria', 30, 'Rua B'),
('Pedro', 28, 'Rua C'),
('Lucas', 21, 'Rua D'),
('Ana', 27, 'Rua E'),
('Márcio', 32, 'Rua F'),
('Fernanda', 24, 'Rua G'),
('Ricardo', 35, 'Rua H'),
('Bianca', 29, 'Rua I'),
('Sandra', 26, 'Rua J'),
('Carlos', 31, 'Rua K'),
('Aline', 23, 'Rua L'),
('Gustavo', 33, 'Rua M'),
('Larissa', 22, 'Rua N'),
('Roberto', 34, 'Rua O'),
('Tatiana', 28, 'Rua P'),
('Bruno', 25, 'Rua Q'),
('Camila', 27, 'Rua R'),
('Paulo', 30, 'Rua S'),
('Júlia', 26, 'Rua T');
```

Essa query cria a tabela "usuarios" com as colunas "id", "nome", "idade" e "endereco". O campo "id" é definido como chave primária e auto-incrementado. Em seguida, são inseridos 20 registros com valores para as colunas "nome", "idade" e "endereco".

Lembre-se que essa query deve ser executada em um banco de dados MySQL previamente criado.


