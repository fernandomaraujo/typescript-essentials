// Sendo explicíto

// Array de strings
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  pai: 'Kratos',
  filho: 'Atreus',

  exibirNome(): void {
    console.log('Família: ' + this.pai + ' ' + this.filho);
  },
};

semRetorno('Kratos', 'e', 'Atreus');
pessoa.exibirNome();

export { pessoa };
