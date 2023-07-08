## Tutorial
Basta criar a imagem usando o comando :
```
docker build -t <nome_da_imagem> .
```
E roda a aplicação usando o comando :
```
docker run <idimage>
```



YAML é uma linguagem de serialização de dados utilizada para representar dados estruturados em um formato legível por humanos. Ela utiliza uma sintaxe simples e intuitiva, baseada em indentação, que torna fácil a leitura e escrita de arquivos YAML.

Os arquivos YAML consistem em pares chave-valor, onde cada chave é seguida por um valor. Os pares podem ser aninhados para criar estruturas de dados mais complexas, como listas e dicionários. 

Um exemplo de arquivo YAML seria:

```
# Comentário
nome: João
idade: 30
endereco:
  rua: Rua A
  cidade: São Paulo
telefones:
  - 1234-5678
  - 9876-5432
```

Nesse exemplo, temos as chaves "nome", "idade", "endereco" e "telefones". A chave "endereco" é um dicionário aninhado com as chaves "rua" e "cidade", enquanto a chave "telefones" é uma lista de strings.

Para criar um arquivo YAML, você pode usar qualquer editor de texto simples. Em seguida, siga as regras básicas do YAML para definir corretamente a sua estrutura.

Aqui estão algumas das principais características do YAML e exemplos de como trabalhar com elas:

- Espaçamento e Identação:
O YAML é sensível à indentação e requer espaçamento consistente. O espaçamento deve ser feito com espaços em branco e não com tabulação. A indentação é usada para indicar níveis de aninhamento. Por exemplo:

```
pessoa:
  nome: João
  idade: 30
```

- Comentários:
Comentários em YAML são precedidos pelo símbolo `#`. Eles podem ser adicionados em uma linha separada ou após um valor. Por exemplo:

```
# Este é um comentário
idade: 30 # Este é outro comentário
```

- Dados Numéricos:
Os dados numéricos em YAML podem ser representados como inteiros ou decimais. Por exemplo:

```
numero_inteiro: 10
numero_decimal: 3.14
```

- Strings:
As strings em YAML podem ser representadas de várias maneiras, incluindo simples ou duplas aspas ou sem aspas. Por exemplo:

```
nome: "João"
sobrenome: 'Silva'
frase: Meu nome é João.
```

- Valores Nulos:
Os valores nulos em YAML são representados pela palavra chave `null` ou `~`. Por exemplo:

```
valor_nulo: null
outro_valor_nulo: ~
```

- Booleanos:
Valores booleanos em YAML são representados pelas palavras chave `true` ou `false`. Por exemplo:

```
ativo: true
inativo: false
```

- Listas:
As listas em YAML são representadas por um conjunto de valores separados por vírgula, dentro de colchetes `[]`, semelhante a uma lista em Python. Por exemplo:

```
numeros: [1, 2, 3, 4]
cores: [vermelho, verde, azul]
```

- Dicionários:
Os dicionários em YAML são representados por um conjunto de chaves e seus respectivos valores, separados por dois-pontos `:`, dentro de chaves `{}`. Por exemplo:

```
pessoa:
  nome: João
  sobrenome: Silva
  idade: 30
```

Essas são algumas das principais características do YAML. Para criar um arquivo YAML válido, certifique-se de seguir as regras de indentação e espaçamento e usar a sintaxe adequada para cada tipo de dado.



