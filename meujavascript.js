/*
v1 = [];
v1[0] = 3.4;
v1[1] = 2;
v1[2] = "abc";

console.log(v1.length);

v2 = [2, "abc", true];
console.log(v2);

for(let i = 0; i < v2.length; i++){
    console.log(v2[i]);
}

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];
const apenasComA = nomes.filter((n) => n.startsWith("A"));
console.log(apenasComA);

const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac,v) => ac + v);
console.log(soma);
*/

function hello (nome){
    console.log("Oii.. " + nome);
}

function soma(a, b){
    return a + b;
}

const res = soma(2,3);
console.log(res);

function ehPar(numero){
    if (numero%2 == 0){
        console.log("É par");
    }else{
        console.log("É impar");
    }
}

ehPar(5);