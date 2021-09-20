// Utlizando valores como tipos

let x = 0b1010; // eslint-disable-line
x = 2005;

const y = 2030;
let a: 100 = 100; //eslint-disable-line

const pessoa = {
  nome: 'Ted' as const,
  sobrenome: 'Mosby',
};

export function escolhaCor(cor: 'Roxo' | 'Azul' | 'Amarelo'): string {
  return cor;
}

console.log(escolhaCor('Amarelo'), pessoa, x, y);

export default 1;
