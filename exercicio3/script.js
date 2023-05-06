// # Exercício 3

// Parte 1
// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

// a) 5 é maior que 20 e também é menor que 2;
const op1 = 5>20 && 5<2
console.log(op1);

// b) 5 é igual a 5 ou é igual a “5”;
const op2 = 5===5 || 5==="5"
console.log(op2);

// c) negação de (vinte é maior que cinquenta)
const op3 = !20>50
console.log(op3);

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const op4 = !(20>50 || 50>70)
console.log(op4);


// Parte 2

// Coleta de dados do enunciado. Criando as variáveis:

// a) Auxílio creche por filho:  R$45,50
let salarioFixo = 2000
let creche = 45.50
let filhos = 2
let auxilioCreche = creche * filhos

// b) Comissão de 10% sobre o total de vendas mensal
let vendasJan = 5784.50
let vendasFev = 3418.41
let vendasMar = 4124.10
let vendasAbr = 1874.00
let vendasMai = 7000.00
let vendasJun = 9450.00

let comissaoJan = vendasJan * 0.1
let comissaoFev = vendasFev * 0.1
let comissaoMar = vendasMar * 0.1
let comissaoAbr = vendasAbr * 0.1
let comissaoMai = vendasMai * 0.1
let comissaoJun = vendasJun * 0.1

// c) Total de vendas dos meses de janeiro a junho:
let vendasTotal = vendasJan + vendasFev + vendasMar + vendasAbr + vendasMai + vendasJun

// d)  Desconto do INSS 5% do salário
let descontoInssJan = (salarioFixo + comissaoJan) * 0.05
let descontoInssFev = (salarioFixo + comissaoFev) * 0.05
let descontoInssMar = (salarioFixo + comissaoMar) * 0.05
let descontoInssAbr = (salarioFixo + comissaoAbr) * 0.05
let descontoInssMai = (salarioFixo + comissaoMai) * 0.05
let descontoInssJun = (salarioFixo + comissaoJun) * 0.05
let descontoInssTotal = descontoInssJan + descontoInssFev + descontoInssMar + descontoInssAbr + descontoInssMai + descontoInssJun 


// Calcule:

// 1) O salário fixo mais o auxílio creche
console.log("1. Salario fixo + auxilio creche =", salarioFixo + auxilioCreche);

// 2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
console.log("2. Comissão Jan:",comissaoJan);

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
console.log("3. Desconto INSS Jan:", descontoInssJan.toFixed(2));

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
let salarioJan = salarioFixo + auxilioCreche + comissaoJan - descontoInssJan
let salarioFev = salarioFixo + auxilioCreche + comissaoFev - descontoInssFev
let salarioMar = salarioFixo + auxilioCreche + comissaoMar - descontoInssMar
let salarioAbr = salarioFixo + auxilioCreche + comissaoAbr - descontoInssAbr
let salarioMai = salarioFixo + auxilioCreche + comissaoMai - descontoInssMai
let salarioJun = salarioFixo + auxilioCreche + comissaoJun - descontoInssJun
let salarioTotal = salarioJan + salarioFev + salarioMar + salarioAbr + salarioMai + salarioJun

console.log("4. Salario Jan:", salarioJan.toFixed(2));
console.log("Salario Fev:", salarioFev.toFixed(2));
console.log("Salario Mar:", salarioMar.toFixed(2));
console.log("Salario Abr:", salarioAbr.toFixed(2));
console.log("Salario Mai:", salarioMai.toFixed(2));
console.log("Salario Jun:", salarioJun.toFixed(2));

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//   (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
let mediaSalarial = salarioTotal / 6
console.log("5. Media salarial mensal:", mediaSalarial.toFixed(2));