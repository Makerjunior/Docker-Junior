# Imagem base do Docker com o Python 3.9
FROM python:3.9-slim-buster


RUN  pip install pyyaml

# Copia o arquivo YAML e o arquivo Python
COPY app.py /app/app.py
COPY teste.yaml /app/teste.yaml

# Define o diretório de trabalho
WORKDIR /app

# Instala as dependências
RUN pip install pyyaml

# Define o comando padrão
CMD ["python", "/app/app.py"]
