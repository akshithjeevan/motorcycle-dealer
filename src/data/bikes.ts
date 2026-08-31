export interface Bike {
  id: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  price: number;
  kilometers: number;
  engineCC: number;
  mileage: number;
  fuelType: 'Petrol' | 'Electric';
  transmission: 'Manual' | 'Automatic';
  ownership: '1st Owner' | '2nd Owner' | '3rd Owner';
  location: string;
  condition: 'Mint' | 'Excellent' | 'Good';
  bikeType: 'Commuter' | 'Cruiser' | 'Sport' | 'Naked' | 'Adventure' | 'Scooter';
  images: string[];
  features: string[];
  inspectionScore: number;
  insurance: string;
  registration: string;
  availability: 'Available' | 'Reserved' | 'Sold';
  featured?: boolean;
}

export interface WorkshopService {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  estimatedTime: string;
  iconName: string;
  popular?: boolean;
}

export const mockBikes: Bike[] = [
  {
    id: 're-classic-350-2022',
    brand: 'Royal Enfield',
    model: 'Classic 350',
    variant: 'Dark Stealth Black',
    year: 2022,
    price: 165000,
    kilometers: 14500,
    engineCC: 349,
    mileage: 35,
    fuelType: 'Petrol',
    transmission: 'Manual',
    ownership: '1st Owner',
    location: 'Bangalore, KA',
    condition: 'Mint',
    bikeType: 'Cruiser',
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Dual Channel ABS', 'Tubeless Tyres', 'USB Charging', 'Tripper Navigation', 'Service Record Available'],
    inspectionScore: 96,
    insurance: 'Comprehensive valid till Oct 2026',
    registration: 'KA-01 (Bangalore Central)',
    availability: 'Available',
    featured: true
  },
  {
    id: 'yamaha-r15-v4-2023',
    brand: 'Yamaha',
    model: 'R15 V4',
    variant: 'Racing Blue M',
    year: 2023,
    price: 178000,
    kilometers: 8900,
    engineCC: 155,
    mileage: 42,
    fuelType: 'Petrol',
    transmission: 'Manual',
    ownership: '1st Owner',
    location: 'Kochi, KL',
    condition: 'Mint',
    bikeType: 'Sport',
    images: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Quickshifter', 'Traction Control', 'Upside Down Forks', 'Y-Connect Bluetooth', 'Single Owner'],
    inspectionScore: 98,
    insurance: 'Zero Dep valid till Nov 2026',
    registration: 'KL-07 (Ernakulam)',
    availability: 'Available',
    featured: true
  },
  {
    id: 'ktm-duke-250-2022',
    brand: 'KTM',
    model: 'Duke 250',
    variant: 'Dark Galvano',
    year: 2022,
    price: 192000,
    kilometers: 12300,
    engineCC: 248,
    mileage: 30,
    fuelType: 'Petrol',
    transmission: 'Manual',
    ownership: '1st Owner',
    location: 'Bangalore, KA',
    condition: 'Excellent',
    bikeType: 'Naked',
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Slipper Clutch', 'Supermoto ABS', 'LED Headlight', 'WP Apex Suspension'],
    inspectionScore: 94,
    insurance: 'Comprehensive valid till Aug 2026',
    registration: 'KA-03 (Indiranagar)',
    availability: 'Available',
    featured: true
  },
  {
    id: 'honda-cb350-2022',
    brand: 'Honda',
    model: 'CB350',
    variant: 'Hness DLX Pro Dual Tone',
    year: 2022,
    price: 170000,
    kilometers: 9600,
    engineCC: 348,
    mileage: 38,
    fuelType: 'Petrol',
    transmission: 'Manual',
    ownership: '1st Owner',
    location: 'Chennai, TN',
    condition: 'Mint',
    bikeType: 'Cruiser',
    images: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['HSTC Traction Control', 'Voice Control System', 'All-LED Lighting', 'Assist & Slipper Clutch'],
    inspectionScore: 97,
    insurance: 'Valid till Jan 2027',
    registration: 'TN-09 (T. Nagar)',
    availability: 'Available',
    featured: true
  },
  {
    id: 'tvs-apache-rtr-200-2023',
    brand: 'TVS',
    model: 'Apache RTR 200 4V',
    variant: 'Dual Channel ABS with Ride Modes',
    year: 2023,
    price: 132000,
    kilometers: 7800,
    engineCC: 197,
    mileage: 40,
    fuelType: 'Petrol',
    transmission: 'Manual',
    ownership: '1st Owner',
    location: 'Hyderabad, TS',
    condition: 'Mint',
    bikeType: 'Naked',
    images: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['3 Ride Modes (Rain/Urban/Sport)', 'Adjustable Front Suspension', 'SmartXonnect Bluetooth', 'Glide Through Tech'],
    inspectionScore: 95,
    insurance: 'Comprehensive valid till Dec 2026',
    registration: 'TS-08 (Kondapur)',
    availability: 'Available',
    featured: true
  },
  {
    id: 'bajaj-dominar-400-2021',
    brand: 'Bajaj',
    model: 'Dominar 400',
    variant: 'Aurora Green Touring Edition',
    year: 2021,
    price: 158000,
    kilometers: 18200,
    engineCC: 373,
    mileage: 28,
    fuelType: 'Petrol',
    transmission: 'Manual',
    ownership: '1st Owner',
    location: 'Pune, MH',
    condition: 'Excellent',
    bikeType: 'Cruiser',
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Touring Visor & Engine Guard', 'Navigation Stay', 'USD Forks', 'Dual Channel ABS'],
    inspectionScore: 92,
    insurance: 'Comprehensive valid till Mar 2026',
    registration: 'MH-12 (Pune West)',
    availability: 'Available',
    featured: true
  },
  {
    id: 're-hunter-350-2023',
    brand: 'Royal Enfield',
    model: 'Hunter 350',
    variant: 'Rebel Blue',
    year: 2023,
    price: 148000,
    kilometers: 6400,
    engineCC: 349,
    mileage: 36,
    fuelType: 'Petrol',
    transmission: 'Manual',
    ownership: '1st Owner',
    location: 'Bangalore, KA',
    condition: 'Mint',
    bikeType: 'Commuter',
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Lightweight Chassis', 'Dual Channel ABS', 'Custom Exhaust Note', 'Low Seat Height'],
    inspectionScore: 98,
    insurance: 'Zero Dep valid till May 2027',
    registration: 'KA-05 (Jayanagar)',
    availability: 'Available',
    featured: false
  },
  {
    id: 'yamaha-mt-15-2023',
    brand: 'Yamaha',
    model: 'MT-15 V2',
    variant: 'Cyan Storm',
    year: 2023,
    price: 152000,
    kilometers: 7100,
    engineCC: 155,
    mileage: 45,
    fuelType: 'Petrol',
    transmission: 'Manual',
    ownership: '1st Owner',
    location: 'Kochi, KL',
    condition: 'Mint',
    bikeType: 'Naked',
    images: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['VVA Engine Tech', 'USD Front Suspension', 'Aluminum Swingarm', 'LED Projector'],
    inspectionScore: 97,
    insurance: 'Comprehensive valid till Sep 2026',
    registration: 'KL-01 (Trivandrum)',
    availability: 'Available',
    featured: false
  },
  {
    id: 'hero-xpulse-200-2022',
    brand: 'Hero',
    model: 'Xpulse 200 4V',
    variant: 'Trail Blue',
    year: 2022,
    price: 118000,
    kilometers: 11200,
    engineCC: 199,
    mileage: 38,
    fuelType: 'Petrol',
    transmission: 'Manual',
    ownership: '1st Owner',
    location: 'Coimbatore, TN',
    condition: 'Excellent',
    bikeType: 'Adventure',
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Long Travel Suspension', 'Turn-by-Turn Navigation', 'Luggage Plate', 'Knuckle Guards'],
    inspectionScore: 93,
    insurance: 'Comprehensive valid till Oct 2026',
    registration: 'TN-37 (Coimbatore)',
    availability: 'Available',
    featured: false
  },
  {
    id: 'suzuki-gixxer-250-2022',
    brand: 'Suzuki',
    model: 'Gixxer SF 250',
    variant: 'Metallic Matte Black',
    year: 2022,
    price: 145000,
    kilometers: 13800,
    engineCC: 249,
    mileage: 35,
    fuelType: 'Petrol',
    transmission: 'Manual',
    ownership: '1st Owner',
    location: 'Bangalore, KA',
    condition: 'Excellent',
    bikeType: 'Sport',
    images: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['SOCS Oil Cooling System', 'Clip-on Handlebars', 'Dual Channel ABS', 'Full Digital Cluster'],
    inspectionScore: 94,
    insurance: 'Third Party valid till 2027',
    registration: 'KA-51 (Electronic City)',
    availability: 'Available',
    featured: false
  }
];

