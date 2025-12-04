import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logos}>
                <Image 
                    src="/logo.png" 
                    alt="Logo" 
                    width={200} 
                    height={50}
                    className={styles.logoImage}
                />
            </div>
            <h1 className={styles.title}>DAFTAR POSKO</h1>
            <h2 className={styles.subtitle}>Warga Bantu Warga</h2>
            <p className={styles.description}>Bantuan Warga Terdampak Bencana Sumatera</p>
        </header>
    );
}
