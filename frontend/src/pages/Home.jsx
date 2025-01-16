import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import HeaderNavbar from '../components/HeaderNavbar.jsx';
import content from '../styles/Content.module.css';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

function Home() {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after page load
        const timer = setTimeout(() => setIsLoaded(true), 400); // Small delay to ensure smooth fade-in
        return () => clearTimeout(timer);
    }, []);


    return (<>
        <Header/>
        <HeaderNavbar/>
        <div className={content.content_main}>
            <div className={styles.banner_image}>
            {/* <div className={styles.banner_image + (isLoaded ? styles.fade_in : "")}> */}
                <div className={styles.banner_text}>
                    <h2>BIOSENSOR CORE</h2>
                </div>
                <div className={styles.banner_overlay + (isLoaded ? styles.fade_in : "")}>
                    
                </div>
            </div>
            
        </div>
        <Footer/>
    </>);
}

export default Home;
