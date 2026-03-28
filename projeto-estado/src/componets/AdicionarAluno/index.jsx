import { useState } from 'react'
import './sytle.css'

export default function AdicionarAluno() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [alunos, serAlunos] = useState([])

    const handleAdicionarAluno = (event) => {
        event.preventDefaul()
        if(nome && email){
            serAlunos([...alunos, {nome, email}])
            setEmail("")
            setNome("")
        }
    }

    return(
        <div>
            <h2>Adicionar Aluno:</h2>
            <form onSubmit={handleAdicionarAluno}> 
                <input type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                     />
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     />
                    <button type='submit'>
                        Adicionar
                    </button>
            </form>
            <hr />
            <h2>Alunos Adicionados</h2>
            <ul>
                {alunos.map((aluno, index) => (
                    <li key={index}>
                        {aluno.nome} - {aluno.email}
                    </li>
            ))}
            </ul>
        </div>
    )


}