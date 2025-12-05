import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>DAFTAR POSKO</h1>
            <h2 className={styles.title}>WARGA BANTU WARGA</h2>
            <p className={styles.description}>Bantuan Warga Terdampak Bencana Sumatera</p>
            
            <div className={styles.actionCards}>
                <div className={styles.actionCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}>
                            <Image 
                                src="/avatar.svg" 
                                alt="Avatar" 
                                width={32} 
                                height={32}
                                className={styles.avatarImage}
                            />
                        </div>
                        <div className={styles.arrowIcon}>
                            <Image 
                                src="/arrow.svg" 
                                alt="Arrow" 
                                width={20} 
                                height={20}
                            />
                        </div>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.cardText}>
                            <div className={styles.cardTitle}>Buat Posko</div>
                            <div className={styles.cardTitle}>Penyaluran</div>
                        </div>
                    </div>
                </div>
                <div className={styles.actionCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}>
                            <Image 
                                src="/avatar.svg" 
                                alt="Avatar" 
                                width={32} 
                                height={32}
                                className={styles.avatarImage}
                            />
                        </div>
                        <div className={styles.arrowIcon}>
                            <Image 
                                src="/arrow.svg" 
                                alt="Arrow" 
                                width={20} 
                                height={20}
                            />
                        </div>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.cardText}>
                            <div className={styles.cardTitle}>Tambah Posko</div>
                            <div className={styles.cardTitle}>di Sekitar kamu</div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
