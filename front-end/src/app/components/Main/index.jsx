import './style.css';

function Main() {
  return (
    <main className="main-container">
      <section className="intro-section">
        <h2>Nossos Cursos</h2>
        <p>
          Oferecemos uma estrutura completa e moderna para a sua formação 
          profissional e qualificação para a indústria do futuro.
        </p>
      </section>

      <section className="cards-section">
        <div className="card">
          <div className="icon">⚙️</div>
          <h3>Mecânica Industrial</h3>
          <p>Formação completa para manutenção, usinagem e projetos de equipamentos industriais.</p>
        </div>

        <div className="card">
          <div className="icon">⚡</div>
          <h3>Eletrotécnica</h3>
          <p>Capacitação em instalações elétricas, redes de distribuição e comandos elétricos.</p>
        </div>

        <div className="card">
          <div className="icon">💻</div>
          <h3>Tecnologia da Informação</h3>
          <p>Desenvolvimento de sistemas, redes de computadores e infraestrutura de TI.</p>
        </div>

        <div className="card">
          <div className="icon">🤖</div>
          <h3>Automação Industrial</h3>
          <p>Ambiente equipado para aprendizado em robótica, CLPs e processos automatizados.</p>
        </div>
      </section>
    </main>
  );
}

export default Main;