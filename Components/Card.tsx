import styles from './card.module.css';
import Image from 'next/image'

export default function Card() {
    return (
        <div className={styles.card} style={{display: "flex", flexDirection: "column", flexWrap: "wrap"}}>
            <div className={styles.cardimage}>
                <Image src={"/image/vaccine.png"} alt='vaccineimage' fill={true} objectFit='cover'/>
            </div>
            <div className={styles.cardtext}>
                <div> Knowledge about vaccination: </div>
                <a target="_blank" style={{textDecoration: "underline", textDecorationColor: "blueviolet"}} href="https://en.wikipedia.org/wiki/Vaccination">click here</a>
            </div>
        </div>
    );
}