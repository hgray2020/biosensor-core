import styles from '../styles/Header.module.css'


function Header() {
    return (<div className={styles.header_container}>
        <div className={styles.header_text}>
            <h1>BIOSENSOR CORE</h1>
        </div>
        <div className={styles.logo_container}>
            <a href="/"><img className={styles.header_logo_image} src="images/ucsd-logo-long.png"/></a>
        </div>
    </div>);
}

export default Header;