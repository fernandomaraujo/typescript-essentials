/* Recomendado */

// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = '#3366ff';

// Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = '#9900ff';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Valor hexadecimal de uma cor';
input.focus();

/* Não recomendado */

// Type assertion
const body3 = document.querySelector('body') as unknown as number;

// Non-null assertion (!)
const body4 = document.querySelector('body')!;
