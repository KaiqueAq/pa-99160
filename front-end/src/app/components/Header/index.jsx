import './style.css';
import { Link } from 'react-router-dom';

export default  function Header() {
  return (
    <header className="header-container">
      <div className="top-bar">
        <h1>SENAI</h1>
      </div>
      <nav className="nav-bar">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre o SENAI</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#contato">Contato</a></li>
          <Link to="/cadastro" className="cadastro-link">Cadastro</Link>
          <Link to="/aqui" className="aqui-link">aqui</Link>
        </ul>
      </nav>
    </header>
  );
}
