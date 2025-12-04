import { Plus, Undo2 } from 'lucide-react';
import styles from './FloatingBar.module.css';

export default function FloatingBar() {
    return (
        <div className={styles.container}>
            <button className={styles.iconButton}>
                <Undo2 size={20} />
            </button>

            <div className={styles.avatars}>
                {/* Placeholders for avatars */}
                <div className={styles.avatar} style={{ backgroundColor: '#ffcdd2' }} />
                <div className={styles.avatar} style={{ backgroundColor: '#c8e6c9' }} />
                <div className={styles.avatar} style={{ backgroundColor: '#bbdefb' }} />
                <span className={styles.count}>+3.7K</span>
            </div>

            <button className={styles.addButton}>
                Add yours
            </button>
        </div>
    );
}
