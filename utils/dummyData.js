export const reviews = [
  {
    title: "Excellent Service!",
    description:
      "Had a great experience! The staff is professional, and the service was quick.",
    platform: "facebook",
    reviewer: "Ahmed Al-Zahrani",
    location: "Riyadh",
  },
  {
    title: "Professional Maintenance",
    description:
      "Best car workshop in Jeddah! Great customer service and reasonable prices.",
    platform: "instagram",
    reviewer: "Fatima Al-Otaibi",
    location: "Jeddah",
  },
  {
    title: "Great Service & Fair Prices",
    description:
      "Very satisfied with the service! I highly recommend this workshop.",
    platform: "twitter",
    reviewer: "Abdullah Al-Malki",
    location: "Dammam",
  },
  {
    title: "Fast & Reliable",
    description: "My car was fixed in record time with top-notch quality!",
    platform: "facebook",
    reviewer: "Mohammed Al-Qahtani",
    location: "Mecca",
  },
  {
    title: "Best Repair Experience",
    description:
      "Highly professional service. I'll definitely come back again!",
    platform: "instagram",
    reviewer: "Noura Al-Shahrani",
    location: "Medina",
  },
];

export const priceList = [
  {
    location: "Riyadh",
    services: [
      { name: "Car Inspection/Diagnostics", price: 499, savings: "15%" },
      { name: "Inspection", price: 499, savings: "25%" },
      { name: "Door Glass Replacement", price: 700, savings: "30%" },
      { name: "Regular AC Service", price: 999, savings: "15%" },
      {
        name: "Wind Shield Replacement (Insurance)",
        price: 1000,
        savings: "25%",
      },
      { name: "Front Head Lights", price: 109, savings: "30%" },
      { name: "Accessories", price: 109, savings: "30%" },
      { name: "Tyres & Wheel Care", price: 169, savings: "25%" },
      { name: "Basic Service", price: 189, savings: "10%" },
      { name: "Batteries", price: 279, savings: "15%" },
      { name: "Ceramic Coating", price: 149, savings: "25%" },
      { name: "Full Body Dent Paint", price: 200, savings: "15%" },
    ],
  },
  {
    location: "Jeddah",
    services: [
      { name: "Car Inspection/Diagnostics", price: 499, savings: "10%" },
      { name: "Inspection", price: 499, savings: "20%" },
      { name: "Door Glass Replacement", price: 750, savings: "28%" },
      { name: "Regular AC Service", price: 999, savings: "12%" },
      {
        name: "Wind Shield Replacement (Insurance)",
        price: 110,
        savings: "20%",
      },
      { name: "Front Head Lights", price: 115, savings: "28%" },
      { name: "Accessories", price: 119, savings: "25%" },
      { name: "Tyres & Wheel Care", price: 175, savings: "22%" },
      { name: "Basic Service", price: 195, savings: "8%" },
      { name: "Batteries", price: 2850, savings: "12%" },
      { name: "Ceramic Coating", price: 155, savings: "22%" },
      { name: "Full Body Dent Paint", price: 210, savings: "12%" },
    ],
  },
];

export const partnerFeedbacks = [
  {
    profile: "", // Random profile image
    name: "Ahmed Al-Farsi",
    feedbackMessage:
      "GoMechanic has transformed my workshop! More customers, better service, and seamless spare part availability.",
    shopName: "Al-Farsi Auto Care",
  },
  {
    profile: "",
    name: "Sara Khan",
    feedbackMessage:
      "Partnering with GoMechanic has boosted my sales significantly. Their support is excellent!",
    shopName: "Khan Auto Spares",
  },
  {
    profile: "",
    name: "Mohammed Owais",
    feedbackMessage:
      "I now get more customers without spending on marketing. The best decision for my business.",
    shopName: "Owais Car Repairs",
  },
  {
    profile: "",
    name: "Fatima Al-Zahrani",
    feedbackMessage:
      "Reliable spare parts and timely deliveries have helped me serve my customers better.",
    shopName: "Zahrani Auto Parts",
  },
  {
    profile: "",
    name: "Yusuf Rahman",
    feedbackMessage:
      "With GoMechanic, I can focus on my work while they bring in the customers. A game-changer!",
    shopName: "Rahman Car Service",
  },
];

