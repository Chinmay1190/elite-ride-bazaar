
export interface Product {
  id: string;
  name: string;
  category: "superbikes" | "luxury-cars" | "sports-cars";
  price: number;
  description: string;
  image: string;
  specs: {
    [key: string]: string;
  };
  featured?: boolean;
}

const products: Product[] = [
  // Superbikes
  {
    id: "ducati-panigale-v4",
    name: "Ducati Panigale V4",
    category: "superbikes",
    price: 2799000,
    description: "The Ducati Panigale V4 is the essence of racing transformed into a production motorcycle.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "1,103 cc Desmosedici Stradale V4",
      power: "214 HP",
      weight: "175 kg",
      topSpeed: "299 km/h"
    },
    featured: true
  },
  {
    id: "bmw-s1000rr",
    name: "BMW S1000RR",
    category: "superbikes",
    price: 2150000,
    description: "The BMW S1000RR is a race-oriented sports motorcycle capable of extreme acceleration and precise handling.",
    image: "https://images.unsplash.com/photo-1606073681514-1860bbdf046d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "999 cc four-cylinder",
      power: "205 HP",
      weight: "197 kg",
      topSpeed: "303 km/h"
    }
  },
  {
    id: "kawasaki-ninja-h2",
    name: "Kawasaki Ninja H2",
    category: "superbikes",
    price: 3300000,
    description: "The Kawasaki Ninja H2 is a supercharged supersport with unprecedented power and performance.",
    image: "https://images.unsplash.com/photo-1579118337978-2951eeb5c690?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "998 cc supercharged four-cylinder",
      power: "228 HP",
      weight: "216 kg",
      topSpeed: "331 km/h"
    },
    featured: true
  },
  {
    id: "yamaha-yzf-r1",
    name: "Yamaha YZF-R1",
    category: "superbikes",
    price: 2050000,
    description: "The Yamaha YZF-R1 embodies MotoGP technology in a street-legal package.",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "998 cc crossplane four-cylinder",
      power: "198 HP",
      weight: "200 kg",
      topSpeed: "299 km/h"
    }
  },
  {
    id: "aprilia-rsv4",
    name: "Aprilia RSV4",
    category: "superbikes",
    price: 2400000,
    description: "The Aprilia RSV4 is a precision-engineered Italian superbike designed for exceptional track performance.",
    image: "https://images.unsplash.com/photo-1579118234439-7d24bc46d7c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "1,099 cc V4",
      power: "217 HP",
      weight: "180 kg",
      topSpeed: "301 km/h"
    }
  },
  {
    id: "honda-cbr1000rr-r",
    name: "Honda CBR1000RR-R Fireblade",
    category: "superbikes",
    price: 2350000,
    description: "The Honda CBR1000RR-R Fireblade SP is the most advanced and powerful Honda superbike ever created.",
    image: "https://images.unsplash.com/photo-1616839261111-d8070d4f2711?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "999 cc inline-four",
      power: "215 HP",
      weight: "201 kg",
      topSpeed: "299 km/h"
    }
  },
  {
    id: "suzuki-gsx-r1000r",
    name: "Suzuki GSX-R1000R",
    category: "superbikes",
    price: 1950000,
    description: "The Suzuki GSX-R1000R represents the pinnacle of Suzuki engineering with race-winning capabilities.",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "999.8 cc inline-four",
      power: "202 HP",
      weight: "203 kg",
      topSpeed: "299 km/h"
    }
  },
  {
    id: "mv-agusta-f4",
    name: "MV Agusta F4",
    category: "superbikes",
    price: 2890000,
    description: "The MV Agusta F4 is an Italian masterpiece that combines engineering excellence with artistic design.",
    image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "998 cc inline-four",
      power: "205 HP",
      weight: "190 kg",
      topSpeed: "302 km/h"
    }
  },
  {
    id: "ktm-1290-super-duke",
    name: "KTM 1290 Super Duke R",
    category: "superbikes",
    price: 1840000,
    description: "The KTM 1290 Super Duke R is known as 'The Beast' for its aggressive design and raw power.",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "1,301 cc V-twin",
      power: "180 HP",
      weight: "189 kg",
      topSpeed: "290 km/h"
    }
  },
  {
    id: "triumph-daytona-765",
    name: "Triumph Daytona 765",
    category: "superbikes",
    price: 1700000,
    description: "The Triumph Daytona 765 is a limited-edition superbike with Moto2 racing heritage.",
    image: "https://images.unsplash.com/photo-1597005177985-912e747346ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "765 cc triple",
      power: "130 HP",
      weight: "165 kg",
      topSpeed: "265 km/h"
    }
  },
  {
    id: "norton-v4rr",
    name: "Norton V4RR",
    category: "superbikes",
    price: 3200000,
    description: "The Norton V4RR is a premium British superbike with carbon fiber components and high-end specifications.",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "1,200 cc V4",
      power: "200 HP",
      weight: "179 kg",
      topSpeed: "295 km/h"
    }
  },
  {
    id: "ducati-streetfighter-v4",
    name: "Ducati Streetfighter V4",
    category: "superbikes",
    price: 2199000,
    description: "The Ducati Streetfighter V4 is a naked bike with the heart of a superbike.",
    image: "https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "1,103 cc Desmosedici Stradale V4",
      power: "208 HP",
      weight: "178 kg",
      topSpeed: "285 km/h"
    }
  },
  {
    id: "kawasaki-zx-10r",
    name: "Kawasaki ZX-10R",
    category: "superbikes",
    price: 1480000,
    description: "The Kawasaki ZX-10R is a championship-winning superbike with advanced electronics.",
    image: "https://images.unsplash.com/photo-1608542752676-deb176478339?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "998 cc inline-four",
      power: "200 HP",
      weight: "207 kg",
      topSpeed: "299 km/h"
    }
  },
  {
    id: "bmw-m1000rr",
    name: "BMW M1000RR",
    category: "superbikes",
    price: 4200000,
    description: "The BMW M1000RR is the first M model motorcycle from BMW, designed for the highest racing performance.",
    image: "https://images.unsplash.com/photo-1508357941501-0924cf312bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "999 cc four-cylinder",
      power: "212 HP",
      weight: "192 kg",
      topSpeed: "306 km/h"
    },
    featured: true
  },
  {
    id: "ducati-superleggera-v4",
    name: "Ducati Superleggera V4",
    category: "superbikes",
    price: 7200000,
    description: "The Ducati Superleggera V4 is a limited production superbike with extensive carbon fiber construction.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "998 cc Desmosedici Stradale V4",
      power: "234 HP",
      weight: "159 kg",
      topSpeed: "310 km/h"
    }
  },
  {
    id: "honda-rc213v-s",
    name: "Honda RC213V-S",
    category: "superbikes",
    price: 17800000,
    description: "The Honda RC213V-S is essentially a street-legal MotoGP bike, representing the ultimate Honda motorcycle.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "999 cc V4",
      power: "215 HP",
      weight: "170 kg",
      topSpeed: "300+ km/h"
    }
  },

  // Luxury Cars
  {
    id: "rolls-royce-ghost",
    name: "Rolls-Royce Ghost",
    category: "luxury-cars",
    price: 69500000,
    description: "The Rolls-Royce Ghost combines ultimate luxury with a dynamic driving experience.",
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "6.75L Twin-Turbo V12",
      power: "563 HP",
      acceleration: "0-100 km/h in 4.8s",
      interior: "Full-grain leather, genuine wood"
    },
    featured: true
  },
  {
    id: "bentley-continental-gt",
    name: "Bentley Continental GT",
    category: "luxury-cars",
    price: 33500000,
    description: "The Bentley Continental GT combines British handcrafted luxury with exhilarating performance.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "6.0L Twin-Turbo W12",
      power: "626 HP",
      acceleration: "0-100 km/h in 3.7s",
      interior: "Diamond-quilted leather, dual-veneer"
    }
  },
  {
    id: "mercedes-maybach-s-class",
    name: "Mercedes-Maybach S-Class",
    category: "luxury-cars",
    price: 38000000,
    description: "The Mercedes-Maybach S-Class is the pinnacle of luxury and comfort in the Mercedes-Benz lineup.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      power: "496 HP",
      acceleration: "0-100 km/h in 4.8s",
      interior: "Nappa leather, active ambient lighting"
    },
    featured: true
  },
  {
    id: "aston-martin-db12",
    name: "Aston Martin DB12",
    category: "luxury-cars",
    price: 43000000,
    description: "The Aston Martin DB12 is a high-performance grand tourer that epitomizes British luxury.",
    image: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      power: "671 HP",
      acceleration: "0-100 km/h in 3.6s",
      interior: "Bridge of Weir leather, carbon fiber"
    }
  },
  {
    id: "bmw-7-series",
    name: "BMW 7 Series",
    category: "luxury-cars",
    price: 17500000,
    description: "The BMW 7 Series offers a perfect blend of dynamic performance and supreme comfort.",
    image: "https://images.unsplash.com/photo-1556800572-1b8bbe0c9b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.4L Twin-Turbo V8",
      power: "523 HP",
      acceleration: "0-100 km/h in 4.2s",
      interior: "Merino leather, panoramic glass roof"
    }
  },
  {
    id: "maserati-quattroporte",
    name: "Maserati Quattroporte",
    category: "luxury-cars",
    price: 17800000,
    description: "The Maserati Quattroporte is a luxury sports sedan with distinctive Italian flair.",
    image: "https://images.unsplash.com/photo-1617117854226-c2c522e386a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "3.8L Twin-Turbo V8",
      power: "580 HP",
      acceleration: "0-100 km/h in 4.5s",
      interior: "Ermenegildo Zegna silk upholstery"
    }
  },
  {
    id: "porsche-panamera",
    name: "Porsche Panamera",
    category: "luxury-cars",
    price: 15600000,
    description: "The Porsche Panamera combines sports car performance with luxury sedan comfort.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      power: "620 HP",
      acceleration: "0-100 km/h in 3.1s",
      interior: "Club leather, adaptive sports seats"
    }
  },
  {
    id: "range-rover-autobiography",
    name: "Range Rover Autobiography",
    category: "luxury-cars",
    price: 25000000,
    description: "The Range Rover Autobiography represents the epitome of luxury SUV capabilities.",
    image: "https://images.unsplash.com/photo-1536586016192-d702d27c258b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "5.0L Supercharged V8",
      power: "518 HP",
      acceleration: "0-100 km/h in 5.1s",
      interior: "Semi-aniline leather, Executive Class Comfort-Plus rear seats"
    }
  },
  {
    id: "lexus-ls",
    name: "Lexus LS",
    category: "luxury-cars",
    price: 18200000,
    description: "The Lexus LS showcases Japanese craftsmanship and attention to detail in a luxury sedan.",
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "3.5L Twin-Turbo V6 Hybrid",
      power: "416 HP",
      acceleration: "0-100 km/h in 5.1s",
      interior: "Kiriko Glass, hand-pleated door trim"
    }
  },
  {
    id: "audi-a8-l",
    name: "Audi A8 L",
    category: "luxury-cars",
    price: 15900000,
    description: "The Audi A8 L combines sophisticated design with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      power: "453 HP",
      acceleration: "0-100 km/h in 4.5s",
      interior: "Valcona leather, dual-pane acoustic glass"
    }
  },
  {
    id: "genesis-g90",
    name: "Genesis G90",
    category: "luxury-cars",
    price: 8900000,
    description: "The Genesis G90 represents Korean luxury with impressive features and elegant design.",
    image: "https://images.unsplash.com/photo-1617117835647-59675f59d722?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "3.5L Twin-Turbo V6",
      power: "375 HP",
      acceleration: "0-100 km/h in 5.1s",
      interior: "Nappa leather, 12.3-inch infotainment"
    }
  },
  {
    id: "ferrari-purosangue",
    name: "Ferrari Purosangue",
    category: "luxury-cars",
    price: 50300000,
    description: "The Ferrari Purosangue is Ferrari's first SUV, combining practicality with supercar performance.",
    image: "https://images.unsplash.com/photo-1592853598064-a0ba3fd5df13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "6.5L Naturally Aspirated V12",
      power: "715 HP",
      acceleration: "0-100 km/h in 3.3s",
      interior: "Full-grain leather, carbon fiber accents"
    }
  },
  {
    id: "bentley-bentayga",
    name: "Bentley Bentayga",
    category: "luxury-cars",
    price: 34500000,
    description: "The Bentley Bentayga is an ultra-luxury SUV with exceptional comfort and craftsmanship.",
    image: "https://images.unsplash.com/photo-1550268301-d8d68c28ac35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      power: "542 HP",
      acceleration: "0-100 km/h in 4.5s",
      interior: "Handcrafted wood veneers, knurled controls"
    }
  },
  {
    id: "lamborghini-urus",
    name: "Lamborghini Urus",
    category: "luxury-cars",
    price: 38500000,
    description: "The Lamborghini Urus is the world's first Super Sport Utility Vehicle.",
    image: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      power: "641 HP",
      acceleration: "0-100 km/h in 3.6s",
      interior: "Hexagon-stitched leather, Q-citura pattern"
    },
    featured: true
  },
  {
    id: "rolls-royce-cullinan",
    name: "Rolls-Royce Cullinan",
    category: "luxury-cars",
    price: 69000000,
    description: "The Rolls-Royce Cullinan is the most luxurious SUV ever built.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "6.75L Twin-Turbo V12",
      power: "563 HP",
      acceleration: "0-100 km/h in 5.2s",
      interior: "Bespoke audio, Starlight Headliner"
    }
  },
  {
    id: "mercedes-amg-g63",
    name: "Mercedes-AMG G63",
    category: "luxury-cars",
    price: 25600000,
    description: "The Mercedes-AMG G63 combines off-road capabilities with high-performance luxury.",
    image: "https://images.unsplash.com/photo-1520031607889-97ba0c7190ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      power: "577 HP",
      acceleration: "0-100 km/h in 4.5s",
      interior: "Nappa leather, AMG carbon-fiber trim"
    }
  },

  // Sports Cars
  {
    id: "ferrari-sf90-stradale",
    name: "Ferrari SF90 Stradale",
    category: "sports-cars",
    price: 75000000,
    description: "The Ferrari SF90 Stradale is Ferrari's first plug-in hybrid with incredible performance.",
    image: "https://images.unsplash.com/photo-1592853598064-a0ba3fd5df13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8 + 3 Electric Motors",
      power: "986 HP",
      acceleration: "0-100 km/h in 2.5s",
      topSpeed: "340 km/h"
    }
  },
  {
    id: "lamborghini-huracan-sto",
    name: "Lamborghini Huracán STO",
    category: "sports-cars",
    price: 52000000,
    description: "The Lamborghini Huracán STO is a road-legal super sports car inspired by Lamborghini race cars.",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "5.2L Naturally Aspirated V10",
      power: "640 HP",
      acceleration: "0-100 km/h in 3.0s",
      topSpeed: "310 km/h"
    },
    featured: true
  },
  {
    id: "mclaren-765lt",
    name: "McLaren 765LT",
    category: "sports-cars",
    price: 59000000,
    description: "The McLaren 765LT is a track-focused, limited production supercar with extreme performance.",
    image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      power: "755 HP",
      acceleration: "0-100 km/h in 2.8s",
      topSpeed: "330 km/h"
    }
  },
  {
    id: "porsche-911-gt3",
    name: "Porsche 911 GT3",
    category: "sports-cars",
    price: 26800000,
    description: "The Porsche 911 GT3 is a high-performance version of the Porsche 911 sports car primarily designed for track usage.",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.0L Naturally Aspirated Flat-6",
      power: "502 HP",
      acceleration: "0-100 km/h in 3.4s",
      topSpeed: "318 km/h"
    }
  },
  {
    id: "aston-martin-valkyrie",
    name: "Aston Martin Valkyrie",
    category: "sports-cars",
    price: 330000000,
    description: "The Aston Martin Valkyrie is a limited production hybrid electric sports car with Formula One technology.",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "6.5L Naturally Aspirated V12 + Electric Motor",
      power: "1,160 HP",
      acceleration: "0-100 km/h in 2.5s",
      topSpeed: "350 km/h"
    }
  },
  {
    id: "bugatti-chiron",
    name: "Bugatti Chiron",
    category: "sports-cars",
    price: 350000000,
    description: "The Bugatti Chiron is one of the world's fastest and most powerful production sports cars.",
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "8.0L Quad-Turbo W16",
      power: "1,479 HP",
      acceleration: "0-100 km/h in 2.4s",
      topSpeed: "420 km/h"
    },
    featured: true
  },
  {
    id: "ferrari-296-gtb",
    name: "Ferrari 296 GTB",
    category: "sports-cars",
    price: 55000000,
    description: "The Ferrari 296 GTB is a plug-in hybrid sports car with an innovative V6 engine.",
    image: "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "3.0L Twin-Turbo V6 + Electric Motor",
      power: "830 HP",
      acceleration: "0-100 km/h in 2.9s",
      topSpeed: "330 km/h"
    }
  },
  {
    id: "koenigsegg-jesko",
    name: "Koenigsegg Jesko",
    category: "sports-cars",
    price: 390000000,
    description: "The Koenigsegg Jesko is a limited production hypercar with a focus on track performance and high speed.",
    image: "https://images.unsplash.com/photo-1544381153-1fea5762bda7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "5.0L Twin-Turbo V8",
      power: "1,600 HP",
      acceleration: "0-100 km/h in 2.5s",
      topSpeed: "483 km/h"
    }
  },
  {
    id: "pagani-huayra",
    name: "Pagani Huayra",
    category: "sports-cars",
    price: 310000000,
    description: "The Pagani Huayra is an Italian mid-engine sports car produced by Pagani with meticulous craftsmanship.",
    image: "https://images.unsplash.com/photo-1619567172039-75422d8a9ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "6.0L Twin-Turbo V12",
      power: "764 HP",
      acceleration: "0-100 km/h in 2.8s",
      topSpeed: "360 km/h"
    }
  },
  {
    id: "mercedes-amg-one",
    name: "Mercedes-AMG One",
    category: "sports-cars",
    price: 280000000,
    description: "The Mercedes-AMG One is a limited production plug-in hybrid sports car with Formula One technology.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "1.6L Turbo V6 + 4 Electric Motors",
      power: "1,063 HP",
      acceleration: "0-100 km/h in 2.9s",
      topSpeed: "350 km/h"
    }
  },
  {
    id: "lotus-evija",
    name: "Lotus Evija",
    category: "sports-cars",
    price: 230000000,
    description: "The Lotus Evija is a limited production electric sports car, representing Lotus's first electric hypercar.",
    image: "https://images.unsplash.com/photo-1612956946912-b2d8e5ec0a3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "Four electric motors",
      power: "1,972 HP",
      acceleration: "0-100 km/h in < 3s",
      topSpeed: "320 km/h"
    }
  },
  {
    id: "rimac-nevera",
    name: "Rimac Nevera",
    category: "sports-cars",
    price: 220000000,
    description: "The Rimac Nevera is a Croatian all-electric hypercar with extraordinary performance.",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "Four electric motors",
      power: "1,914 HP",
      acceleration: "0-100 km/h in 1.97s",
      topSpeed: "412 km/h"
    }
  },
  {
    id: "aston-martin-dbs-superleggera",
    name: "Aston Martin DBS Superleggera",
    category: "sports-cars",
    price: 51000000,
    description: "The Aston Martin DBS Superleggera is a high-performance grand tourer with stunning design and power.",
    image: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "5.2L Twin-Turbo V12",
      power: "715 HP",
      acceleration: "0-100 km/h in 3.4s",
      topSpeed: "340 km/h"
    }
  },
  {
    id: "maserati-mc20",
    name: "Maserati MC20",
    category: "sports-cars",
    price: 39500000,
    description: "The Maserati MC20 is a mid-engine sports car that marks Maserati's return to racing heritage.",
    image: "https://images.unsplash.com/photo-1617117854226-c2c522e386a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "3.0L Twin-Turbo V6",
      power: "621 HP",
      acceleration: "0-100 km/h in 2.9s",
      topSpeed: "325 km/h"
    }
  },
  {
    id: "porsche-918-spyder",
    name: "Porsche 918 Spyder",
    category: "sports-cars",
    price: 145000000,
    description: "The Porsche 918 Spyder is a limited production hybrid sports car combining high performance with efficiency.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.6L V8 + 2 Electric Motors",
      power: "887 HP",
      acceleration: "0-100 km/h in 2.6s",
      topSpeed: "345 km/h"
    }
  },
  {
    id: "ferrari-laferrari",
    name: "Ferrari LaFerrari",
    category: "sports-cars",
    price: 315000000,
    description: "The Ferrari LaFerrari is a limited production hybrid sports car and Ferrari's first hybrid.",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "6.3L V12 + Electric Motor",
      power: "950 HP",
      acceleration: "0-100 km/h in < 3s",
      topSpeed: "350 km/h"
    }
  },
];

export default products;
