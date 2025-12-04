import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logos}>
                {/* Mocking the logos with text for now as we don't have the assets */}
                <span className={styles.logoText}>Kitabisa</span>
                <span className={styles.salamSetara}>
                    <span>salam</span>
                    <span>setara</span>
                </span>
            </div>
            <h1 className={styles.title}>DAFTAR POSKO</h1>
            <h2 className={styles.subtitle}>Warga Bantu Warga</h2>
            <p className={styles.description}>Bantuan Warga Terdampak Bencana Sumatera</p>
        </header>
    );
}
