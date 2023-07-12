# Resculho 


## Criando projeto

Criando imagem no repositorio dockerhub
```
 docker build -t jupsousa/flask-hub .
```

Criando container
```
docker run -d -p 5000:5000 --name flask-hub --rm jupsousa/flask-hub
 ```

Subindo imagem para o dockerhub
```
 docker push jupsousa/flask-hub
```

## Criando Deployment Kubernetes
Inicializando um driver
```
minikube start --driver=docker
```
Inicializando minikube dashboard
```
minikube dashboard
```

Rodando aplicação
```
 kubectl create deployment flask-deployment --image=jupsousa/flask-hub
```

Verificando Deploimentes
e Pods criados pelo comando anterior.
```
kubectl get deployments
````
```
kubectl get pods
````
```
kubectl describe deployments
````

```
kubectl describe pods
````
```
kubectl config view
```



## Criando service
```
kubectl expose deployment flask-deployment --type=LoadBalancer  --port=5000
```

Gerando ip de acesso mikube
```
minikube service flask-deployment
```
Relembrar URL
```
minikube dashboard --url
```

## Detalhes do serviço
```
kubectl get services
```
```
kubectl get describe services/<nome>
```

## Escalando aplicação
```
kubectl scale deployment/<nome> -- replicas=<numero>
```

Verificar numero de replicas
```
kubectl get rs
```
Diminuir numero de replicas
```
kubectl scale deployment/<nome> -- replicas=<numero>
```

Atualizando imagens do progeto
