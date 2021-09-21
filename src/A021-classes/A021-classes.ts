export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Puzzles Bar', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Ted', 'Mosby');
const colaborador2 = new Colaborador('Barney', 'Stinson');

empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
console.log(empresa1);
empresa1.mostrarColaboradores();
