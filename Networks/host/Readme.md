
## Dockerfile
Este Dockerfile cria uma imagem Docker baseada em Python 3. Ele atualiza o banco de dados de pacotes e instala `python3-pip` e `python-dev`. O diretório de trabalho é definido como `/app`. Os pacotes Python Flask, Requests e Flask-MySQLdb são instalados via pip. Todos os arquivos presentes no contexto de construção são copiados para a imagem. A porta 5000 é exposta e, quando um contêiner é iniciado a partir desta imagem, o comando `python ./app.py` é executado dentro do contêiner.


## app.py
Este código Python é uma aplicação Flask que tem duas rotas: 

A rota raiz ("/"), quando acessada através do método HTTP GET, faz uma requisição para a API "https://randomuser.me/api" usando a biblioteca de requests. O conteúdo da resposta é retornado em formato JSON.

A outra rota ("/inserthost"), quando acessada pelo método HTTP POST, gera um nome aleatório pela mesma API, insere o nome gerado em um banco de dados MySQL e retorna o nome inserido como resposta.

A conexão com o banco de dados é estabelecida pelo objeto `mysql` que utiliza as configurações definidas anteriormente nas variáveis de configuração do aplicativo (host, usuário, senha e nome do banco de dados). 

O servidor web é iniciado com o comando `app.run(host="0.0.0.0", debug=True, port="5000")`, sendo executado na porta 5000 e configurado para ser visualizado em qualquer endereço IP (`host="0.0.0.0"`) com depuração ativada (`debug=True`).

Gerando images
```
docker -t nomeimage:label .
```

Criando container
```
docker run -d -p 5000:5000 --name containerflask --rm nomeimage
```

