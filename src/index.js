/*Deduzi que uma lista multidimensional (matriz) pudesse representar fielmente a descrição feita para a 'Lista de Compras'.
No entanto, pelo menos para Java Script, uma lista de objeto possibilitaria uma solução mais prática para o problema.*/

let itens = [
    ['Feijão','Arroz','Macarrão'], //Itens
    [1,1,1], // Quantidade
    [3,3,4] // Preço
];          

let emails = ['ednilsonmcs@gmail.com','hially@gmail.com','heitor@gmail.com'];

const calcula = (itens, emails) => {

    if(!Array.isArray(itens))
        throw 'O itens devem ser passados em estrutura de lista multidimensional!';
    else{
        itens.forEach(item => {
            if(Array.isArray(item) && item.length === 0)
                throw 'As dimensões da lista não pode possuir listas vazias!';
        });
    }
    if(!Array.isArray(emails))
        throw 'O emails devem ser passados em estrutura de lista!';
    
    if(itens.length === 0)
        throw 'Não é permitido passar uma lista de itens vazia!';
    if(emails.length === 0)
        throw 'Não é permitido passar uma lista de emails vazia!';

    /*  itens[0].length = total de itens
    *   itens[1].length = total de quantidades
    *   itens[2].length = total de precos */

    if(!(itens[0].length == itens[1].length && itens[1].length == itens[2].length))
        throw 'A quantidade de itens das listas Itens, Quantidade e Preço devem coindicir!';

    //Verifica se as listas de valor e quantidade são númericas
    if(itens[1].filter((i) => {return (typeof(i) != "number" || !(i % 1 === 0))}).length > 0)
        throw 'Lista de quantidade só pode possuir valores númericos inteiros!';

    if(itens[2].filter((i) => {return typeof(i) != "number" || !(i % 1 === 0)}).length > 0)
        throw 'Lista de valores só pode possuir valores númericos inteiros!';

    let totalItens = itens[0].length
    let count = 0;
    let valorTotalCompra = 0;
    while(totalItens > count){
        valorTotalCompra += (itens[1][count] * itens[2][count]);
        count++;
    }

    let resto = 0;
    let totalEmails = emails.length;

    if(valorTotalCompra % totalEmails !== 0){
        resto = valorTotalCompra % totalEmails;
        valorTotalCompra = valorTotalCompra - resto;
    }

    let valorPorEmail = valorTotalCompra / totalEmails;

    let resultado = new Map();

    emails.forEach((email,index) => {
        resultado.set(email,(index < resto)?valorPorEmail+1:valorPorEmail)
    });

    return resultado;
}

