'use client';

import React from 'react';
import styles from './FloatingActionButton.module.css';
import Image from 'next/image';

interface FloatingActionButtonProps {
  onClick?: () => void;
  href?: string;
  icon: string;
  alt: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick, href, icon, alt }) => {
  if (href) {
    return (
      <a className={styles.fab} href={href} onClick={onClick}>
        <Image 
          src={icon}
          alt={alt}
          width={20}
          height={20}
          className={styles.icon}
        />
        <span>Tambah info posko atau buat posko</span>
      </a>
    );
  }
  return (
    <button className={styles.fab} onClick={onClick}>
      <Image 
        src={icon}
        alt={alt}
        width={20}
        height={20}
        className={styles.icon}
      />
      <span>Tambah info posko atau buat posko</span>
    </button>
  );
};

export default FloatingActionButton;
