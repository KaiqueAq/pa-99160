// let nome = 'Marta'
// let idade = 20

// console.log('A paciente', nome, 'tem', idade,'anos.')

// console.log(`A paciente ${nome} tem ${idade} anos.`)

const numeros = [1,2,4,5]

// Usando o map, crie um vetor com os números
// do vetor 'numeos' cada um multiplicado por 2.
const dobrados = numeros.map(n => n * 2)
console.log(dobrados)


// Filtre os elementeos do numeros para
// obter um novo vetor apenas com números pares.
const pares = numeros.filter(n => n % 2 == 0 )
console.log(pares)


// Usando o reduce, some todos os números do vetor 'numeros'
const somatudo = numeros.reduce((total, n)=> total + n , 0)
console.log(somatudo)