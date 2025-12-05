import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
          <p className={styles.copyright}>
          Support oleh:
          </p>
        <Image
          src="/logo.png"
          alt="Warga Bantu Warga Logo"
          width={200}
          height={40}
          className={styles.logo}
          priority
        />
        <p className={styles.copyright}>
          <b>Disclaimer:</b> Karena kondisi dan kebutuhan di lapangan berubah-ubah maka informasi posko akan selalu di update secara berkala.
        </p>
      </div>
    </footer>
  );
}
