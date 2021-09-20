// Interseção de dois conjutos

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // E

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

// Interseção = A
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Barney',
  sobrenome: 'Stinson',
  idade: 44,
};

console.log(pessoa);

// Module mode
export { pessoa };
