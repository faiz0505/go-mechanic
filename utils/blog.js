
const latestNews = [
    {
      id: '1',
      url: "kia-ev6-facelift-launched-in-india",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/Header-Kia-EV6-Facelift-Launched-in-India_-Everything-You-Need-to-Know-696x364.jpg",
      title: "Kia EV6 Facelift Launched in India: Everything You Need to Know",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "March 28, 2025"
    },
    {
      id: '2',
      url: "nissan-micra-ev",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/nissan-micra-_web_header-696x364.jpg",
      title: "Nissan Micra EV: A Fresh Take on an Iconic Hatchback",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "March 28, 2025"
    },
    {
      id: '3',
      url: "suzukis-new-avenis-and-burgman-scooters-whats-cool-about-them",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/suzuki_web_header-696x364.jpg",
      title: "Suzuki’s New Avenis and Burgman Scooters: What’s Cool About Them?",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "March 26, 2025"
    },
    {
      id: '4',
      url: "2025-aston-martin-vanquish",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/1234_web_header-696x364.jpg",
      title: "Introducing the 2025 Aston Martin Vanquish: A New Benchmark in Luxury and Performance",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "March 24, 2025"
    },
    {
      id: '5',
      url: "mahindra-xuv700-ebony-edition-a-symphony-in-stealth-black",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/xuv700-_web_header-696x364.jpg",
      title: "Mahindra XUV700 Ebony Edition: A Symphony in Stealth Black",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "March 18, 2025"
    },
    {
        id: '6',
        url: "kia-ev6-facelift-launched-in-india",
        imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/Header-Kia-EV6-Facelift-Launched-in-India_-Everything-You-Need-to-Know-696x364.jpg",
        title: "Kia EV6 Facelift Launched in India: Everything You Need to Know",
        author: "GoMechanic",
        authorUrl: "/authors/manish",
        date: "March 28, 2025"
      },
      {
        id: '7',
        url: "nissan-micra-ev",
        imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/nissan-micra-_web_header-696x364.jpg",
        title: "Nissan Micra EV: A Fresh Take on an Iconic Hatchback",
        author: "GoMechanic",
        authorUrl: "/authors/manish",
        date: "March 28, 2025"
      },
      {
        id: '8',
        url: "suzukis-new-avenis-and-burgman-scooters-whats-cool-about-them",
        imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/suzuki_web_header-696x364.jpg",
        title: "Suzuki’s New Avenis and Burgman Scooters: What’s Cool About Them?",
        author: "GoMechanic",
        authorUrl: "/authors/manish",
        date: "March 26, 2025"
      },
      {
        id: '9',
        url: "2025-aston-martin-vanquish",
        imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/1234_web_header-696x364.jpg",
        title: "Introducing the 2025 Aston Martin Vanquish: A New Benchmark in Luxury and Performance",
        author: "GoMechanic",
        authorUrl: "/authors/manish",
        date: "March 24, 2025"
      },
      {
        id: '10',
        url: "mahindra-xuv700-ebony-edition-a-symphony-in-stealth-black",
        imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/xuv700-_web_header-696x364.jpg",
        title: "Mahindra XUV700 Ebony Edition: A Symphony in Stealth Black",
        author: "GoMechanic",
        authorUrl: "/authors/manish",
        date: "March 18, 2025"
      }
  ];

