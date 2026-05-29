import './style.css';

export default function CadastroPage(  ) {
    return (
        <div className="cadastro-page-container">
            <header className="cadastro-header">
                <h1>Cadastro de Alunos</h1>
                <p>Preencha o formulário abaixo para se cadastrar no SENAI e iniciar sua jornada de aprendizado.</p>
            </header>

            <main className="cadastro-main">
                <form className="cadastro-form">
                    <div className="form-group">
                        <label htmlFor="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="curso">Curso de Interesse</label>
                        <select id="curso" name="curso" required>
                            <option value="">Selecione um curso</option>
                            <option value="mecanica">Mecânica Industrial</option>
                            <option value="eletrotecnica">Eletrotécnica</option>
                            <option value="ti">Tecnologia da Informação</option>
                            <option value="automacao">Automação Industrial</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-button">Cadastrar</button>
                </form>
            </main>
        </div>
    );
}