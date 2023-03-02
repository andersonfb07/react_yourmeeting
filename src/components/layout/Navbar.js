import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';
import logo from '../../images/logo_horizontal_color.png';

function Navbar () {
    return(
        <nav className={styles.navbar}>
            
              <Link to="/">
                <img src={logo} alt="layout" />
              </Link>
                <ul className={styles.list}>
                    
                    <li className={styles.item}>
                        <Link to="/ajuda">Ajuda</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/">Login</Link>
                    </li>
                </ul>
              
        </nav>
    )
}

export default Navbar;