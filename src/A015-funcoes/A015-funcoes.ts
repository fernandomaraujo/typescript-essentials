// Funções como tipos

// Tipo, nome, parâmetro, retorno
type MapStringCallback = (item: string) => string;

export function mapStrings(
  array: string[],
  callbackfn: MapStringCallback,
): string[] {
  // Vazio
  const novoArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const itemDoArray = array[i];
    novoArray.push(callbackfn(itemDoArray));
  }

  return novoArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
