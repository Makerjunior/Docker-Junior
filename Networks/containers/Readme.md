Nessa aplicação é possivel ver a conexão de dois conteiner onde um possui uma Api Flask em Python que consulta uma Api ezterna e retona uma lista de usuario, e se conecta a um container de Mysql adicionando um usuario que foi retornado pela api externa ao banco de dados.


Para ver funcionando acesse a url via postiman
onde GET **localhost:500/** retorna uma lista de usuarios, E POST na url **localhost:5000/inserthost** insere um novo usuario ao banco. 

Para que ver os dados sendo salvos no banco basta fazer uma conexão usando as variáveis de ambiente 
```
Host = 127.0.0.1

Port = 3306

Username = root

Password = vazio

Database = flaskdocker
```