export const locations = [
  "Riyadh",
  "Jeddah",
  "Mecca",
  "Medina",
  "Dammam",
  "Khobar",
  "Tabuk",
  "Abha",
  "Hail",
  "Al Jubail",
];

export const stats = [
  { value: 3000000, label: "Cars Serviced" },
  { value: 2500000, label: "Happy Customers" },
  { value: 4.0, label: "Average Rating", isRating: true },
  { value: 1000, label: "Touch Points In India" },
];

export const servicesData = [
  {
    _id: "sdhad23654",
    service_name: "Basic Service",

    category: "sheduled-services",
    warranty: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-05.svg",
      text: "1000 Kms or 1 Month Warranty",
    },
    recommended_interval: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-03.svg",
      text: "Every 5000 Kms or 3 Months (Recommended)",
    },
    pickup_drop: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-08.svg",
      text: "Free Pick-up & Drop",
    },
    price: 2011,
    original_price: 2682,
    time_taken: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-04.svg",
      text: "4 Hrs Taken",
    },
    essential_services: [
      {
        title: "Engine Oil Replacement",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Essential_Services_0.jpg?version=1639385004.96861",
      },
      {
        title: "Oil Filter Replacement",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Essential_Services_1.jpg?version=1657265041.55665",
      },
      {
        title: "Air Filter Cleaning",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Essential_Services_2.jpg?version=1657265070.015719",
      },
    ],
    performance_services: [
      {
        title: "Coolant Top Up (200 ml)",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Performance_Services_0.jpg?version=1657265253.46549",
      },
      {
        title: "Heater/Spark Plugs Checking",
        image:
          "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/Additional%20Images%20Periodic%20Service/Standard%20Service/Performance/Heater%20Spark%20Plugs%20Checking.jpg",
      },
    ],
    inclusions: [
      "Wiper Fluid Replacement",
      "Car Wash",
      "Engine Oil Replacement",
      "Battery Water Top Up",
      "Interior Vacuuming (Carpet & Seats)",
    ],
    badge: "Recommended",
    banner_images: [
      {
        src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/BASIC%20SERVICES/02%20Engine%20Oil%20Replacement.png",
        alt: "Engine Oil Replacement",
      },
      {
        src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/BASIC%20SERVICES/03%20Oil%20Filter%20Replacement.png",
        alt: "Oil Filter Replacement",
      },
      {
        src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/BASIC%20SERVICES/04%20Air%20Filter%20Cleaning.png",
        alt: "Air Filter Cleaning",
      },
      {
        src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/BASIC%20SERVICES/05%20Coolant%20Top%20Up.png",
        alt: "Coolant Top-Up",
      },
    ],
    reviews: [
      {
        name: "Nadeem Chaudhary",
        avatar:
          "https://lh3.googleusercontent.com/a/ALm5wu0xi0WAVl9ZQaGsvHd2QrBFysQbz9As23wPlbOr=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
        date: "Published 31 months ago",
        review:
          "All employees of GoMechanic are very professional and knowledgeable. They always fulfill their commitment.",
        rating: 5,
      },
      {
        name: "Satyam Prashant Yash",
        avatar:
          "https://lh3.googleusercontent.com/a-/ACNPEu-W9qMefZN4r9hEKw0Uab5t6DTZRI5PAUuZbEM=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
        date: "Published 31 months ago",
        review:
          "I think the experience I got in the service center is unmatched. I really want to thank this service center for providing such great service to my car.",
        rating: 5,
      },
      {
        name: "Rohit Sahu",
        avatar:
          "https://lh3.googleusercontent.com/a/ALm5wu2gxXIlRZN_jU0EOYCQdgwlfpaKRRbZY7cW1GTn=s120-c-c0x00000000-cc-rp-mo-br100",
        date: "Published 31 months ago",
        review:
          "I appreciate that you can also use this service from this car workshop.",
        rating: 3,
      },
      {
        name: "Rohit Sahu",
        avatar:
          "https://lh3.googleusercontent.com/a/ALm5wu2gxXIlRZN_jU0EOYCQdgwlfpaKRRbZY7cW1GTn=s120-c-c0x00000000-cc-rp-mo-br100",
        date: "Published 31 months ago",
        review:
          "I appreciate that you can also use this service from this car workshop.",
        rating: 4,
      },
    ],
    is_multiple_selectable: false,
    has_addons: true,
