import './style.css';

export default function HomePage() {
  return (
    <div className="home-page-container">
      <header className="home-header">
        <h1>Bem-vindo ao SENAI</h1>
        <p>Transformando o futuro da indústria brasileira com educação e tecnologia.</p>
      </header>
      
      <main className="home-main">
        <section className="home-intro">
          <h2>Nossos Cursos</h2>
          <p>
            Oferecemos uma estrutura completa e moderna para a sua formação 
            profissional e qualificação para a indústria do futuro.
          </p>
        </section>
        <section className="home-courses">
          <div className="course-card">
            <div className="course-icon">⚙️</div>
            <h3>Mecânica Industrial</h3>
            <p>Formação completa para manutenção, usinagem e projetos de equipamentos industriais.</p>
          </div>

          <div className="course-card">
            <div className="course-icon">⚡</div>
            <h3>Eletrotécnica</h3>
            <p>Capacitação em instalações elétricas, redes de distribuição e comandos elétricos.</p>
          </div>

          <div className="course-card">
            <div className="course-icon">💻</div>
            <h3>Tecnologia da Informação</h3>
            <p>Desenvolvimento de sistemas, redes de computadores e infraestrutura de TI.</p>
          </div>

          <div className="course-card">
            <div className="course-icon">🤖</div>
            <h3>Automação Industrial</h3>
            <p>Ambiente equipado para aprendizado em robótica, CLPs e processos automatizados.</p>
          </div>
        </section>
      </main>
    </div>
  );
}