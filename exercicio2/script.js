// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

const numero1 = Number(prompt("Você terá que digitar dois números. Digite o primeiro número:"))
console.log(numero1);

const numero2 = Number(prompt("Digite o segundo número:"))
console.log(numero2);

// O primeiro numero é maior que o segundo? true

const verificacao1 = numero1 > numero2
console.log(verificacao1)

// O primeiro numero é igual ao segundo? false
const verificacao2 = numero1 === numero2
console.log(verificacao2)

// O primeiro numero é divisível pelo segundo? true
const verificacao3 = numero1 / numero2 === 0
console.log(verificacao3)

// O segundo numero é divisível pelo primeiro? true
const verificacao4 = numero2 / numero1 === 0
console.log(verificacao4)

// divisível = com resto zero