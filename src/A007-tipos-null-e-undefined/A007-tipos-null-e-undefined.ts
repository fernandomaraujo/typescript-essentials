// Aqui como não foi especificado tipo, ela está com tipo any
let x;

// Atribuindo valor. daqui pra frente o x é considerado number
if (typeof x === 'undefined') {
  x = 20;
}

// Podendo utilzar ele como number
console.log(x * 2);

/*
  Estrutura dessa função:

  Abertura da função até antes do :
  Depois do : até fechamento da chave, type annotations
  E na abertura da próxima chave, corpo da função
*/

// Abertura da função
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  // Type annotations
  firstName: string;
  lastName?: string;
} {
  // Corpo da função

  return {
    firstName,
    lastName,
  };
}

// Quadrado de um número
export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;

  // Caso não
  return null;
}

const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoString * 100);
}