addons: [
    {
      id: 1,
      service: "AC Filter",
      description: "30% Improvement in Car Breathing Air Quality",
      frequency: "Every 10000 Kms or 6 Months",
      warranty: "1 Month Warranty",
      includes: "AC Filter Replacement (OES), AC Checkup, Refitting",
      price: 579,
      icon: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/services_icon/AC_Filter.png"
    },
    {
      id: 2,
      service: "Wiper Blades",
      description: "Prevents Windshield Scratches by 50%",
      frequency: "In case of Damaged Wipers",
      warranty: "1 Month Warranty",
      includes: "Prevents Windshield Scratches by 50%",
      price: 550,
      icon: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/services_icon/Wiper_Blades.png"
    },
    {
      id: 3,
      service: "All Spark Plugs",
      description: "Rusted Spark Plugs Reduce Mileage by 20%",
      frequency: "Every 20000 Kms or 6 Months",
      warranty: "1 Month Warranty",
      includes: "All Spark Plugs Replacement, Iridium & Platinum Spark Plugs will cost Extra",
      price: 999,
      icon: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/services_icon/All%20Spark%20Plugs.png"
    },
    {
      id: 4,
      service: "Engine Flushing",
      description: "Guaranteed Increase in Engine Performance",
      frequency: "Every 10000 Kms or 6 Months",
      warranty: "1 Month Warranty",
      includes: "Engine Flushing, Deposit Build-up Removal, Engine Oil Leak Test",
      price: 799,
      icon: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/services_icon/Engine_Flushing.png"
    },
    {
      id: 5,
      service: "Throttle Body Cleaning",
      description: "Improves Pickup & Mileage by 40%",
      frequency: "Every 10,000 kms or 6 Months",
      warranty: "1 Month Warranty",
      includes: "Throttle Body Cleaning",
      price: 599,
      icon: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/services_icon/Gear_Fluid_Replacement.png"
    },
    {
      id: 6,
      service: "Gear Oil Replacement",
      description: "Decreases Gear Box Failure by 80%",
      frequency: "Every 50000 Kms or 12 Months",
      warranty: "1 Month Warranty",
      includes: "Gear Oil Replacement, Draining & Refilling of Gear Oil, Automatic Transmission Gear Oil Rates may vary",
      price: 950,
      icon: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/services_icon/Gear_Fluid_Replacement.png"
    },
    {
      id: 7,
      service: "Brake Fluid Replacement",
      description: "Prevents Contamination of Brake Fluid",
      frequency: "Every 20000 Kms or 12 Months",
      warranty: "1000 Kms Warranty",
      includes: "Brake Fluid Replacement, Brake Bleeding, Brake Servicing and Calibration",
      price: 999,
      icon: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/services_icon/Brake_Fluid_Replacement.png"
    },
    {
      id: 8,
      service: "Fuel Filter",
      description: "30% Improvement in Car Mileage",
      frequency: "Every 20000 Kms or 12 Months",
      warranty: "1 Month Warranty",
      includes: "Fuel Filter Replacement (OES), Opening & Fitting of Fuel Filter",
      price: 500,
      icon: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/services_icon/Fuel_Filter_Replacement.png"
    },
    {
      id: 9,
      service: "Radiator Cleaning",
      description: "Increases Engine Cooling Capacity by 20%",
      frequency: "Every 10000 Kms or 6 Months",
      warranty: "1000 Kms Warranty",
      includes: "Coolant Draining, Anti- Freeze Coolant Replacement, Radiator Interior Cleaning, Coolant Leak Test",
      price: 599,
      icon: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/services_icon/Radiator_Cleaning.png"
    },
    {
      id: 10,
      service: "GoMechanic Horn",
      description: "Prevents Road Accidents",
      frequency: "In case Horn is not working",
      warranty: "1 Month Warranty",
      includes: "Prevents Road Accidents",
      price: 200,
      icon: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/services_icon/GoMechanic_Horn.png"
    }
  ]
    ,
    options: [
      {
        id: 1,
        name: "Synthetic Oil",
        brand: "Mobil 5W40",
        description: "Exceptional Performance Boost & More Fuel Economy",
        price: 0,
      },
      {
        id: 2,
        name: "Fully Synthetic",
        brand: "Mobil1 0W40",
        description: "Best for Daily Commutes & Engine Protection",
        price: 280,
      },
    ],
    includesEngineOil: true,
  },
  {
    _id: "sdhad2iy374354",
    service_name: "Ac Service",
    category: "ac-services",
    warranty: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-05.svg",
      text: "2000 Kms or 2 Months",
    },
    recommended_interval: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-03.svg",
      text: "Every 10000 Kms or 6 Months",
    },
    price: 2999,
    original_price: 3599,
    time_taken: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-04.svg",
      text: "6 Hrs",
    },
    pickup_drop: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-08.svg",
      text: "Free Pick-up & Drop",
    },
    essential_services: [
      {
        title: "Engine Oil Replacement",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Essential_Services_0.jpg?version=1639385004.96861",
      },
      {
        title: "Oil Filter Replacement",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Essential_Services_1.jpg?version=1657265041.55665",
      },
      {
        title: "Air Filter Cleaning",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Essential_Services_2.jpg?version=1657265070.015719",
      },
    ],
    performance_services: [
      {
        title: "Coolant Top Up (200 ml)",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Performance_Services_0.jpg?version=1657265253.46549",
      },
      {
        title: "Heater/Spark Plugs Checking",
        image:
          "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/Additional%20Images%20Periodic%20Service/Standard%20Service/Performance/Heater%20Spark%20Plugs%20Checking.jpg",
      },
    ],
    inclusions: [
      "Wiper Fluid Replacement",
      "Car Wash",
      "Engine Oil Replacement",
      "Battery Water Top Up",
      "Interior Vacuuming (Carpet & Seats)",
      "Brake Fluid Check",
      "Tyre Rotation",
    ],
    banner_images: [
      {
        src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/BASIC%20SERVICES/02%20Engine%20Oil%20Replacement.png",
        alt: "Engine Oil Replacement",
      },
      {
        src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/BASIC%20SERVICES/03%20Oil%20Filter%20Replacement.png",
        alt: "Oil Filter Replacement",
      },
      {
        src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/BASIC%20SERVICES/04%20Air%20Filter%20Cleaning.png",
        alt: "Air Filter Cleaning",
      },
      {
        src: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/BASIC%20SERVICES/05%20Coolant%20Top%20Up.png",
        alt: "Coolant Top-Up",
      },
    ],
    reviews: [
      {
        name: "Nadeem Chaudhary",
        avatar:
          "https://lh3.googleusercontent.com/a/ALm5wu0xi0WAVl9ZQaGsvHd2QrBFysQbz9As23wPlbOr=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
        date: "Published 31 months ago",
        review:
          "All employees of GoMechanic are very professional and knowledgeable. They always fulfill their commitment.",
        rating: 5,
      },
      {
        name: "Satyam Prashant Yash",
        avatar:
          "https://lh3.googleusercontent.com/a-/ACNPEu-W9qMefZN4r9hEKw0Uab5t6DTZRI5PAUuZbEM=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
        date: "Published 31 months ago",
        review:
          "I think the experience I got in the service center is unmatched. I really want to thank this service center for providing such great service to my car.",
        rating: 5,
      },
      {
        name: "Rohit Sahu",
        avatar:
          "https://lh3.googleusercontent.com/a/ALm5wu2gxXIlRZN_jU0EOYCQdgwlfpaKRRbZY7cW1GTn=s120-c-c0x00000000-cc-rp-mo-br100",
        date: "Published 31 months ago",
        review:
          "I appreciate that you can also use this service from this car workshop.",
        rating: 3,
      },
      {
        name: "Rohit Sahu",
        avatar:
          "https://lh3.googleusercontent.com/a/ALm5wu2gxXIlRZN_jU0EOYCQdgwlfpaKRRbZY7cW1GTn=s120-c-c0x00000000-cc-rp-mo-br100",
        date: "Published 31 months ago",
        review:
          "I appreciate that you can also use this service from this car workshop.",
        rating: 4,
      },
    ],
    is_multiple_selectable: true,
    has_addons: false,
    addons: [],
    options: [],
    includesEngineOil: false,
  },
  {
    _id: "sdhsdfweur23654",
    service_name: "Amaron (66 Months Warranty)",
    category: "batteries",
    warranty: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-05.svg",
      text: "5000 Kms or 6 Months",
    },
    recommended_interval: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-03.svg",
      text: "Every 15000 Kms or 1 Year",
    },
    price: 4999,
    original_price: 5999,
    time_taken: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-04.svg",
      text: "8 Hrs",
    },
    pickup_drop: {
      icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/detailPage/New%20icons/App%20icons%20internal-08.svg",
      text: "Free Pick-up & Drop",
    },
    essential_services: [
      {
        title: "Engine Oil Replacement",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Essential_Services_0.jpg?version=1639385004.96861",
      },
      {
        title: "Oil Filter Replacement",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Essential_Services_1.jpg?version=1657265041.55665",
      },
      {
        title: "Air Filter Cleaning",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Essential_Services_2.jpg?version=1657265070.015719",
      },
    ],
    performance_services: [
      {
        title: "Coolant Top Up (200 ml)",
        image:
          "https://gomechprod.blob.core.windows.net/gm-retail-app/service_tbl_images/0_1_7125_Performance_Services_0.jpg?version=1657265253.46549",
      },
      {
        title: "Heater/Spark Plugs Checking",
        image:
          "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/Additional%20Images%20Periodic%20Service/Standard%20Service/Performance/Heater%20Spark%20Plugs%20Checking.jpg",
      },
    ],
    inclusions: [
      "Wiper Fluid Replacement",
      "Car Wash",
      "Engine Oil Replacement",
      "Battery Water Top Up",
      "Interior Vacuuming (Carpet & Seats)",
      "Brake Fluid Check",
      "Tyre Rotation",
      "AC Filter Cleaning",
      "Fuel System Cleaning",
    ],
    is_multiple_selectable: true,
    has_addons: true,
    addons: [
      {
        id: "addon-ps-1",
        service: "Ceramic Coating",
        description: "Protects your car paint and gives a glossy shine.",
        price: 499,
        is_mandatory: false,
        image: "https://example.com/addons/ceramic-coating.png",
      },
      {
        id: "addon-ps-2",
        service: "Engine Flush",
        description: "Cleans internal engine deposits.",
        price: 69,
        is_mandatory: false,
      },
    ],
    options: [
      {
        id: 1,
        name: "Amaron (55 Months Warranty)",
        description: "With Existing Battery Replacement",
        price: 0,
      },
      {
        id: 2,
        name: "Without Old Battery Replacement",
        description: "Replacement without your Old Battery",
        price: 700,
      },
    ],
    optionTitle: "Select Battery Replacement Type",
    includesEngineOil: false,
  },
];

