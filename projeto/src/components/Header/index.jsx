
import {Link, NaviLInk} from 'react-router-dom'
import './style.css'
import logo from '../../assets/github-svgrepo-com.svg'

export default function Header() {
    return (
        <header>
            <div>
                <Link to= "/">
                <img src={logo} alt="Logo da empresa" />
                <span>Contabilidade Simples</span>
                </Link>
                <nav>
                    <NaviLInk to= "/sobre-nos">Sobre nós</NaviLInk>
                    <NaviLInk to= "/fale-conosco">Fale conosco</NaviLInk>
                </nav>
            </div>
        </header>
    )
}