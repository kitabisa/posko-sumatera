import { MapPin, MessageCircle } from 'lucide-react';
import styles from './PoskoList.module.css';

interface PoskoCardProps {
  region: string;
  name: string;
  address: string;
  contact?: string;
  mapUrl?: string;
  services?: string[];
}

export function PoskoCard({ region, name, address, contact, mapUrl, services = [] }: PoskoCardProps) {
  return (
    <div className={styles.poskoCard}>
      <div className={styles.cardHeader}>
        <span className={styles.regionBadge}>{region}</span>
      </div>
      <div className={styles.cardTitle}>{name}</div>
      <div className={styles.cardAddressLabel}>Alamat :</div>
      <div className={styles.cardAddress}>{address}</div>
      <div className={styles.cardActions}>
        {contact && (
          <a
            href={`https://wa.me/${contact.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            <MessageCircle size={20} />
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
      <div className={styles.cardDivider}></div>
      {services.length > 0 && (
        <div className={styles.cardServices}>
          {services.map((service, idx) => (
            <span key={idx} className={styles.serviceTag}>
              ✓ {service}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
