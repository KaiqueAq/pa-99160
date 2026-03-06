// atividade
// crie uma função para calcular media aritmetica
nota = [5,5,5,]
const media = (n) => {
     const soma = n.reduce((total, n) => total + n , 0)
     const medianotas = soma / n.length
     return medianotas
}
console.log(media(nota))