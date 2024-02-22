
First let's create an instance of a postgres database to integrate with the application, for this you can use the command below:
```
docker run --name postgres -e POSTGRES_PASSWORD=12345 -p 5433:5432 -d postgres
```

If you already have experience with Docker, you can create a docker-compose.yml file to facilitate the configuration of your database.
```
version: '3.9'

services:
  postgres:
    image: postgres
    container_name: postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 12345
    ports:
      - "5433:5432"
    restart: always

```
Now let's install TypeORM with the following command:
```
npx install typeorm -g
```
So let's create the project with the command below:
```
npm typeorm init --name MyApp --database postgres
```
Para configurar a conexão com o banco de dados e executar a aplicação conforme descrito, você precisará seguir os seguintes passos:

1. **Configurar a conexão com o banco de dados:**
   - Abra o arquivo `database-source.ts`.
   - Configure a conexão com o banco de dados usando TypeORM. Isso geralmente envolve fornecer detalhes como tipo de banco de dados, host, porta, nome de usuário, senha e nome do banco de dados.
   - Aqui está um exemplo de como isso pode parecer em TypeScript usando TypeORM:

   ```typescript
   export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "12345",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
     })
   ```

2. **Instalar as dependências:**
   - No terminal, navegue até a pasta onde está o arquivo `package.json`.
   - Execute o comando `npm init` para instalar as dependências listadas no `package.json`.

3. **Iniciar a aplicação:**
   - Após a instalação das dependências, execute o comando `npm start` no terminal.
   - Isso iniciará a aplicação, e o exemplo de uso do TypeORM será executado automaticamente, criando a tabela `User` e inserindo dados na tabela.

Com esses passos, sua aplicação deve estar funcionando e o exemplo de uso do TypeORM deve ser executado com sucesso. Certifique-se de que todas as configurações de conexão com o banco de dados estão corretas para evitar problemas de conexão.