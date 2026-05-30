import './style.css';
import { useState } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function CadastroPage(  ) {
    //useState é um hook do React que permite adicionar estado a componentes funcionais. Ele retorna um par de valores: o estado atual e uma função para atualizá-lo. 
    // No exemplo abaixo, estamos usando useState para criar variáveis de estado para armazenar os valores dos campos do formulário (nome, email, telefone, curso) 
    // e um estado adicional (estaEnviando) para controlar o status do envio do formulário.
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [curso, setCurso] = useState('');
    const [estaEnviando, setEstaEnviando] = useState(false);

    function limparCamposDoFormulario() {
        setNome('');
        setEmail('');
        setTelefone('');
        setCurso('');
    }
    async function envioDoFormulario(e) {
        e.preventDefault();
        setEstaEnviando(true);

        const dadosDoFormulario = {
            nome,
            email,
            telefone,
            curso,
        };
        try {
            // se der certo 
            const resposta = await api.post('/alunos', dadosDoFormulario);
            toast.success(resposta.data.mensagem ||'Cadastro realizado com sucesso!');
            limparCamposDoFormulario();
        } catch (error) {
            // se der errado
            const mensagemDoServidor = error.response?.data?.mensagem || 'Ocorreu um erro ao realizar o cadastro. Por favor, tente novamente.';
            toast.error(mensagemDoServidor);
            console.error('Erro ao enviar o formulário:', error);
        } finally {
            // Executa sempre, independente do resultado
            setEstaEnviando(false);
        }
    }
    

    return (
        <div className="cadastro-page-container">
            <header className="cadastro-header">
                <h1>Cadastro de Alunos</h1>
                <p>Preencha o formulário abaixo para se cadastrar no SENAI e iniciar sua jornada de aprendizado.</p>
            </header>

            <main className="cadastro-main">
                <form className="cadastro-form" onSubmit={envioDoFormulario}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" required value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="curso">Curso de Interesse</label>
                        <select id="curso" name="curso" required value={curso} onChange={(e) => setCurso(e.target.value)}>
                            <option value="">Selecione um curso</option>
                            <option value="mecanica">Mecânica Industrial</option>
                            <option value="eletrotecnica">Eletrotécnica</option>
                            <option value="ti">Tecnologia da Informação</option>
                            <option value="automacao">Automação Industrial</option>
                        </select>
                    </div>

                    <button type="submit" disabled={estaEnviando} className="submit-button">
                        {estaEnviando ? 'Enviando...' : 'Cadastrar'}
                    </button>
                </form>
            </main>
        </div>
    );
}