/*Função para testar as validações que são feitas antes de iniciar o cálculo*/
const switchTestes = () => {
    let emails = "";
    let = "";
    
    //case0
    //Itens sem ser uma lista: deve lançar exceção    
    try {
        calcula(itens,emails)
    } catch (error) {
        console.log('Teste aceito (0): exceção lançada com sucesso!');
        console.error(error);
        console.log('\n');
    }

    //case1
    //Emails sem ser uma lista: deve lançar exceção    
    try {
        calcula(itens,emails)
    } catch (error) {
        console.log('Teste aceito (1): exceção lançada com sucesso!');
        console.error(error);
        console.log('\n');
    }
    
    //case2
    //Lista de emails vazia: deve lançar exceção
    emails = [];
    itens = [
        ['Feijão','Arroz','Macarrão'], //Itens
        [1,1,1], // Quantidade
        [3,3,4] // Preço
    ];
    
    try {
        calcula(itens,emails)
    } catch (error) {
        console.log('Teste aceito (2): exceção lançada com sucesso!');
        console.error(error);
        console.log('\n');
    }
    
    //case3 
    //Lista de itens vazia: deve lançar exceção
    emails = ['ednilsonmcs@gmail.com','hially@gmail.com','heitor@gmail.com']
    itens = [];

    try {
        calcula(itens,emails)
    } catch (error) {
        console.log('Teste aceito (3): exceção lançada com sucesso!');
        console.error(error);
        console.log('\n');
    }
    
    //case4 
    //Lista de itens com dimensões vazias: deve lançar exceção
    emails = ['ednilsonmcs@gmail.com','hially@gmail.com','heitor@gmail.com']
    itens = [[],[],[]];

    try {
        calcula(itens,emails)
    } catch (error) {
        console.log('Teste aceito (4): exceção lançada com sucesso!');
        console.error(error);
        console.log('\n');
    }

    //case5 
    //Lista de itens com dimensões vazias: deve lançar exceção
    emails = ['ednilsonmcs@gmail.com','hially@gmail.com','heitor@gmail.com']
    itens = [[],[],[]];

    //case5 
    //Dimensões da lista com quantidades de itens diferentes: deve lançar exceção
    emails = ['ednilsonmcs@gmail.com','hially@gmail.com','heitor@gmail.com']
    itens = [
        ['Feijão','Arroz','Macarrão','Carne'], //Itens
        [1,1,1], // Quantidade
        [3,3,4] // Preço
    ];

    try {
        calcula(itens,emails)
    } catch (error) {
        console.log('Teste aceito (5): exceção lançada com sucesso!');
        console.error(error);
        console.log('\n');
    }

    //case6 
    //Dimensão quantidade com valores do tipo string
    emails = ['ednilsonmcs@gmail.com','hially@gmail.com','heitor@gmail.com']
    itens = [
        ['Feijão','Arroz','Macarrão'], //Itens
        [1,1,'1'], // Quantidade
        [3,3,4] // Preço
    ];

    try {
        calcula(itens,emails)
    } catch (error) {
        console.log('Teste aceito (6): exceção lançada com sucesso!');
        console.error(error);
        console.log('\n');
    }

    //case7
    //Dimensão quantidade com valores do tipo double
    emails = ['ednilsonmcs@gmail.com','hially@gmail.com','heitor@gmail.com']
    itens = [
        ['Feijão','Arroz','Macarrão'], //Itens
        [1,1,9.5], // Quantidade
        [3,3,4] // Preço
    ];

    try {
        calcula(itens,emails)
    } catch (error) {
        console.log('Teste aceito (7): exceção lançada com sucesso!');
        console.error(error);
        console.log('\n');
    }

    //case8 
    //Dimensão valores com valores do tipo string
    emails = ['ednilsonmcs@gmail.com','hially@gmail.com','heitor@gmail.com']
    itens = [
        ['Feijão','Arroz','Macarrão'], //Itens
        [1,1,1], // Quantidade
        [3,3,'4'] // Preço
    ];

    try {
        calcula(itens,emails)
    } catch (error) {
        console.log('Teste aceito (8): exceção lançada com sucesso!');
        console.error(error);
        console.log('\n');
    }

    //case9 
    //Dimensão valores com valores do tipo double
    emails = ['ednilsonmcs@gmail.com','hially@gmail.com','heitor@gmail.com']
    itens = [
        ['Feijão','Arroz','Macarrão'], //Itens
        [1,1,1], // Quantidade
        [3,3,4.1] // Preço
    ];
    try {
        calcula(itens,emails)
    } catch (error) {
        console.log('Teste aceito (9): exceção lançada com sucesso!');
        console.error(error);
        console.log('\n');
    }

    emails = ['ednilsonmcs@gmail.com','hially@gmail.com','heitor@gmail.com'];
    itens = [
        ['Feijão','Arroz','Macarrão'], //Itens
        [1,1,1], // Quantidade
        [3,3,4] // Preço
    ];          

    //case10
    if(typeof(calcula(itens,emails)) === 'object' && calcula(itens,emails) instanceof Map)
        console.log('Teste aceito (10): função retornou um objeto do tipo Map()')
    else
        console.log('Teste rejeitado: função NÃO retornou um objeto do tipo Map()')

    console.log('\n');

}

switchTestes()

console.log(calcula(itens,emails))