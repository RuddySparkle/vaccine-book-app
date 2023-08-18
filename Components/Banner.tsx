import styles from './banner.module.css';
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src="/image/background.png" alt="background" fill={true} objectFit='cover' priority/>
            <div className={styles.bannerText}>
                <h1>Empowering Health through Vaccines</h1>
                <h2>Protecting Today for a Safer Tomorrow</h2>
                <h6>Our vaccine services are dedicated to safeguarding lives by providing accessible and essential immunization, 
                    ensuring a healthier and more resilient community.</h6>
            </div>    
        </div>
    );
}