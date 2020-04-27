class List
{
    constructor()
    {
        this.data = [];
    }
    add(data)
    {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List
{
    constructor()
    {
        super();
        this.usuario = "Anderson";
    }

    mostraUsuario()
    {
        console.log(this.usuario);
    }

    static testeMetodoEstatico()
    {
        console.log("método estático");
    }

}

const minhaLista = new TodoList();
document.getElementById("novotodo").onclick = function()
{
    minhaLista.add("Novo Todo");
}

TodoList.testeMetodoEstatico();


// *** OPERAÇÕES COM ARRAYS
const arr = [1,3,4,5,6,7,9];
const newArr = arr.map(function(item, index)
{
    // faz a operação abaixo para cada item do vetor, alterando seus valores
    return item * 2 + index;
});
console.log(newArr);

const sum = arr.reduce(function(total, next)
{
    // soma todos os valores do array
    return total + next;
});
console.log(sum);

const filter = arr.filter(function(item)
{
    // filtra o array
    // traz só os números pares (divisiveis por 2 sem resto)
    return item % 2 === 0;
});
console.log(filter);

const find = arr.find(function(item)
{
    return item === 4;
});
console.log(find);


/*

// *** ARROW FUNCTION
// verbosidade bem menor utilizando arrow function
const arr3 = [1,2,3,4,5,6];
const newArr3 = arr3.map(item => item * 2);
console.log(newArr3);


// *** VALOR PADRÃO
function soma(a = 3, b = 9)
{

}

console.soma(50);
console.soma();

// *** VALOR PADRÃO COM ARROW FUNCTION
const soma2 = (a = 3, b = 9) => a + b;


/// *** DESESTRUTURAÇÃO DE OBJETOS

const usuario = 
{
    nome: 'diego',
    idade: 23,
    endereco:
    {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
}

const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;

// const { nome, idade, endereco: {cidade} } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);


// *** OPERADORES REST / SPREAD

// REST
// considera o restante do objeto ou array nos parametros
const usuario3 =
{
    nome: 'diego',
    idade: 23,
    empresa: 'rocketseat'
}

const {nome2, ...resto2} = usuario3;
console.log(nome2);
console.log(resto2);

const arr = [1,2,3,4];
const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

// SPREAD
// faz a união do array
const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1, ...array2];
console.log(array3);

const usuario4 =
{
    nome: 'diego',
    idade: 23,
    empresa: 'rocketseat'
}

const usuario5 = {...usuario4, nome: 'Gabriel'};

console.log(usuario5);



// TEMPLATE LITERALS
const nome = 'Anderson';
const idade = 23;
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
*/

/*
import { somar, subtrair } from './funcoes';
console.log(somar(1,2));
console.log(subtrair(4,2));

import * as funcoes from './funcoes';
console.log(funcoes.somar(10, 50));
console.log(funcoes.subtrair(20, 30));
*/
