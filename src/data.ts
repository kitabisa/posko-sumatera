export interface PoskoAPI {
  id: string;
  nama_posko: string;
  alamat: string;
  propinsi: string;
  map_url: string;
  layanan: string;
  bentuk_bantuan: string;
  no_pic?: string;
  nama_pic?: string;
  photo_url?: string;
  
}

export interface Posko {
  name: string;
  address: string;
  contact?: string; // Kept for compatibility, though API doesn't have it
  mapUrl?: string;
  service?: string;
  photoUrl?: string;
}

export interface RegionGroup {
  region: string;
  items: Posko[];
}

export async function fetchPoskoData(): Promise<{ left: RegionGroup[]; right: RegionGroup[] }> {
  try {
    const res = await fetch('https://cdn-posko.kitabisa.com/posko.json', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data: PoskoAPI[] = await res.json();

    // Group by region (propinsi)
    const groups: Record<string, Posko[]> = {};

    data.forEach((item) => {
      // Filter out invalid entries
      if (!item.nama_posko || !item.propinsi) return;

      const region = item.propinsi.trim();
      if (!groups[region]) {
        groups[region] = [];
      }

      groups[region].push({
        photoUrl: item.photo_url,
        name: item.nama_posko,
        address: item.alamat,
        mapUrl: item.map_url,
        service: item.layanan,
        contact: item.no_pic
      });
    });

    const allGroups: RegionGroup[] = Object.entries(groups).map(([region, items]) => ({
      region,
      items,
    }));

    // Split into two columns
    const midpoint = Math.ceil(allGroups.length / 2);
    const left = allGroups.slice(0, midpoint);
    const right = allGroups.slice(midpoint);

    return { left, right };
  } catch (error) {
    console.error('Error fetching posko data:', error);
    return { left: [], right: [] };
  }
}

// Keep these for fallback or type checking if needed, but they are no longer the primary source
export const leftColumnData: RegionGroup[] = [];
export const rightColumnData: RegionGroup[] = [];

