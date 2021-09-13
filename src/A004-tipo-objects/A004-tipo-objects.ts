// Tudo em JS é objeto

const objetoA: {
  readonly chaveA: string;
  chaveB: string;

  // Chave opcional
  chaveC?: string;

  // Caso seja necessário adicionar mais chaves
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);