const featuredArticle = [
    {
      id: '1',
      url: "kia-ev6-facelift-launched-in-india",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/Header-Kia-EV6-Facelift-Launched-in-India_-Everything-You-Need-to-Know-696x364.jpg",
      title: "Kia EV6 Facelift Launched in India: Everything You Need to Know",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "March 28, 2025"
    },
    {
      id: '2',
      url: "nissan-micra-ev",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/nissan-micra-_web_header-696x364.jpg",
      title: "Nissan Micra EV: A Fresh Take on an Iconic Hatchback",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "March 28, 2025"
    },
    {
      id: '3',
      url: "suzukis-new-avenis-and-burgman-scooters-whats-cool-about-them",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/suzuki_web_header-696x364.jpg",
      title: "Suzuki’s New Avenis and Burgman Scooters: What’s Cool About Them?",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "March 26, 2025"
    },
    {
      id: '4',
      url: "2025-aston-martin-vanquish",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/1234_web_header-696x364.jpg",
      title: "Introducing the 2025 Aston Martin Vanquish: A New Benchmark in Luxury and Performance",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "March 24, 2025"
    },
    {
      id: '5',
      url: "mahindra-xuv700-ebony-edition-a-symphony-in-stealth-black",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/xuv700-_web_header-696x364.jpg",
      title: "Mahindra XUV700 Ebony Edition: A Symphony in Stealth Black",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "March 18, 2025"
    }
  ];
  
  const electricCars = [
    {
      id: '1',
      url: "advantages-of-electric-cars",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/driving-licence_web_header-768x402.png",
      title: "Top Advantages of Electric Cars: Why They're the Future of Transportation",
      category: "Electric Vehicles",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "March 28, 2025"
    },
    {
      id: '2',
      url: "electric-car-conversion-kit",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/01/electric-_web_header-768x402.png",
      title: "Electric Car Conversion Kit: Convert Car in Electric Car",
      category: "Electric Vehicles",
      author: "GoMechanic",
      authorUrl: "/authors/gomechanic",
      date: "January 27, 2025"
    },
    {
      id: '3',
      url: "electric-car-companies-in-india",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/01/electric-cars_web_header-768x402.jpg",
      title: "Electric Car Companies in India: Revolutionizing the Future of Mobility",
      category: "Electric Vehicles",
      author: "GoMechanic",
      authorUrl: "/authors/gomechanic",
      date: "January 16, 2025"
    },
    {
      id: '4',
      url: "mahindra-xuv-3xo-launch-a-leap-into-the-future-of-compact-suvs",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2024/04/xuv3x0-768x402.jpg",
      title: "Mahindra XUV 3XO Launch: A Leap into the Future of Compact SUVs",
      category: "Electric Vehicles",
      author: "GoMechanic",
      authorUrl: "/authors/prateek",
      date: "April 8, 2024"
    },
    {
      id: '5',
      url: "traditional-vs-electric-vehicles-in-india",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2024/04/Traditional-title-768x402.jpg",
      title: "Traditional vs Electric Vehicles: A Comparison in India",
      category: "Electric Vehicles",
      author: "GoMechanic",
      authorUrl: "/authors/prateek",
      date: "April 1, 2024"
    },
    {
      id: "6",
      url: "thar-ev",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-04-at-6.51.50-PM-768x402.jpeg",
      title: "Mahindra to unveil Thar EV concept on August 15!",
      category: "Electric Vehicles",
      author: "Ashwin Chaubey",
      authorUrl: "/authors/ashwin-chaubey",
      date: "August 8, 2023"
    },
    {
      id: "7",
      url: "planning-to-buy-an-ev-in-noida",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-31-at-11.00.41-AM-768x402.jpeg",
      title: "Planning to Buy an EV in Noida? Here’s What You Should Know",
      category: "Electric Vehicles",
      author: "Ashwin Chaubey",
      authorUrl: "/authors/ashwin-chaubey",
      date: "July 31, 2023"
    }
  ];
  
  const carAccessoriesArticle = [
    {
      id: '1',
      url: "10-best-modifications-for-volkswagen-virtus",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2024/11/vw-virtus_web_header-696x364.jpg",
      title: "10 Best Modifications For Volkswagen Virtus",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "November 4, 2024"
    },
    {
      id: '2',
      url: "top-10-leather-seat-cover-options-for-your-car",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2024/10/seat-cover_web_header-696x364.jpg",
      title: "Top 10 Leather Seat Cover Options for Your Car",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "October 26, 2024"
    },
    {
      id: '3',
      url: "the-essential-equipment-every-luxury-car-workshop-should-have-dont-settle-for-less",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2024/10/equipment_web_header-696x364.png",
      title: "The Essential Equipment Every Luxury Car Workshop Should Have: Don't Settle for Less",
      author: "GoMechanic",
      authorUrl: "/authors/manish",
      date: "October 1, 2024"
    },
    {
      id: '4',
      url: "car-inspection-checklists-a-comprehensive-guide",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2024/04/title-1-696x364.jpg",
      title: "Car Inspection Checklists: A Comprehensive Guide",
      author: "GoMechanic",
      authorUrl: "/authors/prateek",
      date: "April 4, 2024"
    },
    {
      id: '5',
      url: "physical-to-touchscreen-controls",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2023/07/Feature-Image-19-696x364.jpg",
      title: "Shift from Physical to Touchscreen Controls in Cars!",
      author: "Ashwin Chaubey",
      authorUrl: "/authors/ashwin-chaubey",
      date: "August 2, 2023"
    },
    {
      id: '6',
      url: "ignition-interlock-system",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2023/01/Ignition-Interlock-System-FT-696x365.jpg",
      title: "Ignition Interlock System | Explained!",
      author: "Ashwin Chaubey",
      authorUrl: "/authors/ashwin-chaubey",
      date: "January 18, 2023"
    },
    {
      id: '7',
      url: "car-polish-vs-wax",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2022/12/polish-vs-wax-696x348.jpg",
      title: "Car Polish vs Wax - Differences Explained!",
      author: "Juel",
      authorUrl: "/authors/juel",
      date: "December 28, 2022"
    },
    {
      id: '8',
      url: "christmas-gift-for-bikers",
      imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2022/12/Top-5-Riding-Gear-As-Christmas-Gift-For-Bikers-696x365.jpg",
      title: "Top 5 Riding Gear As Christmas Gift For Bikers",
      author: "Juel",
      authorUrl: "/authors/juel",
      date: "December 24, 2022"
    }
];

