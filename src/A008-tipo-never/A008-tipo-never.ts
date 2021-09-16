// Quando se tem uma função que nunca vai retornar nada

// Um dos cenários de uso do never, é de uma função que lança um erro
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
