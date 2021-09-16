enum Cores {
  ROXO, // 0
  AZUL, // 1
  AMARELO, // 2
}

// Pode se repetir o nome, quando se deseja unir os enums
enum Cores {
  VERMELHO = 'VERMELHO',
  PRETO = 201,
  ROSA,
}

export function escolhaACor(cor: Cores): void {
  // Cores[indice] - Pode se também enviar um valor númerico
  console.log(Cores[cor]);
}

escolhaACor(0);
