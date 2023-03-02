import styles from './Footer.module.css';

function Footer () {
    return(
        <footer className={styles.footer}>
            <p>&copy; 2023 <span>YourMeeting. Todos os direitos reservados.</span></p>
        </footer>
    )
}

export default Footer;