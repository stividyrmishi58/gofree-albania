import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Shield, 
  Wrench, 
  Navigation, 
  Camera, 
  Users, 
  Instagram, 
  Facebook, 
  Globe, 
  Mail, 
  Phone,
  ChevronRight,
  Star,
  Bike,
  CheckCircle2,
  TrendingUp,
  Search,
  Share2,
  Video,
  Mountain,
  ArrowUpRight,
  Menu,
  X,
  Info,
  User,
  CreditCard,
  Clock,
  MessageSquare,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TourPackage, RentalBike, MarketingStrategy, Spot } from './types';

const HelmetLogo = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2C7 2 3 6 3 11v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-3c0-5-4-9-9-9z" />
    <path d="M3 14v1c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-1" />
    <path d="M7 14h10" />
    <path d="M12 18v3" />
    <path d="M8 21h8" />
    <path d="M12 11m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </svg>
);

const packages: TourPackage[] = [
  {
    id: '1',
    name: 'Tirana & Surroundings Explorer',
    duration: '8-10 Hours',
    difficulty: 'Easy',
    price: '€120',
    description: 'Discover the top spots of Tirana and its neighboring cities. A perfect blend of urban culture and nearby natural escapes.',
    includes: ['Expert Guide', 'Fuel', 'Lunch', 'Safety Gear', 'GoPro Footage'],
    includedGear: ['Helmet', 'Basic Riding Jacket', 'Gloves'],
    optionalAddons: [
      { name: 'Passenger Seat Upgrade', price: 30, priceType: 'flat' },
      { name: 'Premium Insurance', price: 15, priceType: 'flat' },
      { name: 'GoPro Hero 12 Rental', price: 25, priceType: 'flat' }
    ],
    image: 'https://www.padgettsmotorcycles.com/wp-content/uploads/mlo-assets/news/8401485x950x500_FFFFFF_L_0-950x500.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '2',
    name: 'Historical North & South Odyssey',
    duration: '1-2 Days',
    difficulty: 'Moderate',
    price: '€350',
    description: 'A deep dive into the most beautiful historical cities of Albania, from the rugged North to the sun-kissed South.',
    includes: ['Expert Guide', 'All Meals', 'Hotel Accommodation', 'Technical Support', 'Airport Transfers'],
    includedGear: ['Off-road Helmet', 'Armor Jacket', 'Enduro Gloves', 'Knee Guards'],
    optionalAddons: [
      { name: 'Single Room Upgrade', price: 40, priceType: 'nightly' },
      { name: 'Premium Insurance Upgrade', price: 20, priceType: 'daily' },
      { name: 'Riding Boots Rental', price: 15, priceType: 'daily' }
    ],
    image: 'https://wallpapercave.com/wp/wp9261504.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '3',
    name: 'Albania & Cross-Border Adventure',
    duration: '2-3 Days',
    difficulty: 'Challenging',
    price: '€650',
    description: 'The ultimate freedom. Explore the hidden gems inside Albania or cross the borders for a multi-country Balkan experience.',
    includes: ['Border Permits', 'Full Board', 'Spare Bike Access', 'Professional Photography', 'Technical Support'],
    includedGear: ['Premium Touring Helmet', 'Gore-Tex Suit', 'Winter/Summer Gloves', 'Boots'],
    optionalAddons: [
      { name: 'Personal Mechanic Service', price: 150, priceType: 'daily' },
      { name: 'Satellite Phone Rental', price: 10, priceType: 'daily' },
      { name: 'Camping Gear Set', price: 50, priceType: 'flat' }
    ],
    image: 'https://wallpapercave.com/wp/wp4183252.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '4',
    name: 'VIP Custom Adventure',
    duration: 'Custom',
    difficulty: 'Tailored',
    price: 'Custom',
    description: 'The ultimate personalized experience. You choose every detail, from the bikes and spots to the premium services. Perfect for solo riders or groups with passengers.',
    includes: ['Personalized Itinerary', 'Private Guide', 'Premium Logistics', 'VIP Support', 'All-Inclusive Options'],
    includedGear: ['Full Premium Set', 'Custom Fitting', 'All Weather Gear'],
    optionalAddons: [
      { name: 'Passenger Seat Upgrade', price: 50, priceType: 'daily' },
      { name: 'Private Chef Service', price: 200, priceType: 'daily' },
      { name: 'Drone Pilot / Photographer', price: 150, priceType: 'daily' }
    ],
    image: 'https://www.padgettsmotorcycles.com/wp-content/uploads/mlo-assets/news/8401485x950x500_FFFFFF_L_0-950x500.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];

const rentalBikes: (RentalBike & { specs: string[] })[] = [
  {
    id: 'b1',
    model: 'Honda X-ADV 2025',
    type: 'Adventure Crossover',
    pricePerDay: '€110',
    features: ['DCT Transmission', 'Smart Key', 'Adjustable Windscreen', 'Under-seat Storage'],
    specs: ['745cc Parallel-Twin', '58 HP', '236kg Weight', '820mm Seat Height'],
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b2',
    model: 'KTM 790 Adventure 2022',
    type: 'Hardcore Adventure',
    pricePerDay: '€130',
    features: ['Quickshifter+', 'Rally Mode', 'WP Suspension', 'Cornering ABS'],
    specs: ['799cc LC8c Engine', '95 HP', '189kg Dry Weight', '850mm Seat Height'],
    image: 'https://images.unsplash.com/photo-1594149929911-78975a43d4f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b3',
    model: 'Honda VFR 800X Crossrunner',
    type: 'Sport Adventure',
    pricePerDay: '€95',
    features: ['V4 Engine', 'Traction Control', 'Heated Grips', 'Comfort Seat'],
    specs: ['782cc V4-VTEC', '106 HP', '242kg Weight', '815mm Seat Height'],
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800'
  }
];

const topSpots: Spot[] = [
  {
    id: 's1',
    name: 'Theth National Park',
    location: 'Shkodër County',
    region: 'North',
    description: 'The heart of the Albanian Alps. Famous for the Blue Eye and the Lock-in Tower.',
    history: 'Inhabited for centuries by highlanders, Theth remained isolated until recently, preserving its unique "Kanun" traditions and stone architecture. The Lock-in Tower served as a refuge during blood feuds.',
    image: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&q=80&w=800',
    coords: { x: 45, y: 15 },
    basePrice: 45
  },
  {
    id: 's2',
    name: 'Llogara Pass',
    location: 'Vlorë County',
    region: 'South',
    description: 'A dramatic mountain pass reaching 1,027m, offering panoramic views of the Ionian Sea.',
    history: 'Julius Caesar himself crossed this pass in 48 BC during his pursuit of Pompey. Today, it marks the divide between the Adriatic and Ionian seas.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
    coords: { x: 35, y: 70 },
    basePrice: 35
  },
  {
    id: 's3',
    name: 'Gjirokastër',
    location: 'Stone City',
    region: 'South',
    description: 'UNESCO World Heritage site with unique Ottoman architecture and a massive castle.',
    history: 'Known as the "City of Stone," it was a major center during the Ottoman Empire. The castle, one of the largest in the Balkans, dates back to the 12th century.',
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=800',
    coords: { x: 55, y: 85 },
    basePrice: 50
  },
  {
    id: 's4',
    name: 'Bovilla Lake',
    location: 'Tirana',
    region: 'North',
    description: 'A turquoise reservoir surrounded by limestone peaks, perfect for a short adventure ride.',
    history: 'Constructed in the 1990s to provide water for Tirana, it has quickly become a favorite spot for climbers and adventure seekers due to its dramatic canyons.',
    image: 'https://images.unsplash.com/photo-1471440671318-55bdbb772f93?auto=format&fit=crop&q=80&w=800',
    coords: { x: 50, y: 45 },
    basePrice: 25
  },
  {
    id: 's5',
    name: 'Butrint',
    location: 'Sarandë',
    region: 'South',
    description: 'Ancient Greek and later Roman city. A microcosm of Mediterranean history.',
    history: 'Founded by exiles from Troy, Butrint was a major port and religious center. It features a well-preserved theater, basilica, and Venetian fortress.',
    image: 'https://images.unsplash.com/photo-1564333319159-27017ac4f58c?auto=format&fit=crop&q=80&w=800',
    coords: { x: 50, y: 95 },
    basePrice: 55
  },
  {
    id: 's6',
    name: 'Krujë Castle',
    location: 'Krujë',
    region: 'North',
    description: 'The center of Albanian resistance against the Ottoman Empire.',
    history: 'The stronghold of national hero Skanderbeg, who defended the castle against three massive Ottoman sieges in the 15th century.',
    image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&q=80&w=800',
    coords: { x: 45, y: 40 },
    basePrice: 30
  },
  {
    id: 's7',
    name: 'Vjosa River',
    location: 'Përmet',
    region: 'South',
    description: 'The last wild river in Europe, offering pristine nature and challenging gravel tracks.',
    history: 'Declared a National Park in 2023, the Vjosa is one of the few remaining large river systems in Europe that flows freely from source to sea.',
    image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&q=80&w=800',
    coords: { x: 65, y: 80 },
    basePrice: 40
  },
  {
    id: 's8',
    name: 'Lake Ohrid',
    location: 'Pogradec / N. Macedonia',
    region: 'South',
    description: 'One of Europe\'s oldest and deepest lakes, a UNESCO World Heritage site.',
    history: 'Shared between Albania and North Macedonia, it is one of the world\'s oldest lakes, with a unique ecosystem of over 200 endemic species.',
    image: 'https://images.unsplash.com/photo-1594149929911-78975a43d4f5?auto=format&fit=crop&q=80&w=800',
    coords: { x: 75, y: 55 },
    basePrice: 45
  },
  {
    id: 's9',
    name: 'Berat',
    location: 'City of 1000 Windows',
    region: 'South',
    description: 'A UNESCO World Heritage site known for its white Ottoman houses and massive castle.',
    history: 'Continuously inhabited for over 2400 years, Berat is a living museum. Its castle is unique as people still live within its ancient walls today.',
    image: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&q=80&w=800',
    coords: { x: 50, y: 65 },
    basePrice: 35
  },
  {
    id: 's10',
    name: 'Valbona Valley',
    location: 'Tropojë',
    region: 'North',
    description: 'The "Gem of the Alps," offering some of the most dramatic mountain scenery in the Balkans.',
    history: 'Named after the Valbona River, this valley is the gateway to the high peaks of the Accursed Mountains. It remains one of the most pristine wilderness areas in Europe.',
    image: 'https://images.unsplash.com/photo-1471440671318-55bdbb772f93?auto=format&fit=crop&q=80&w=800',
    coords: { x: 55, y: 10 },
    basePrice: 50
  },
  {
    id: 's11',
    name: 'Ksamil Islands',
    location: 'The Ionian Pearl',
    region: 'South',
    description: 'Crystal clear turquoise waters and small islands accessible by boat or swimming.',
    history: 'Part of the Butrint National Park, Ksamil was built in the 1960s. It has since become the most famous beach destination in Albania.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
    coords: { x: 38, y: 98 },
    basePrice: 60
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'tours' | 'rentals' | 'spots' | 'guide'>('tours');
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    packageId: '',
    spotId: '',
    travelerType: 'solo' as 'solo' | 'group' | 'passenger',
    groupSize: 1,
    hasPassenger: false,
    bikeId: '',
    startDate: '',
    endDate: '',
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    selectedAddons: [] as string[],
    isCustomizing: false,
    inquiry: ''
  });

  const calculateTotalPrice = () => {
    if (bookingData.packageId === '4') return 0; // Custom price handled later or as base
    let total = 0;
    
    // Calculate days
    let days = 1;
    if (bookingData.startDate && bookingData.endDate) {
      const start = new Date(bookingData.startDate);
      const end = new Date(bookingData.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
    }

    // Rental only logic
    if (bookingData.packageId === 'rental') {
      const bike = rentalBikes.find(b => b.id === bookingData.bikeId);
      if (bike) {
        total = parseInt(bike.pricePerDay.replace('€', '')) * days;
      }
      return total * (bookingData.travelerType === 'group' ? bookingData.groupSize : 1);
    }

    const pkg = packages.find(p => p.id === bookingData.packageId);
    if (pkg) {
      total += parseInt(pkg.price.replace('€', '')) || 0;
      bookingData.selectedAddons.forEach(addonName => {
        const addon = pkg.optionalAddons.find(a => a.name === addonName);
        if (addon) {
          if (addon.priceType === 'daily' || addon.priceType === 'nightly') {
            total += addon.price * days;
          } else {
            total += addon.price;
          }
        }
      });
    }

    const spot = topSpots.find(s => s.id === bookingData.spotId);
    if (spot) {
      total += spot.basePrice;
    }

    const bike = rentalBikes.find(b => b.id === bookingData.bikeId);
    if (bike) {
      total += parseInt(bike.pricePerDay.replace('€', '')) * days;
    }

    if (bookingData.travelerType === 'passenger') total += 50; // Extra for passenger
    
    // Multiply by group size
    return total * (bookingData.travelerType === 'group' ? bookingData.groupSize : 1);
  };

  const getVipSteps = () => [1, 3, 2, 4, 5, 6, 7, 8];
  const getStandardSteps = () => {
    if (bookingData.isCustomizing) {
      return [1, 3, 4, 5, 6, 7, 8];
    }
    return [1, 3, 6, 7, 8];
  };
  const getRentalSteps = () => [1, 4, 6, 7, 8];
  const getInquirySteps = () => [10, 6];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const steps = bookingData.packageId === '4' 
      ? getVipSteps() 
      : bookingData.packageId === 'rental' 
        ? getRentalSteps() 
        : bookingData.packageId === 'inquiry'
          ? getInquirySteps()
          : getStandardSteps();
    const currentIndex = steps.indexOf(bookingStep);
    
    if (currentIndex < steps.length - 1) {
      setBookingStep(steps[currentIndex + 1]);
    } else {
      // Final submission logic
      console.log('Booking submitted:', bookingData);
      setBookingStep(9); // Success state
    }
  };

  const handleBack = () => {
    const steps = bookingData.packageId === '4' 
      ? getVipSteps() 
      : bookingData.packageId === 'rental' 
        ? getRentalSteps() 
        : bookingData.packageId === 'inquiry'
          ? getInquirySteps()
          : getStandardSteps();
    const currentIndex = steps.indexOf(bookingStep);
    if (currentIndex > 0) {
      setBookingStep(steps[currentIndex - 1]);
    }
  };

  const getTotalSteps = () => {
    if (bookingData.packageId === '4') return 8;
    if (bookingData.packageId === 'rental') return 5;
    if (bookingData.packageId === 'inquiry') return 2;
    if (bookingData.isCustomizing) return 7;
    return 5;
  };

  const getCurrentStepNumber = () => {
    const steps = bookingData.packageId === '4' 
      ? getVipSteps() 
      : bookingData.packageId === 'rental' 
        ? getRentalSteps() 
        : bookingData.packageId === 'inquiry'
          ? getInquirySteps()
          : getStandardSteps();
    return steps.indexOf(bookingStep) + 1;
  };

  const resetBooking = () => {
    setIsBookingOpen(false);
    setBookingStep(1);
    setBookingData({
      packageId: '',
      spotId: '',
      travelerType: 'solo',
      groupSize: 1,
      bikeId: '',
      startDate: '',
      endDate: '',
      name: '',
      email: '',
      phone: '',
      cardNumber: '',
      expiry: '',
      cvc: '',
      selectedAddons: [],
      isCustomizing: false,
      inquiry: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-accent selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <HelmetLogo className="text-black w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase italic">GoFree Albania</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
            <button onClick={() => setActiveTab('tours')} className={`hover:opacity-100 transition-opacity ${activeTab === 'tours' ? 'text-accent opacity-100' : ''}`}>Tours</button>
            <button onClick={() => setActiveTab('rentals')} className={`hover:opacity-100 transition-opacity ${activeTab === 'rentals' ? 'text-accent opacity-100' : ''}`}>Rentals</button>
            <button onClick={() => setActiveTab('spots')} className={`hover:opacity-100 transition-opacity ${activeTab === 'spots' ? 'text-accent opacity-100' : ''}`}>Top Spots</button>
            <button onClick={() => setActiveTab('guide')} className={`hover:opacity-100 transition-opacity ${activeTab === 'guide' ? 'text-accent opacity-100' : ''}`}>Business Guide</button>
          </div>
          <button 
            onClick={() => {
              setBookingData({ ...bookingData, packageId: 'inquiry' });
              setIsBookingOpen(true);
              setBookingStep(10);
            }}
            className="bg-accent text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-accent-hover transition-colors"
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=1920" 
            alt="KTM Adventure 2025" 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              The Ultimate Balkan Experience
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
              Ride the <span className="text-accent">Wild</span> <br /> Albania
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Guided adventure tours through the most rugged terrains of the Balkans. 
              Premium bikes, expert guides, and memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => setActiveTab('tours')} className="w-full sm:w-auto bg-accent text-black px-10 py-4 rounded-full font-black text-lg uppercase tracking-tighter hover:scale-105 transition-transform">
                Explore Tours
              </button>
              <button onClick={() => setActiveTab('rentals')} className="w-full sm:w-auto border border-white/20 hover:bg-white/5 px-10 py-4 rounded-full font-black text-lg uppercase tracking-tighter transition-all">
                Rent a Bike
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        
        <AnimatePresence mode="wait">
          {activeTab === 'tours' && (
            <motion.div
              key="tours"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-16"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-4">Guided Tour Packages</h2>
                  <p className="text-white/50 max-w-xl">From weekend coastal rides to multi-week trans-border expeditions. Choose your adventure level.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {packages.map((pkg) => (
                  <div 
                    key={pkg.id} 
                    className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${
                      pkg.id === '4' 
                        ? 'bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-accent shadow-[0_0_50px_rgba(79,209,197,0.15)] scale-105 z-10' 
                        : 'bg-white/5 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {pkg.id === '4' && (
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                    )}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={pkg.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute top-4 right-4 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        pkg.id === '4' ? 'bg-accent text-black' : 'bg-black/60 text-white'
                      }`}>
                        {pkg.difficulty}
                      </div>
                      {pkg.id === '4' && (
                        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-accent/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-1">
                          <Star size={10} fill="currentColor" /> Premium
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className={`text-xl font-black uppercase tracking-tight leading-tight ${pkg.id === '4' ? 'text-accent italic' : 'text-white'}`}>
                          {pkg.name}
                        </h3>
                        <span className={`font-black ${pkg.id === '4' ? 'text-2xl text-accent' : 'text-white'}`}>{pkg.price}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-white/40 uppercase tracking-widest mb-6">
                        <span className="flex items-center gap-1 font-bold"><Clock size={14} /> {pkg.duration}</span>
                        <span className="flex items-center gap-1 font-bold"><MapPin size={14} /> Albania</span>
                      </div>
                      <p className={`text-sm mb-8 line-clamp-2 leading-relaxed ${pkg.id === '4' ? 'text-white/80' : 'text-white/60'}`}>
                        {pkg.description}
                      </p>
                      <div className="space-y-3 mb-8">
                        {pkg.includes.slice(0, 3).map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                            <CheckCircle2 size={14} className="text-accent" />
                            <span className={pkg.id === '4' ? 'text-white' : 'text-white/80'}>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        <button 
                          onClick={() => {
                            setBookingData({...bookingData, packageId: pkg.id, isCustomizing: false});
                            setIsBookingOpen(true);
                            setBookingStep(1);
                          }}
                          className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 ${
                            pkg.id === '4'
                              ? 'bg-accent text-black hover:bg-accent-hover shadow-[0_10px_20px_rgba(79,209,197,0.2)]'
                              : 'bg-white/10 text-white hover:bg-accent hover:text-black'
                          }`}
                        >
                          {pkg.id === '4' ? 'Design Your Trip' : 'Reserve Now'} <ChevronRight size={16} />
                        </button>
                        
                        {pkg.id !== '4' && (
                          <button 
                            onClick={() => {
                              setBookingData({...bookingData, packageId: pkg.id, isCustomizing: true});
                              setIsBookingOpen(true);
                              setBookingStep(1);
                            }}
                            className="w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 border border-white/10 text-white/40 hover:border-accent hover:text-accent"
                          >
                            Customize Your Trip <Settings size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'rentals' && (
            <motion.div
              key="rentals"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-16"
            >
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-6">Our Adventure Fleet</h2>
                <p className="text-white/50 text-lg">Meticulously maintained adventure bikes ready for any terrain. Explore our models and specifications below.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rentalBikes.map((bike) => (
                  <div key={bike.id} className="group bg-white/5 border border-white/10 rounded-[40px] p-8 hover:bg-white/[0.07] transition-all flex flex-col">
                    <div className="h-64 mb-8 overflow-hidden rounded-3xl">
                      <img 
                        src={bike.image} 
                        alt={bike.model} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-6 flex-1">
                      <div>
                        <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2 block">{bike.type}</span>
                        <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none">{bike.model}</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {bike.specs.map((spec, i) => (
                          <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/5">
                            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Spec {i + 1}</p>
                            <p className="text-xs font-bold text-white/80">{spec}</p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-white/10 space-y-3">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Key Features</h4>
                        {bike.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-white/60 uppercase tracking-widest">
                            <CheckCircle2 size={12} className="text-accent" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Daily Rate</p>
                        <p className="text-2xl font-black text-accent italic">{bike.pricePerDay}</p>
                      </div>
                      <button 
                        onClick={() => {
                          setBookingData({...bookingData, packageId: 'rental', bikeId: bike.id});
                          setIsBookingOpen(true);
                          setBookingStep(1);
                        }}
                        className="px-6 py-3 bg-accent text-black rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-accent-hover transition-all flex items-center gap-2"
                      >
                        Rent Now <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'spots' && (
            <motion.div
              key="spots"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-4">Top Guiding Spots</h2>
                <p className="text-white/50 text-lg">Explore the hidden gems of Albania. Click a spot to see it on the map and learn more.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side: Expandable List of Spots Grouped by Region */}
                <div className="lg:col-span-5 space-y-12">
                  {['North', 'South'].map(region => (
                    <div key={region} className="space-y-6">
                      <div className="flex items-center gap-4 px-4">
                        <div className="h-px flex-1 bg-white/10" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60 whitespace-nowrap">{region} Albania</h3>
                        <div className="h-px flex-1 bg-white/10" />
                      </div>
                      <div className="space-y-4">
                        {topSpots.filter(s => s.region === region).map((spot) => (
                          <div 
                            key={spot.id}
                            className={`overflow-hidden rounded-[32px] border transition-all ${selectedSpot?.id === spot.id ? 'bg-accent border-accent shadow-[0_0_30px_rgba(79,209,197,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                          >
                            <button
                              onClick={() => setSelectedSpot(selectedSpot?.id === spot.id ? null : spot)}
                              className={`w-full text-left p-6 flex gap-6 items-center transition-colors ${selectedSpot?.id === spot.id ? 'text-black' : 'text-white'}`}
                            >
                              <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-black/5">
                                <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="font-black uppercase tracking-tighter italic text-xl">{spot.name}</h4>
                                    <p className={`text-[10px] uppercase tracking-widest ${selectedSpot?.id === spot.id ? 'text-black/60' : 'text-white/40'}`}>{spot.location}</p>
                                  </div>
                                  <motion.div
                                    animate={{ rotate: selectedSpot?.id === spot.id ? 180 : 0 }}
                                    transition={{ type: 'spring', damping: 20 }}
                                  >
                                    <ChevronRight size={20} className={selectedSpot?.id === spot.id ? 'text-black' : 'text-white/20'} />
                                  </motion.div>
                                </div>
                              </div>
                            </button>

                            <AnimatePresence>
                              {selectedSpot?.id === spot.id && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ type: 'spring', damping: 25, stiffness: 150 }}
                                >
                                  <div className="px-6 pb-6 space-y-4">
                                    <div className={`p-5 rounded-2xl ${selectedSpot?.id === spot.id ? 'bg-black/5' : 'bg-white/5'} border border-black/5`}>
                                      <h5 className={`text-xs font-black uppercase tracking-widest mb-2 ${selectedSpot?.id === spot.id ? 'text-black' : 'text-accent'}`}>Interesting Fact</h5>
                                      <p className={`text-sm leading-relaxed ${selectedSpot?.id === spot.id ? 'text-black/80' : 'text-white/60'}`}>{spot.history}</p>
                                    </div>
                                    
                                    <div className="flex items-center justify-between gap-4 pt-2">
                                      <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${selectedSpot?.id === spot.id ? 'text-black/40' : 'text-white/20'}`}>
                                        <Info size={14} /> Part of {packages.find(p => p.id === '2')?.name}
                                      </div>
                                      <button 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setBookingData({...bookingData, packageId: 'rental', spotId: spot.id});
                                          setIsBookingOpen(true);
                                          setBookingStep(1);
                                        }}
                                        className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2 ${selectedSpot?.id === spot.id ? 'bg-black text-white hover:bg-black/80' : 'bg-accent text-black hover:bg-accent/80'}`}
                                      >
                                        Rent a Bike <ArrowUpRight size={14} />
                                      </button>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Side: Interactive Map */}
                <div 
                  className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[40px] p-12 relative aspect-square lg:aspect-auto min-h-[500px] lg:h-[600px] overflow-hidden cursor-crosshair sticky top-24"
                  onClick={() => setSelectedSpot(null)}
                >
                  <motion.div
                    animate={{
                      scale: selectedSpot ? 1.5 : 1,
                      x: selectedSpot ? `${50 - selectedSpot.coords.x * 1.5}%` : 0,
                      y: selectedSpot ? `${50 - selectedSpot.coords.y * 1.5}%` : 0,
                    }}
                    transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                    className="w-full h-full relative origin-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                      <path 
                        d="M40,5 L50,10 L60,5 L70,15 L75,30 L70,45 L75,60 L70,75 L60,90 L50,95 L40,90 L30,75 L25,60 L30,45 L25,30 L30,15 Z" 
                        fill="currentColor" 
                        className="text-white"
                      />
                    </svg>
                    
                    {topSpots.map((spot) => (
                        <button
                          key={spot.id}
                          onClick={() => setSelectedSpot(selectedSpot?.id === spot.id ? null : spot)}
                          className="absolute group"
                          style={{ left: `${spot.coords.x}%`, top: `${spot.coords.y}%` }}
                        >
                          <div className={`w-6 h-6 rounded-full border-4 border-black transition-all ${selectedSpot?.id === spot.id ? 'bg-accent scale-150 shadow-[0_0_20px_rgba(79,209,197,0.5)]' : 'bg-white group-hover:bg-accent'}`} />
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            {spot.name}
                          </div>
                        </button>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'guide' && (
            <motion.div
              key="guide"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto space-y-16"
            >
              <div className="text-center">
                <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-6">Business Growth Strategy</h2>
                <p className="text-white/60 text-lg">How to launch and promote your adventure tour business effectively.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-accent text-black p-10 rounded-[40px] space-y-6">
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic">Package Options</h3>
                  <div className="space-y-4">
                    <div className="bg-black/10 p-6 rounded-2xl">
                      <h4 className="font-bold uppercase mb-2">1. Long Day (8-10h)</h4>
                      <p className="text-sm opacity-80">Tirana & neighboring cities. Perfect for a quick adventure fix without overnight stays.</p>
                    </div>
                    <div className="bg-black/10 p-6 rounded-2xl">
                      <h4 className="font-bold uppercase mb-2">2. Full Day (24-48h)</h4>
                      <p className="text-sm opacity-80">Historical cities in North or South. Immersive cultural experience with overnight options.</p>
                    </div>
                    <div className="bg-black/10 p-6 rounded-2xl">
                      <h4 className="font-bold uppercase mb-2">3. 2-3 Days Adventure</h4>
                      <p className="text-sm opacity-80">Deep Albania or Cross-border. The ultimate Balkan expedition for serious riders.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic">Promotion Channels</h3>
                  <div className="grid gap-4">
                    {[
                      { channel: 'Instagram & TikTok', icon: <Instagram size={24} />, desc: 'Focus on high-quality reels of drone shots over Llogara Pass.' },
                      { channel: 'Google Ads (Search)', icon: <Search size={24} />, desc: 'Target keywords like "Motorbike Rental Albania".' },
                      { channel: 'Moto Forums & Groups', icon: <Users size={24} />, desc: 'Engage in ADVRider and Facebook groups for European riders.' },
                      { channel: 'Partnerships', icon: <Share2 size={24} />, desc: 'Partner with local hostels and international travel agencies.' }
                    ].map((strategy, i) => (
                      <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-accent/30 transition-all">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-accent">
                          {strategy.icon}
                        </div>
                        <div>
                          <h4 className="font-bold uppercase tracking-widest text-sm mb-2">{strategy.channel}</h4>
                          <p className="text-xs text-white/50 leading-relaxed">{strategy.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <HelmetLogo className="text-black w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase italic">GoFree Albania</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Pioneering adventure motorbike travel in the heart of the Balkans. 
              Join us for the ride of your life.
            </p>
            <div className="flex gap-4">
              <Instagram className="text-white/40 hover:text-accent cursor-pointer transition-colors" size={20} />
              <Facebook className="text-white/40 hover:text-accent cursor-pointer transition-colors" size={20} />
              <Globe className="text-white/40 hover:text-accent cursor-pointer transition-colors" size={20} />
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="hover:text-white cursor-pointer transition-colors">Our Tours</li>
              <li className="hover:text-white cursor-pointer transition-colors">Rental Fleet</li>
              <li className="hover:text-white cursor-pointer transition-colors">Safety Gear</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Destinations</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="hover:text-white cursor-pointer transition-colors">The Accursed Mountains</li>
              <li className="hover:text-white cursor-pointer transition-colors">Llogara Pass</li>
              <li className="hover:text-white cursor-pointer transition-colors">Theth & Valbona</li>
              <li className="hover:text-white cursor-pointer transition-colors">Montenegro Borders</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3"><Mail size={16} /> info@gofreealbania.com</li>
              <li className="flex items-center gap-3">
                <a 
                  href="https://wa.me/355690000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.551 4.189 1.598 6.048L0 24l6.105-1.602a11.83 11.83 0 005.937 1.598h.005c6.637 0 12.032-5.395 12.035-12.03a11.782 11.782 0 00-3.517-8.478z"/>
                  </svg>
                  +355 69 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3"><MapPin size={16} /> Tirana, Albania</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 text-center text-[10px] font-bold uppercase tracking-widest text-white/20">
          © 2026 GoFree Albania. All rights reserved. Designed for the wild.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/355690000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] group"
      >
        <div className="absolute -inset-4 bg-[#25D366]/20 rounded-full blur-xl group-hover:bg-[#25D366]/30 transition-all duration-500" />
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.551 4.189 1.598 6.048L0 24l6.105-1.602a11.83 11.83 0 005.937 1.598h.005c6.637 0 12.032-5.395 12.035-12.03a11.782 11.782 0 00-3.517-8.478z"/>
          </svg>
        </div>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
          Contact us on WhatsApp
        </div>
      </a>

      {/* Tour Detail Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-[#111] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-80">
                <img src={selectedPackage.image} alt={selectedPackage.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="absolute top-8 right-8 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-8 left-8 md:left-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-accent text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                      {selectedPackage.difficulty}
                    </span>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Clock size={14} /> {selectedPackage.duration}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">
                    {selectedPackage.name}
                  </h2>
                </div>
              </div>

              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                  {/* Video Section */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-accent">Experience the Ride</h3>
                    <div className="relative aspect-video bg-white/5 border border-white/10 rounded-[32px] overflow-hidden flex items-center justify-center group cursor-pointer">
                      <img src={selectedPackage.image} alt="Video Preview" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
                      <div className="relative z-10 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(79,209,197,0.3)] group-hover:scale-110 transition-transform">
                        <Video size={32} />
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Watch Promotional Video</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-accent">The Adventure</h3>
                    <p className="text-lg text-white/70 leading-relaxed font-light">{selectedPackage.description}</p>
                  </div>

                  <div className="space-y-8">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-accent">1. Choose Your Bike</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {rentalBikes.map(bike => (
                        <button
                          key={bike.id}
                          onClick={() => setBookingData({...bookingData, packageId: selectedPackage.id, bikeId: bike.id})}
                          className={`flex flex-col gap-4 p-4 rounded-2xl border transition-all text-left ${bookingData.bikeId === bike.id ? 'bg-accent/10 border-accent' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                        >
                          <img src={bike.image} alt={bike.model} className="w-full h-24 object-cover rounded-xl" />
                          <div className="flex-1">
                            <h4 className="text-[10px] font-bold uppercase tracking-tight truncate">{bike.model}</h4>
                            <p className="text-[10px] text-accent font-black">{bike.pricePerDay}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-accent">2. Optional Services</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {selectedPackage.optionalAddons.map((addon, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            const selected = bookingData.selectedAddons.includes(addon.name);
                            setBookingData({
                              ...bookingData,
                              packageId: selectedPackage.id,
                              selectedAddons: selected 
                                ? bookingData.selectedAddons.filter(a => a !== addon.name)
                                : [...bookingData.selectedAddons, addon.name]
                            });
                          }}
                          className={`flex flex-col gap-2 p-4 rounded-2xl border transition-all ${bookingData.selectedAddons.includes(addon.name) ? 'bg-accent/10 border-accent' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded border flex items-center justify-center transition-colors ${bookingData.selectedAddons.includes(addon.name) ? 'bg-accent border-accent text-black' : 'border-white/20'}`}>
                              {bookingData.selectedAddons.includes(addon.name) && <CheckCircle2 size={10} />}
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-tight truncate">{addon.name}</span>
                          </div>
                          <span className="text-[10px] font-black text-accent">€{addon.price}{addon.priceType === 'daily' ? '/day' : addon.priceType === 'nightly' ? '/night' : ''}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-accent">Included Gear</h3>
                      <div className="space-y-4">
                        {selectedPackage.includedGear.map((gear, i) => (
                          <div key={i} className="flex items-center gap-4 text-sm text-white/60">
                            <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-accent">
                              <Shield size={16} />
                            </div>
                            {gear}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-accent">What's Included</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {selectedPackage.includes.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-xs text-white/50">
                            <CheckCircle2 size={14} className="text-accent" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 sticky top-8">
                    <div className="space-y-6 mb-8">
                      <div className="flex justify-between items-end">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Package Price</div>
                        <div className="text-4xl font-black text-accent">{selectedPackage.price}</div>
                      </div>
                      {bookingData.bikeId && (
                        <div className="flex justify-between items-center text-xs">
                          <div className="text-white/40 uppercase tracking-widest">Selected Bike</div>
                          <div className="text-white font-bold">{rentalBikes.find(b => b.id === bookingData.bikeId)?.model}</div>
                        </div>
                      )}
                      {bookingData.selectedAddons.length > 0 && (
                        <div className="space-y-2">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Add-ons</div>
                          {bookingData.selectedAddons.map(name => (
                            <div key={name} className="flex justify-between items-center text-[10px]">
                              <div className="text-white/60">{name}</div>
                              <div className="text-accent">
                                €{selectedPackage.optionalAddons.find(a => a.name === name)?.price}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Total Est.</div>
                        <div className="text-3xl font-black text-white">€{calculateTotalPrice()}</div>
                      </div>
                    </div>
                    <p className="text-[10px] text-white/30 leading-relaxed mb-8">
                      Price includes all taxes and basic insurance. A 20% deposit will be required in the next step.
                    </p>
                    <button 
                      onClick={() => {
                        setSelectedPackage(null);
                        setIsBookingOpen(true);
                        setBookingStep(1); // Start at step 1 for dates, but bike/addons are pre-selected
                      }}
                      disabled={!bookingData.bikeId}
                      className="w-full py-5 bg-accent text-black rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-accent-hover transition-all shadow-[0_10px_30px_rgba(79,209,197,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {bookingData.bikeId ? 'Book This Tour' : 'Select a Bike First'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetBooking}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter italic">
                      {bookingStep === 9 ? 'Booking Confirmed' : 
                       bookingStep === 10 ? 'Tell Us Your Vision' : 'Reserve Your Ride'}
                    </h2>
                    {bookingStep < 9 && (
                      <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Step {getCurrentStepNumber()} of {getTotalSteps()}</p>
                    )}
                  </div>
                  <button onClick={resetBooking} className="text-white/40 hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>

                {bookingStep === 9 ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={40} className="text-black" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight">
                      {bookingData.packageId === 'inquiry' ? 'Inquiry Received!' : 'Your adventure starts soon!'}
                    </h3>
                    <p className="text-white/60 max-w-md mx-auto leading-relaxed">
                      {bookingData.packageId === 'inquiry' 
                        ? "We've received your inquiry. Our team will review your preferences and contact you shortly at "
                        : "We've received your booking request. A confirmation email has been sent to "}
                      <span className="text-accent font-bold">{bookingData.email}</span>.
                    </p>
                    {bookingData.packageId !== 'inquiry' && (
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-left space-y-2">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Total Paid (Deposit)</div>
                        <div className="text-2xl font-black text-accent">€{(calculateTotalPrice() * 0.2).toFixed(2)}</div>
                        <div className="text-[8px] text-white/20 uppercase tracking-widest">Remaining balance payable on arrival</div>
                      </div>
                    )}
                    <button 
                      onClick={resetBooking}
                      className="bg-accent text-black px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-accent-hover transition-all mt-8"
                    >
                      Back to Home
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-8">
                    {bookingStep === 10 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">What kind of guide and tour do you want?</label>
                          <textarea 
                            required
                            rows={6}
                            placeholder="Tell us about your dream adventure... (e.g., I want a 5-day tour through the northern mountains with a focus on local culture and off-road trails)"
                            value={bookingData.inquiry}
                            onChange={(e) => setBookingData({...bookingData, inquiry: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                          />
                        </div>
                        <div className="bg-accent/5 border border-accent/10 p-6 rounded-2xl flex items-start gap-4">
                          <Info size={20} className="text-accent shrink-0 mt-1" />
                          <p className="text-xs text-white/60 leading-relaxed">
                            Our team will review your request and get back to you with a personalized proposal and itinerary.
                          </p>
                        </div>
                      </div>
                    )}

                    {bookingStep === 1 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Selected Package</label>
                          <div className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-black uppercase text-accent flex items-center justify-between">
                            <span>{packages.find(p => p.id === bookingData.packageId)?.name || 'Rental Only'}</span>
                            <span className="text-white/20 text-[10px] tracking-widest">{packages.find(p => p.id === bookingData.packageId)?.price}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Start Date</label>
                            <div className="relative">
                              <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                              <input 
                                type="date" 
                                required
                                value={bookingData.startDate}
                                onChange={(e) => setBookingData({...bookingData, startDate: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">End Date</label>
                            <div className="relative">
                              <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                              <input 
                                type="date" 
                                required
                                value={bookingData.endDate}
                                onChange={(e) => setBookingData({...bookingData, endDate: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {bookingStep === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Where to? (Select Spot)</label>
                          <div className="grid grid-cols-1 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                            {topSpots.map(spot => (
                              <button
                                key={spot.id}
                                type="button"
                                onClick={() => setBookingData({...bookingData, spotId: spot.id})}
                                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${bookingData.spotId === spot.id ? 'bg-accent/10 border-accent' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                              >
                                <div className="flex items-center gap-4">
                                  <img src={spot.image} alt={spot.name} className="w-12 h-12 object-cover rounded-lg" />
                                  <div className="text-left">
                                    <h4 className="text-xs font-bold uppercase tracking-tight">{spot.name}</h4>
                                    <p className="text-[10px] text-white/40">{spot.location}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-accent font-black">€{spot.basePrice}</div>
                                  <div className="text-[8px] text-white/20 uppercase tracking-widest">Base Price</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {bookingStep === 3 && (
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Traveler Type</label>
                          <div className="grid grid-cols-3 gap-4">
                            <button
                              type="button"
                              onClick={() => setBookingData({...bookingData, travelerType: 'solo', groupSize: 1, hasPassenger: false})}
                              className={`flex flex-col items-center gap-4 p-6 rounded-2xl border transition-all ${bookingData.travelerType === 'solo' ? 'bg-accent/10 border-accent' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                            >
                              <User size={32} className={bookingData.travelerType === 'solo' ? 'text-accent' : 'text-white/20'} />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-center">Solo</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setBookingData({...bookingData, travelerType: 'passenger', groupSize: 1, hasPassenger: true})}
                              className={`flex flex-col items-center gap-4 p-6 rounded-2xl border transition-all ${bookingData.travelerType === 'passenger' ? 'bg-accent/10 border-accent' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                            >
                              <div className="relative">
                                <User size={32} className={bookingData.travelerType === 'passenger' ? 'text-accent' : 'text-white/20'} />
                                <User size={20} className={`absolute -right-2 -bottom-1 ${bookingData.travelerType === 'passenger' ? 'text-accent' : 'text-white/20'}`} />
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-center">With Passenger</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setBookingData({...bookingData, travelerType: 'group', hasPassenger: false})}
                              className={`flex flex-col items-center gap-4 p-6 rounded-2xl border transition-all ${bookingData.travelerType === 'group' ? 'bg-accent/10 border-accent' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                            >
                              <Users size={32} className={bookingData.travelerType === 'group' ? 'text-accent' : 'text-white/20'} />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-center">Group</span>
                            </button>
                          </div>
                        </div>

                        {bookingData.travelerType === 'group' && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="space-y-6"
                          >
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Number of People</label>
                              <div className="flex items-center gap-4">
                                <input 
                                  type="range" 
                                  min="2" 
                                  max="10" 
                                  value={bookingData.groupSize}
                                  onChange={(e) => setBookingData({...bookingData, groupSize: parseInt(e.target.value)})}
                                  className="flex-1 accent-accent"
                                />
                                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center font-black text-accent">
                                  {bookingData.groupSize}
                                </div>
                              </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                              <div className="flex items-start gap-3">
                                <Info size={16} className="text-accent shrink-0 mt-0.5" />
                                <p className="text-[10px] text-white/60 leading-relaxed uppercase tracking-wider">
                                  Note: You can make selections for other group members in the next steps. If you want to reserve for the group but not pay for all, share the dates with them so they can book individually.
                                </p>
                              </div>
                              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                                <span className="text-[8px] text-white/20 uppercase tracking-widest">Need help with group dates?</span>
                                <a 
                                  href="https://wa.me/355690000000" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest hover:underline"
                                >
                                  <MessageSquare size={12} /> Contact on WhatsApp
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {bookingStep === 4 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Choose Your Bike</label>
                          <div className="grid grid-cols-1 gap-4">
                            {rentalBikes.map(bike => (
                              <button
                                key={bike.id}
                                type="button"
                                onClick={() => setBookingData({...bookingData, bikeId: bike.id})}
                                className={`flex items-center gap-6 p-4 rounded-2xl border transition-all text-left ${bookingData.bikeId === bike.id ? 'bg-accent/10 border-accent' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                              >
                                <img src={bike.image} alt={bike.model} className="w-20 h-20 object-cover rounded-xl" />
                                <div className="flex-1">
                                  <h4 className="font-bold uppercase tracking-tight">{bike.model}</h4>
                                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{bike.type}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-accent font-black">{bike.pricePerDay}</div>
                                  <div className="text-[8px] text-white/20 uppercase tracking-widest">per day</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {bookingStep === 5 && (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Optional Add-ons</label>
                          <div className="grid grid-cols-1 gap-3">
                            {packages.find(p => p.id === bookingData.packageId)?.optionalAddons.map((addon, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  const selected = bookingData.selectedAddons.includes(addon.name);
                                  setBookingData({
                                    ...bookingData,
                                    selectedAddons: selected 
                                      ? bookingData.selectedAddons.filter(a => a !== addon.name)
                                      : [...bookingData.selectedAddons, addon.name]
                                  });
                                }}
                                className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${bookingData.selectedAddons.includes(addon.name) ? 'bg-accent/10 border-accent' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                              >
                                <div className="flex items-center gap-4">
                                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${bookingData.selectedAddons.includes(addon.name) ? 'bg-accent border-accent text-black' : 'border-white/20'}`}>
                                    {bookingData.selectedAddons.includes(addon.name) && <CheckCircle2 size={14} />}
                                  </div>
                                  <span className="text-sm font-bold uppercase tracking-tight">{addon.name}</span>
                                </div>
                                <span className="text-accent font-black">€{addon.price}{addon.priceType === 'daily' ? '/day' : addon.priceType === 'nightly' ? '/night' : ''}</span>
                              </button>
                            ))}
                            {(bookingData.packageId === 'none' || !bookingData.packageId) && (
                              <p className="text-center py-12 text-white/20 uppercase tracking-widest text-xs">No addons available for this selection</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {bookingStep === 6 && (
                      <div className="space-y-6">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                            <div className="relative">
                              <User className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                              <input 
                                type="text" 
                                required
                                placeholder="John Doe"
                                value={bookingData.name}
                                onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                              <div className="relative">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                <input 
                                  type="email" 
                                  required
                                  placeholder="john@example.com"
                                  value={bookingData.email}
                                  onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Phone Number</label>
                              <div className="relative">
                                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                <input 
                                  type="tel" 
                                  required
                                  placeholder="+355 69 000 0000"
                                  value={bookingData.phone}
                                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {bookingStep === 7 && (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Booking Summary</label>
                          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-1">
                                <div className="text-[8px] text-white/20 uppercase tracking-widest">Package</div>
                                <div className="text-xs font-bold uppercase">{packages.find(p => p.id === bookingData.packageId)?.name || 'Rental Only'}</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-[8px] text-white/20 uppercase tracking-widest">Dates</div>
                                <div className="text-xs font-bold uppercase">{bookingData.startDate} to {bookingData.endDate}</div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-[8px] text-white/20 uppercase tracking-widest">Travelers</div>
                                <div className="text-xs font-bold uppercase">
                                  {bookingData.travelerType === 'solo' ? 'Solo' : 
                                   bookingData.travelerType === 'passenger' ? 'Solo + Passenger' : 
                                   `Group of ${bookingData.groupSize}`}
                                </div>
                              </div>
                              {bookingData.packageId === '4' && (
                                <>
                                  <div className="space-y-1">
                                    <div className="text-[8px] text-white/20 uppercase tracking-widest">Destination</div>
                                    <div className="text-xs font-bold uppercase">{topSpots.find(s => s.id === bookingData.spotId)?.name || 'Custom'}</div>
                                  </div>
                                  <div className="space-y-1">
                                    <div className="text-[8px] text-white/20 uppercase tracking-widest">Bike</div>
                                    <div className="text-xs font-bold uppercase">{rentalBikes.find(b => b.id === bookingData.bikeId)?.model || 'Custom'}</div>
                                  </div>
                                </>
                              )}
                            </div>

                            {bookingData.packageId === '4' && bookingData.selectedAddons.length > 0 && (
                              <div className="pt-4 border-t border-white/5 space-y-2">
                                <div className="text-[8px] text-white/20 uppercase tracking-widest">Add-ons</div>
                                <div className="flex flex-wrap gap-2">
                                  {bookingData.selectedAddons.map(addon => (
                                    <span key={addon} className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-full border border-accent/20">
                                      {addon}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                              <div className="space-y-1">
                                <div className="text-[8px] text-white/20 uppercase tracking-widest">Total Price</div>
                                <div className="text-3xl font-black text-accent">
                                  {bookingData.packageId === '4' ? 'Custom' : `€${calculateTotalPrice()}`}
                                </div>
                              </div>
                              {bookingData.packageId !== '4' && (
                                <div className="text-right space-y-1">
                                  <div className="text-[8px] text-white/20 uppercase tracking-widest">20% Deposit</div>
                                  <div className="text-xl font-black text-white">€{(calculateTotalPrice() * 0.2).toFixed(2)}</div>
                                </div>
                              )}
                            </div>
                          </div>
                          {bookingData.packageId === '4' && (
                            <p className="text-[10px] text-white/40 uppercase tracking-widest text-center italic">
                              * For VIP packages, our team will contact you to finalize the custom pricing.
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {bookingStep === 8 && (
                      <div className="space-y-6">
                        <div className="pt-6 space-y-6">
                          <div className="bg-accent/10 border border-accent/20 p-6 rounded-2xl flex items-start gap-4">
                            <Info size={20} className="text-accent shrink-0 mt-1" />
                            <p className="text-xs text-white/60 leading-relaxed">
                              Payment is processed securely. A 20% deposit is required to confirm your booking. The remaining balance is payable upon arrival.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Card Number</label>
                            <div className="relative">
                              <CreditCard className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                              <input 
                                type="text" 
                                required
                                placeholder="0000 0000 0000 0000"
                                value={bookingData.cardNumber}
                                onChange={(e) => setBookingData({...bookingData, cardNumber: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Expiry Date</label>
                              <input 
                                type="text" 
                                required
                                placeholder="MM/YY"
                                value={bookingData.expiry}
                                onChange={(e) => setBookingData({...bookingData, expiry: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">CVC</label>
                              <input 
                                type="text" 
                                required
                                placeholder="123"
                                value={bookingData.cvc}
                                onChange={(e) => setBookingData({...bookingData, cvc: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col gap-6 pt-4">
                      {bookingData.packageId !== 'inquiry' && (
                        <div className="flex items-center justify-between px-2">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Estimated Total</div>
                          <div className="text-xl font-black text-accent">
                            {bookingData.packageId === '4' ? 'Custom' : `€${calculateTotalPrice()}`}
                          </div>
                        </div>
                      )}
                      <div className="flex gap-4">
                        {bookingStep !== (
                          bookingData.packageId === '4' ? 1 : 
                          bookingData.packageId === 'inquiry' ? 10 : 1
                        ) && (
                          <button 
                            type="button"
                            onClick={handleBack}
                            className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
                          >
                            Back
                          </button>
                        )}
                        <button 
                          type="submit"
                          className="flex-[2] py-4 bg-accent text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-accent-hover transition-all flex items-center justify-center gap-2"
                        >
                          {bookingStep === 8 || (bookingData.packageId === 'inquiry' && bookingStep === 6) ? 'Confirm & Send' : 'Continue'} <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
