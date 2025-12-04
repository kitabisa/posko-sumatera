import { fetchPoskoData, RegionGroup } from '@/data';
import styles from './PoskoList.module.css';
import { MapPin, ExternalLink } from 'lucide-react';

export default async function PoskoList() {
    const { left, right } = await fetchPoskoData();

    const renderRegion = (group: RegionGroup, index: number) => (
        <div key={index} className={styles.regionGroup}>
            {group.region && <h3 className={styles.regionTitle}>{group.region}</h3>}
            <div className={styles.list}>
                {group.items.map((item, idx) => (
                    <div key={idx} className={styles.poskoItem}>
                        <div className={styles.poskoName}>{item.name}</div>
                        <div className={styles.poskoAddress}>{item.address}</div>

                        {/* Display Service if available */}
                        {item.service && (
                            <div className={styles.poskoContact}>
                                Layanan: {item.service}
                            </div>
                        )}

                        {/* Display Map Link if available */}
                        {item.mapUrl && (
                            <a
                                href={item.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.mapLink}
                            >
                                <MapPin size={14} />
                                Lihat Lokasi
                                <ExternalLink size={12} />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                {left.map(renderRegion)}
            </div>
            <div className={styles.column}>
                {right.map(renderRegion)}
            </div>
        </div>
    );
}
