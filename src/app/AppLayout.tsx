import { ReactNode } from 'react';
import Footer from '@/components/Footer/Footer';
import styles from './AppLayout.module.css';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
