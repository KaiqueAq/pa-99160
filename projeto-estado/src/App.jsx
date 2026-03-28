import { useState } from 'react'
import './App.css'
import InfoAluno from './componets/InfoAluno'
import InfoCurso from './componets/InfoCurso'
import AdicionarAluno from './componets/AdicionarAluno'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Bom dia!</h1>
    <div className='Info-Geral'>
    <AdicionarAluno/>

    <InfoAluno/>
    <hr />
    <InfoCurso/>
    </div>
    
    </>
  )
}

export default App