const latestBikeNews = [
  {
    id: '1',
    url: "bmw-r-12-g-s-the-new-scrambler-you-need-to-know-about",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/04/bmw-bike-_web_header-696x364.jpg",
    title: "BMW R 12 G/S: The New Scrambler You Need to Know About",
    author: "GoMechanic",
    authorUrl: "/authors/manish",
    date: "April 1, 2025"
  },
  {
    id: '2',
    url: "royal-enfield-classic-650-twin-launched",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/royal-enfield-650-_web_header-696x364.jpg",
    title: "Royal Enfield Classic 650 Twin Launched: Pricing, Features, and Colour Options",
    author: "GoMechanic",
    authorUrl: "/authors/manish",
    date: "March 31, 2025"
  },
  {
    id: '3',
    url: "2025-bmw-r18-lineup-power-comfort-and-style-redefined",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/02/Bmw-R18_web_header-696x364.jpg",
    title: "2025 BMW R18 Lineup: Power, Comfort, and Style Redefined",
    author: "GoMechanic",
    authorUrl: "/authors/manish",
    date: "February 18, 2025"
  },
  {
    id: '4',
    url: "royal-enfield-shotgun-650",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/02/royal-enfield_web_header-696x364.jpg",
    title: "Royal Enfield Shotgun 650 Icon Edition: A Rare Masterpiece",
    author: "GoMechanic",
    authorUrl: "/authors/manish",
    date: "February 12, 2025"
  },
  {
    id: '5',
    url: "ola-electric-revolutionizes-at-auto-expo-2025",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/01/ola-electric_web_header-696x364.png",
    title: "Ola Electric Revolutionizes at Auto Expo 2025: Bharat Mobility Steps into the Future",
    author: "GoMechanic",
    authorUrl: "/authors/manish",
    date: "January 28, 2025"
  },
  {
    id: '6',
    url: "mahindra-xev-9e-scored-a-5-star-safety-rating-from-bharat-ncap",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/01/tataxev_web_header-696x364.jpg",
    title: "Mahindra XEV 9e scored a 5-star safety rating from Bharat NCAP",
    author: "GoMechanic",
    authorUrl: "/authors/manish",
    date: "January 21, 2025"
  },
  {
    id: '7',
    url: "maruti-e-vitara-revealed-at-auto-expo",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/01/e-vitara_web_header-696x364.jpg",
    title: "The New Maruti E Vitara Revealed at Auto Expo 2025",
    author: "GoMechanic",
    authorUrl: "/authors/manish",
    date: "January 20, 2025"
  },
  {
    id: '8',
    url: "mercedes-amg-g-63-facelift-launched-at-%e2%82%b9-3-60-crore",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2024/10/g63-_web_header-696x364.jpg",
    title: "Mercedes-AMG G 63 facelift launched at ₹ 3.60 crore",
    author: "GoMechanic",
    authorUrl: "/authors/manish",
    date: "October 23, 2024"
  }
];

