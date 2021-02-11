## Formação em Elixir Stone Pagamentos | Desafio Técnico
### Descrição Geral

O desafio foi implementado em Javascript é precisa do Node.js para ser executado. 

### Executando a aplicação

A partir de um terminal, dentro do diretorio do projeto execute:

```
node src/index.js
```

### Solução
Deduzi que uma lista multidimensional (matriz) pudesse representar fielmente a descrição feita para a 'Lista de Compras'.
No entanto, pelo menos para Javascript, uma lista de objeto possibilitaria uma solução mais prática para o problema. Sendo assim implementei a seguinte estrutura:

```
// São apenas três posições
let itens = [
    ['Feijão','Arroz','Macarrão'], // Posição que represeta os Itens
    [1,1,1], // Posição que represeta as Quantidades para cada item
    [3,3,4] // Posição que represeta os Preços para cada item
];  
```
 Outra lista, simples, foi implementada para amarzenar os inúmeros e-mails
 
 ```
 let emails = ['ednilsonmcs@gmail.com','hially@gmail.com','heitor@gmail.com']
 ```
 A função calcula(itens, emails) é responsável em resolver o problema apresentado. Em seu core é feita a divisão do valor total pela quantidade de e-mails. Para tratar a dizima periódica, quando ocorre, é utilizada a operação mod (%) que obtém o resto da divisão (valor total / quantidade de e-mails). A função decrementa o resto da divisão do valor total para que não ocorra dizima. Em seguida o resto é atribuido aos usuários.
