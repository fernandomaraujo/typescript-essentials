// Tuple

// readonly não permite alterações
const dadosCliente1: readonly [number, string] = [1, 'Sheldon'];
const dadosCliente2: [number, string, string] = [2, 'Leonard', 'Hofstadter'];

// Se tiver ? é recurso opcional
const dadosCliente3: [number, string, string?] = [3, 'Penny'];
const dadosCliente4: [number, string, ...string[]] = [
  4,
  'Amy',
  'Farrah',
  'Fowler',
];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Rajesh', 'Koothrappali'];
const array2: ReadonlyArray<string> = ['Howard', 'Wolowitz'];

console.log(array1);
console.log(array2);
