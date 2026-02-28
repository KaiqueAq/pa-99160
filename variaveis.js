/*function soma(a, b) {
    return a + b
    
}*/



const soma = (a, b) =>{
    return a + b
}
console.log(soma(3,2))

const palvra = ()=> {
    console.log(`jfldkjskfljlkfjkljdflsdlkf`)
    console.log(`jfldkjskfljlkfjkljdflsdlkf`)
    console.log(`jfldkjskfljlkfjkljdflsdlkf`)
    console.log(`jfldkjskfljlkfjkljdflsdlkf`)
    console.log(`jfldkjskfljlkfjkljdflsdlkf`)
}

palvra()


const list = []
// add 
list.push('maria', 'maria', 'maria')
// remove o primeiro 
list.shift()
// remove o ultimo
list.pop()
// no índice 1, romover 1 elemento.
list.splice(0,1)
console.log(list[0])


const usuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Bruno", idade: 22},
    {nome: "Carla", idade: 30},
    {nome: "Daniela", idade: 15}
    ]
console.log("Exibindo todos os usuários de vetor: ")
usuarios.forEach(usuario => {
console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})
// console.log("\nFiltrando idade maior que 18 anos: ")
// const maioresDe18 = usuarios.filter(
// usuario => usuario.idade> 18)

// maioresDe18.forEach(usuarios =>
//     console.log(`${usuarios.nome} tem ${usuarios.idade}`)
//     )
console.log("\nFiltrando idade maior que 18 anos: ");
usuarios
  .filter(usuario => usuario.idade > 18)
  .forEach(usuario => console.log(`${usuario.nome} tem ${usuario.idade}`));

console.log("\nMostrando apenas nomes:")
const listaDeNomes = usuarios.map(u => u.nome)
listaDeNomes          .forEach( nome => console.log(`${nome}`))   

console.log("\nEncontrar um usuário: ")
const usuarioEncontrado = usuarios.find(u => u.nome === "Carla")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)

console.log("\nSoma as idades de todos os usuários:")
// total acumula a soma das idades
//0 é o valor inicial da contagem
// u é o objeto para acessar a variável que contém a idade
const somaidades = usuarios.reduce((total, u) => total + u.idade, 0)
console.log(somaIdades)

console.log("Encontre a aluna Marta e mostra o nome e a média dela.")
console.log("Mostre a média geral da turma.")
console.log("Mostre o nome e a nota dos alunos com nota abaixo de 7.0.")
console.log("Mostre apenas o nome dos alunos com nota maior ou igual a 7.0.")

const listaDeAlunos = [
    {nome: 'Ana', nota: 5.0},
    { nome: 'Bruno', nota: 10.0},
    { nome: 'Carla', nota: 2.0},
    { nome: 'Andrea', nota: 7.0},
    { nome: 'Marta', nota: 6.0}
    ];