import logo from '../../assets/img/logo.svg';
import './style.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Logo da DSMeta"/>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://www.instagram.com/devsuperior.ig/"> @dvsuperior.ing</a> e <a
                        href="https://www.instagram.com/walbersantostec/"> @walbersantostec</a></p>
            </div>
        </header>
    )
}

export default Header