const latestCarNews = [
  {
    id: '1',
    url: "hyundai-creta-ncap-rating",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/01/cretasafetyrating_web_header-696x364.jpg",
    title: "Hyundai Creta Safety Rating by Global NCAP: A Detailed Analysis",
    author: "GoMechanic",
    authorUrl: "/authors/gomechanic",
    date: "January 7, 2025"
  },
  {
    id: '2',
    url: "auto-expo-upcoming-cars-part-2",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2023/01/Upcoming-cars-autoexpo-part2-ft-696x365.jpg",
    title: "Upcoming Cars At The Auto Expo 2023 | The Complete List Part 2",
    author: "Sankul Nagpal",
    authorUrl: "/authors/sankul-nagpal",
    date: "January 8, 2023"
  },
  {
    id: '3',
    url: "auto-expo-2023-cars",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2023/01/Upcoming-cars-autoexpo-part1-ft-696x365.jpg",
    title: "Upcoming Cars At The Auto Expo 2023 | The Complete List Part 1",
    author: "Sankul Nagpal",
    authorUrl: "/authors/sankul-nagpal",
    date: "January 8, 2023"
  },
  {
    id: '4',
    url: "maruti-suzuki-swift-sports-spied-with-adas",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2022/12/Maruti-Suzuki-Swift-Sports-ADAS-e1671190876581-696x365.jpeg",
    title: "Maruti Suzuki Swift Sports Spied With ADAS Tech!",
    author: "Akshat Ajeya",
    authorUrl: "/authors/akshat-ajeya",
    date: "December 16, 2022"
  },
  {
    id: '5',
    url: "new-cars-arriving-2023",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2022/11/7-Upcoming-Cars-In-2023-_-part-3_FT-696x365.jpg",
    title: "7 Upcoming Cars In 2023 | Here’s What 2023 Has For Us!",
    author: "Sankul Nagpal",
    authorUrl: "/authors/sankul-nagpal",
    date: "December 9, 2022"
  },
  {
    id: '6',
    url: "upcoming-7-seater-suvs-in-2023",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2022/10/Upcoming-7-Seater-SUVs-in-2023_1200_628_Blog-696x364.jpg",
    title: "Upcoming 7 Seater SUVs in 2023",
    author: "Unknown",
    authorUrl: "/authors/unknown",
    date: "Not provided"
  }
];

const goMechanicBasics = [
  {
    id: '1',
    url: "how-to-change-ownership-of-a-car",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/ownership-of-a-cr-_web_header-696x364.png",
    title: "How To Change Ownership of a Car: A Complete Guide",
    author: "GoMechanic",
    authorUrl: "/authors/gomechanic",
    date: "March 7, 2025"
  },
  {
    id: '2',
    url: "graphene-coating-price-in-india",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/Graphene_web_header-696x364.png",
    title: "Graphene Coating Price in India: Why do you need it?",
    author: "GoMechanic",
    authorUrl: "/authors/gomechanic",
    date: "March 4, 2025"
  },
  {
    id: '3',
    url: "cars-with-ventilated-seats",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/ventilated-seats_web_header-696x364.png",
    title: "Cars with Ventilated Seats 2025: The Ultimate Comfort for You",
    author: "GoMechanic",
    authorUrl: "/authors/gomechanic",
    date: "March 3, 2025"
  },
  {
    id: '4',
    url: "what-is-boot-space-in-car",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/03/what-is-boot-space_web_header-696x364.png",
    title: "What is Boot Space in Car? Your Car's Own Storage Room",
    author: "GoMechanic",
    authorUrl: "/authors/gomechanic",
    date: "March 3, 2025"
  },
  {
    id: '5',
    url: "types-of-car-paint",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/02/car-paint_web_header-696x364.png",
    title: "What are the Types of Car Paint?",
    author: "GoMechanic",
    authorUrl: "/authors/gomechanic",
    date: "February 28, 2025"
  },
  {
    id: '6',
    url: "volvo-highest-mileage-car",
    imageUrl: "https://blogs.gomechanic.com/wp-content/uploads/2025/02/The-Legendary-P1800_web_header-696x364.png",
    title: "The Legendary P1800: Volvo’s Highest Mileage Car 2025",
    author: "GoMechanic",
    authorUrl: "/authors/gomechanic",
    date: "February 28, 2025"
  }
];



export { latestNews, featuredArticle, electricCars,carAccessoriesArticle,latestBikeNews, latestCarNews,goMechanicBasics };