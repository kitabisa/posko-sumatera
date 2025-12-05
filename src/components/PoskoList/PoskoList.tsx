'use client';

import { useState, useEffect } from 'react';
import { fetchPoskoData, RegionGroup } from '@/data';
import styles from './PoskoList.module.css';
import { PoskoCard } from './PoskoCard';

export default function PoskoList() {
    const [regionGroups, setRegionGroups] = useState<{ left: RegionGroup[], right: RegionGroup[] }>({ left: [], right: [] });
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchPoskoData();
            setRegionGroups(data);
        };
        loadData();
    }, []);

    // Get all unique regions for the chips
    const allRegions = Array.from(
        new Set([
            ...regionGroups.left.map(g => g.region),
            ...regionGroups.right.map(g => g.region)
        ])
    ).sort();

    // Filter region groups based on selected region
    const filterRegionGroups = (groups: RegionGroup[]) => {
        if (!selectedRegion) return groups;
        return groups.filter(group => group.region === selectedRegion);
    };

    const renderRegion = (group: RegionGroup, index: number) => (
        <div key={index} className={styles.regionGroup}>
            <div className={styles.list}>
                {group.items.map((item, idx) => (
                    <PoskoCard
                        key={idx}
                        region={group.region}
                        name={item.name}
                        address={item.address}
                        contact={item.contact}
                        mapUrl={item.mapUrl}
                        services={item.service ? [item.service] : []}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <div className={styles.wrapper}>
            <div className={styles.regionChipsContainer}>
                <div className={styles.regionChips}>
                    <button
                        className={`${styles.regionChip} ${!selectedRegion ? styles.regionChipActive : ''}`}
                        onClick={() => setSelectedRegion(null)}
                    >
                        Semua
                    </button>
                    {allRegions.map((region) => (
                        <button
                            key={region}
                            className={`${styles.regionChip} ${selectedRegion === region ? styles.regionChipActive : ''}`}
                            onClick={() => setSelectedRegion(region)}
                        >
                            {region}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.column}>
                    {filterRegionGroups(regionGroups.left).map(renderRegion)}
                </div>
                <div className={styles.column}>
                    {filterRegionGroups(regionGroups.right).map(renderRegion)}
                </div>
            </div>
        </div>
    );
}
