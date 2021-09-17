/**
 * Uma variável, um parâmetro ou um retorno de função
 * pode ter mais de um tipo
 *  */

// Adição ou concatenação
function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  // Se o tipo for number, soma
  if (typeof a === 'number' && typeof b === 'number') return a + b;

  // Caso não, concatena
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
console.log(addOrConcat(true, true));
