// Utilize any em apenas em último caso

// Quando o tipo não está especificado, recebe o tipo any

// Declaração implícita
/*
function showMessage(msg) {
  return msg;
} */

// Declaração explícita
function showAnotherMessage(msg: any) {
  return msg;
}

// Exemplos de parâmetros sendo passados

console.log(showAnotherMessage([1, 2, 3])); // Array
console.log(showAnotherMessage('God of War')); // String
console.log(showAnotherMessage(1)); // Number