export const Reviews = [
  {
    name: "Nadeem Chaudhary",
    avatar:
      "https://lh3.googleusercontent.com/a/ALm5wu0xi0WAVl9ZQaGsvHd2QrBFysQbz9As23wPlbOr=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
    date: "Published 31 months ago",
    review:
      "All employees of GoMechanic are very professional and knowledgeable. They always fulfill their commitment.",
    rating: 5,
  },
  {
    name: "Satyam Prashant Yash",
    avatar:
      "https://lh3.googleusercontent.com/a-/ACNPEu-W9qMefZN4r9hEKw0Uab5t6DTZRI5PAUuZbEM=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
    date: "Published 31 months ago",
    review:
      "I think the experience I got in the service center is unmatched. I really want to thank this service center for providing such great service to my car.",
    rating: 5,
  },
  {
    name: "Rohit Sahu",
    avatar:
      "https://lh3.googleusercontent.com/a/ALm5wu2gxXIlRZN_jU0EOYCQdgwlfpaKRRbZY7cW1GTn=s120-c-c0x00000000-cc-rp-mo-br100",
    date: "Published 31 months ago",
    review:
      "I appreciate that you can also use this service from this car workshop.",
    rating: 3,
  },
  {
    name: "Rohit Sahu",
    avatar:
      "https://lh3.googleusercontent.com/a/ALm5wu2gxXIlRZN_jU0EOYCQdgwlfpaKRRbZY7cW1GTn=s120-c-c0x00000000-cc-rp-mo-br100",
    date: "Published 31 months ago",
    review:
      "I appreciate that you can also use this service from this car workshop.",
    rating: 4,
  },
  {
    name: "Nadeem Chaudhary",
    avatar:
      "https://lh3.googleusercontent.com/a/ALm5wu0xi0WAVl9ZQaGsvHd2QrBFysQbz9As23wPlbOr=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
    date: "Published 31 months ago",
    review:
      "All employees of GoMechanic are very professional and knowledgeable. They always fulfill their commitment.",
    rating: 5,
  },
  {
    name: "Satyam Prashant Yash",
    avatar:
      "https://lh3.googleusercontent.com/a-/ACNPEu-W9qMefZN4r9hEKw0Uab5t6DTZRI5PAUuZbEM=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
    date: "Published 31 months ago",
    review:
      "I think the experience I got in the service center is unmatched. I really want to thank this service center for providing such great service to my car.",
    rating: 5,
  },
  {
    name: "Rohit Sahu",
    avatar:
      "https://lh3.googleusercontent.com/a/ALm5wu2gxXIlRZN_jU0EOYCQdgwlfpaKRRbZY7cW1GTn=s120-c-c0x00000000-cc-rp-mo-br100",
    date: "Published 31 months ago",
    review:
      "I appreciate that you can also use this service from this car workshop.",
    rating: 3,
  },
  {
    name: "Rohit Sahu",
    avatar:
      "https://lh3.googleusercontent.com/a/ALm5wu2gxXIlRZN_jU0EOYCQdgwlfpaKRRbZY7cW1GTn=s120-c-c0x00000000-cc-rp-mo-br100",
    date: "Published 31 months ago",
    review:
      "I appreciate that you can also use this service from this car workshop.",
    rating: 4,
  },
  {
    name: "Nadeem Chaudhary",
    avatar:
      "https://lh3.googleusercontent.com/a/ALm5wu0xi0WAVl9ZQaGsvHd2QrBFysQbz9As23wPlbOr=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
    date: "Published 31 months ago",
    review:
      "All employees of GoMechanic are very professional and knowledgeable. They always fulfill their commitment.",
    rating: 5,
  },
  {
    name: "Satyam Prashant Yash",
    avatar:
      "https://lh3.googleusercontent.com/a-/ACNPEu-W9qMefZN4r9hEKw0Uab5t6DTZRI5PAUuZbEM=s120-c-c0x00000000-cc-rp-mo-ba3-br100",
    date: "Published 31 months ago",
    review:
      "I think the experience I got in the service center is unmatched. I really want to thank this service center for providing such great service to my car.",
    rating: 5,
  },
  {
    name: "Rohit Sahu",
    avatar:
      "https://lh3.googleusercontent.com/a/ALm5wu2gxXIlRZN_jU0EOYCQdgwlfpaKRRbZY7cW1GTn=s120-c-c0x00000000-cc-rp-mo-br100",
    date: "Published 31 months ago",
    review:
      "I appreciate that you can also use this service from this car workshop.",
    rating: 3,
  },
  {
    name: "Rohit Sahu",
    avatar:
      "https://lh3.googleusercontent.com/a/ALm5wu2gxXIlRZN_jU0EOYCQdgwlfpaKRRbZY7cW1GTn=s120-c-c0x00000000-cc-rp-mo-br100",
    date: "Published 31 months ago",
    review:
      "I appreciate that you can also use this service from this car workshop.",
    rating: 4,
  },
]