/**
 *  Diferente do any, o tipo unknown vai requisitar que
 *  o desenvolvedor especifique o tipo do variável, antes
 *  de fazer alguma operação com ela.
 *  */

let x: unknown;

x = 100;
x = 'TypeScript';
x = 900;
x = 10;

const y = 800;

if (typeof x === 'number') console.log(x + y);
