import { MapPin } from 'lucide-react';
import Image from 'next/image';
import styles from './PoskoList.module.css';

interface PoskoCardProps {
  region: string;
  name: string;
  address: string;
  contact?: string;
  mapUrl?: string;
  photoUrl?: string;
  services?: string[];
}

export function PoskoCard({ region, name, address, contact, mapUrl, photoUrl, services = [] }: PoskoCardProps) {
  return (
    <div className={styles.poskoCard}>
      {photoUrl && (
        <div className={styles.coverWrapper}>
          <Image
            src={photoUrl}
            alt={name}
            width={300}
            height={220}
            className={styles.coverImage}
            style={{objectFit: 'cover'}} 
            priority
          />
          <span className={styles.regionBadge + ' ' + styles.regionBadgeOverlay}>{region}</span>
        </div>
      )}
      <div className={styles.cardHeader}>
        {!photoUrl && <span className={styles.regionBadge}>{region}</span>}
      </div>
      <div className={styles.cardTitle}>{name}</div>
      <div className={styles.cardAddressLabel}>Alamat :</div>
      <div className={styles.cardAddress}>{address}</div>
      <div className={styles.addressDivider}></div>
      <div className={styles.cardActions}>
        {contact && (
          <a
            href={`https://wa.me/${contact.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            <Image 
              src="/wa.svg" 
              alt="WhatsApp" 
              width={20} 
              height={20}
              style={{ marginRight: '8px' }}
            />
            <span>{contact}</span>
          </a>
        )}
        {mapUrl && (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapButton}
          >
            <span>Lihat lokasi</span>
          </a>
        )}
      </div>
    </div>
  );
}
