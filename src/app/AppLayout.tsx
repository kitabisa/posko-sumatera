'use client';

import { ReactNode } from 'react';
import Footer from '@/components/Footer/Footer';
import FloatingActionButton from '@/components/FloatingActionButton/FloatingActionButton';
import styles from './AppLayout.module.css';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
      <FloatingActionButton 
        href="http://ktbs.in/bantuansumatera"
        icon="/plus-icon.svg" 
        alt="Add" 
      />
    </div>
  );
}