export const mockWorkshopServices: WorkshopService[] = [
  {
    id: 'general-service',
    title: 'General Service',
    description: 'Comprehensive 40-check inspection, engine oil replacement, oil filter change, spark plug cleanup, and chain lube.',
    startingPrice: 499,
    estimatedTime: '2 - 3 Hours',
    iconName: 'Wrench',
    popular: true
  },
  {
    id: 'engine-service',
    title: 'Engine Repair & Tuning',
    description: 'Complete engine overhaul, valve clearance adjustment, carbon cleaning, and fuel injection synchronization.',
    startingPrice: 1499,
    estimatedTime: '4 - 6 Hours',
    iconName: 'Cpu'
  },
  {
    id: 'oil-change',
    title: 'Synthetic Oil Change',
    description: 'Premium Motul / Yamalube / Liquid Moly synthetic engine oil replacement with fresh filter element.',
    startingPrice: 399,
    estimatedTime: '30 Mins',
    iconName: 'Droplet',
    popular: true
  },
  {
    id: 'brake-service',
    title: 'Brake Servicing & Bleeding',
    description: 'Brake pad replacement, disc rotor inspection, DOT 4 fluid flush, and hydraulic line pressure testing.',
    startingPrice: 599,
    estimatedTime: '1 Hour',
    iconName: 'Disc'
  },
  {
    id: 'tyre-replacement',
    title: 'Tyre Fitting & Balancing',
    description: 'MRF, Pirelli, Metzeler & Michelin tubeless tyre installation with precision wheel balancing.',
    startingPrice: 999,
    estimatedTime: '45 Mins',
    iconName: 'Circle'
  },
  {
    id: 'detailing',
    title: 'Washing & Ceramic Detailing',
    description: 'Pressure foam wash, degreasing, rust protection, and multi-layer ceramic paint protection coating.',
    startingPrice: 799,
    estimatedTime: '2 Hours',
    iconName: 'Sparkles',
    popular: true
  }
];
