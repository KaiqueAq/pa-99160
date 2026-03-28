import { useState } from 'react'
import './sytle.css'

export default function InfoCurso(){
    const [nome, setNome] = useState("programação de aplicativos")
    const [cargaHoraria, setcargaHoraria] = useState(90)
    const [local, setLocal] = useState("SENAI")


    return(
        <div className='Info-Curso'>
            <h2>Informações do aluno:</h2>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>CargaHoraria:</strong> {cargaHoraria}</p>
            <p><strong>Local:</strong> {local}</p>
        </div>
    )
}