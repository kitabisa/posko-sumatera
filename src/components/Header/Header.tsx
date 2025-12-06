import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>POSKO BANTUAN WARGA</h1>
            <p className={styles.description}>Kanal informasi posko bantuan untuk warga terdampak bencana</p>          
            <p className={styles.description}>di Sumatra</p>          

        </header>
    );
}
