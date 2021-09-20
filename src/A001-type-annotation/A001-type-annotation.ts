/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)

// Esses tipos geralmente utilizando letras minusculas

let nome: string = 'Kratos'; // Qualquer tipo de strings '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Para tipos utilizando arrays e tipos criados, começando com letra maiscula

// Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3]; // Outra forma de declaração, mesma coisa

let arrayStrings: Array<string> = ['a', 'b'];
let arrayStrings2: string[] = ['a', 'b'];

// Objetos

// Se tiver interrogação, a chave não é obrigatória
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 15,
  nome: 'Atreus'
};

// Funções

function soma(x: number, y: number):number {
  return x + y;
}

// Mesma coisa da função soma
const soma2: (x: number, y: number) => number = (x,y) => x + y;

// Module mode
export default 1;