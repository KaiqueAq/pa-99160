import './style.css';
import { useEffect, useState } from 'react'; // Removi o 'use' que estava sobrando
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function ListaAlunosPage() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function fetchAlunos() {
            try {
                const resposta = await api.get('/alunos');
                setAlunos(resposta.data);
            } catch (error) {
                toast.error('Ocorreu um erro ao carregar a lista de alunos. Por favor, tente novamente.');
                console.error('Erro ao buscar alunos:', error);
            }
        }
        fetchAlunos();
    }, []);

    return (
        <div className="lista-page-container">
            <header className="lista-header">
                <h1>Lista de Alunos Cadastrados</h1>
                <p>Abaixo está a lista de alunos que se cadastraram no SENAI. Bem-vindo à nossa comunidade de aprendizado!</p>
            </header>

            {/* Movi a tabela para cá, dentro de um MAIN e uma DIV responsiva */}
            <main className="lista-main">
                <div className="table-wrapper">
                    <table className="alunos-table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Curso de Interesse</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunos.map((aluno) => (
                                <tr key={aluno.email}>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.email}</td>
                                    <td>{aluno.telefone}</td>
                                    <td>
                                        {/* Adicionei um span para fazer o curso parecer uma "etiqueta" */}
                                        <span className="curso-badge">{aluno.curso}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}