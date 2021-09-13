/**
 * Formas de se criar um array:
 * Array<T> (generics) ou T[] (array do tipo T)
 */

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + valor);
}

export function letrasMaisculas(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const upper = letrasMaisculas('d', 'e', 'f');

console.log(result);
console.log(concatenacao);
console.log(upper);
