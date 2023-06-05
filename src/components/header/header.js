import './header.css';
import logo from './logo.svg'

function Header() {
    return (

        <nav className='CS81U'>
            <div className="logo App-logo"><img src={logo} className="App-logo" alt="logo" /></div>
            <div className="coffee_name"><p>ECLECTIQUE MARSEILLE</p></div>
            <a href='/' className='contact'>
                <span><p>FIND US</p></span>
                <span><p>ABOUT US</p></span>
            </a>
        </nav>

    );
}

export default Header;