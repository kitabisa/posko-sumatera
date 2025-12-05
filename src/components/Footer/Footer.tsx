import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          <b>Disclaimer:</b> Informasi posko berasal dari publik. Mengingat kondisi di lokasi bencana, bisa terjadi perubahan lokasi atau pun informasi lainnya terkait posko.
        </p>
      </div>
    </footer>
  );
}
