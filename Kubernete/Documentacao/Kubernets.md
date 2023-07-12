
## Documentação do Código

Esta documentação fornece informações sobre como criar um projeto, implantá-lo no Docker e Kubernetes e realizar várias operações relacionadas à aplicação.

### Criando um Projeto
Para criar um projeto, siga estes passos:

1. Construa a imagem Docker executando o seguinte comando:
   ```
   docker build -t jupsousa/flask-hub .
   ```

2. Crie um contêiner executando o seguinte comando:
   ```
   docker run -d -p 5000:5000 --name flask-hub --rm jupsousa/flask-hub
   ```

3. Envie a imagem para o Docker Hub:
   ```
   docker push jupsousa/flask-hub
   ```

### Criando um Deployment Kubernetes

1. Inicie o driver minikube (por exemplo, Docker) executando:
   ```
   minikube start --driver=docker
   ```

2. Abra o painel de controle do minikube para monitoramento:
   ```
   minikube dashboard
   ```

3. Execute a aplicação como um deployment usando o seguinte comando:
   ```
   kubectl create deployment flask-deployment --image=jupsousa/flask-hub
   ```

4. Verifique os deployments e pods criados:
   ```
   kubectl get deployments
   kubectl get pods
   kubectl describe deployments
   kubectl describe pods
   kubectl config view
   ```

### Criando um Service

1. Exponha o deployment como um serviço com balanceamento de carga:
   ```
   kubectl expose deployment flask-deployment --type=LoadBalancer --port=5000
   ```

2. Obtenha o IP de acesso ao minikube:
   ```
   minikube service flask-deployment
   ```

3. Lembre-se da URL para acessar o painel de controle do minikube:
   ```
   minikube dashboard --url
   ```

### Detalhes do Serviço

1. Verifique os serviços criados:
   ```
   kubectl get services
   ```

2. Obtenha informações detalhadas sobre um serviço específico:
   ```
   kubectl describe services/<nome>
   ```

### Dimensionando a Aplicação

1. Dimensione o deployment para um número específico de réplicas:
   ```
   kubectl scale deployment/<nome> --replicas=<número>
   ```

2. Verifique o número de réplicas usando o comando ReplicaSet:
   ```
   kubectl get rs
   ```

3. Para diminuir o número de réplicas, execute novamente o comando `kubectl scale` com o número desejado.

### Atualizando as Imagens do Projeto

Para atualizar as imagens do projeto, execute as etapas necessárias para reconstruir, criar um contêiner e enviar a imagem atualizada para o Docker Hub, conforme descrito na seção "Criando um Projeto".