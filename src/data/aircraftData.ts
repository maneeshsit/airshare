export interface AircraftDetails {
  range?: string;
  speed?: string;
  altitude?: string;
  features?: string[];
}

export interface Aircraft {
  name: string;
  capacity: string;
  description: string;
  image: string;
  details?: AircraftDetails;
}

export const aircraftData: Aircraft[] = [
  {
    name: "Cessna Citation CJ2",
    capacity: "6 passengers",
    description: "Light jet perfect for short-range trips with exceptional comfort.",
    image: "/aircraft/cj2.png",
    details: {
      range: "1,613 nautical miles",
      speed: "418 knots",
      altitude: "45,000 feet",
      features: [
        "State-of-the-art avionics",
        "Spacious cabin with executive seating",
        "Full refreshment center",
        "Private lavatory",
        "LED lighting system"
      ]
    }
  },
    {
      name: "Hawker Beechcraft 750",
      capacity: "8 passengers",
      description: "Mid-size jet offering superior range and cabin comfort.",
      image: "/aircraft/beachcraft750.png",
      details: {
        range: "2,116 nautical miles",
        speed: "465 knots",
        altitude: "41,000 feet",
        features: [
          "Stand-up cabin",
          "Full galley",
          "Enclosed lavatory",
          "Advanced sound suppression",
          "Entertainment system"
        ]
      }
    },
    {
      name: "Hawker Beechcraft 800XP",
      capacity: "8 passengers",
      description: "Advanced mid-size jet with excellent performance capabilities.",
      image: "/aircraft/beechcraft800xp.png",
      details: {
        range: "2,540 nautical miles",
        speed: "448 knots",
        altitude: "41,000 feet",
        features: [
          "Stand-up cabin with 5'9\" height",
          "Full refreshment center",
          "Private lavatory",
          "Advanced avionics suite",
          "Spacious baggage compartment",
          "Enhanced sound insulation",
          "Individual climate control",
          "Entertainment system"
        ]
      }
    },
    {
      name: "Hawker Beechcraft 900XP",
      capacity: "8 passengers",
      description: "Latest generation mid-size jet with enhanced range.",
      image: "/aircraft/beechcraft900xpmid.png",
      details: {
        range: "2,818 nautical miles",
        speed: "466 knots",
        altitude: "41,000 feet",
        features: [
          "Stand-up cabin with 6' height",
          "Advanced cabin management system",
          "Full refreshment center",
          "Private lavatory",
          "Enhanced avionics suite",
          "Large baggage compartment",
          "Superior sound proofing",
          "Individual climate zones",
          "High-speed wireless internet",
          "Entertainment system with multiple displays"
        ]
      }
    },
    {
      name: "Falcon 2000 Easy",
      capacity: "10 passengers",
      description: "Super mid-size jet offering transcontinental range.",
      image: "/aircraft/flacon200easy.png",
      details: {
        range: "3,350 nautical miles",
        speed: "482 knots",
        altitude: "47,000 feet",
        features: [
          "Spacious stand-up cabin",
          "Advanced flight deck with EASy cockpit",
          "Full-service galley",
          "Private lavatory",
          "Large baggage compartment",
          "Enhanced sound proofing system",
          "Satellite communications",
          "High-speed internet connectivity",
          "Entertainment system",
          "Individual climate control zones"
        ]
      }
    },
  {
    name: "Global 6000",
    capacity: "13-19 passengers",
    description: "Ultra-long-range jet with exceptional cabin space.",
    image: "/aircraft/global6000large.png",
    details: {
      range: "6,000 nautical miles",
      speed: "488 knots",
      altitude: "51,000 feet",
      features: [
        "Three-zone cabin configuration",
        "Full-service galley",
        "Private stateroom",
        "Forward crew rest area",
        "Ka-band high-speed internet",
        "Advanced air management system",
        "Bombardier Vision flight deck",
        "Latest avionics technology",
        "Enhanced sound proofing",
        "Multiple entertainment zones"
      ]
    }
  },
  {
    name: "Legacy 600",
    capacity: "13 passengers",
    description: "Large-cabin jet with outstanding comfort and range.",
    image: "/aircraft/legacy600large.png",
    details: {
      range: "3,400 nautical miles",
      speed: "459 knots",
      altitude: "41,000 feet",
      features: [
        "Three distinct cabin zones",
        "Largest baggage compartment in class",
        "Full-service galley",
        "Two lavatories",
        "Advanced cabin pressurization",
        "Entertainment system",
        "High-speed internet connectivity",
        "Enhanced cabin sound proofing",
        "Individual LCD screens",
        "Satellite phone system"
      ]
    }
  },
  {
    name: "Gulfstream G200",
    capacity: "8-10 passengers",
    description: "Super mid-size jet with superior performance.",
    image: "/aircraft/gulfstreamg200supermid.png",
    details: {
      range: "3,400 nautical miles",
      speed: "470 knots",
      altitude: "45,000 feet",
      features: [
        "Stand-up cabin",
        "Full-service galley",
        "Private lavatory",
        "Large baggage compartment",
        "Advanced avionics suite",
        "Entertainment system",
        "Satellite communications",
        "Enhanced cabin comfort",
        "Individual air controls",
        "LED lighting system"
      ]
    }
  },
  {
    name: "Dassault Falcon 2000LX",
    capacity: "10 passengers",
    description: "Advanced long-range business jet.",
    image: "/aircraft/falcon2000lx.png",
    details: {
      range: "4,000 nautical miles",
      speed: "482 knots",
      altitude: "47,000 feet",
      features: [
        "Spacious cabin design",
        "Advanced EASy II cockpit",
        "Full-service galley",
        "Private lavatory",
        "Enhanced sound proofing",
        "High-speed internet",
        "Entertainment system",
        "Satellite communications",
        "LED cabin lighting",
        "Individual climate control"
      ]
    }
  },
  {
    name: "DA50 RG",
    capacity: "5 passengers",
    description: "Lightweight aircraft with excellent performance.",
    image: "/aircraft/da50rg.png",
    details: {
      range: "750 nautical miles",
      speed: "181 knots",
      altitude: "20,000 feet",
      features: [
        "Retractable landing gear",
        "Garmin G1000 NXi avionics",
        "Luxurious leather interior",
        "Large cargo door",
        "Excellent fuel efficiency",
        "Air conditioning",
        "Enhanced visibility",
        "USB charging ports",
        "LED exterior lighting",
        "Spacious baggage compartment"
      ]
    }
  },
  {
    name: "DA62 (twin engine)",
    capacity: "7 passengers",
    description: "Versatile twin-engine aircraft for various missions.",
    image: "/aircraft/da62.png",
    details: {
      range: "1,283 nautical miles",
      speed: "192 knots",
      altitude: "20,000 feet",
      features: [
        "Twin diesel engines",
        "Garmin G1000 NXi glass cockpit",
        "Premium leather interior",
        "Large cargo doors",
        "Advanced autopilot",
        "Air conditioning",
        "De-icing system",
        "LED lighting",
        "Multiple USB ports",
        "Enhanced safety features"
      ]
    }
  },
  {
    name: "DA62 MPP (twin engine)",
    capacity: "2 passengers",
    description: "Multi-purpose aircraft for diverse operations.",
    image: "/aircraft/da62mpp.png",
    details: {
      range: "1,283 nautical miles",
      speed: "190 knots",
      altitude: "20,000 feet",
      features: [
        "Specialized mission equipment",
        "Advanced sensor integration",
        "Extended range capability",
        "Multi-role configuration",
        "Enhanced communication systems",
        "Night vision compatibility",
        "Real-time data transmission",
        "Modular payload system",
        "All-weather capability",
        "Quick role change ability"
      ]
    }
  },
  {
    name: "DHC-2 Beaver",
    capacity: "6 passengers",
    description: "Classic bush plane known for its versatility.",
    image: "/aircraft/dhc2.png",
    details: {
      range: "455 nautical miles",
      speed: "143 knots",
      altitude: "18,000 feet",
      features: [
        "STOL capability",
        "Rugged construction",
        "Float plane capability",
        "Large cargo door",
        "High payload capacity",
        "All-terrain performance",
        "Reliable Pratt & Whitney engine",
        "Excellent visibility",
        "Simple maintenance",
        "Proven track record"
      ]
    }
  },
  {
    name: "M700 Fury​",
    capacity: "6 passengers",
    description: "High-performance aircraft for demanding missions.",
    image: "/aircraft/m700fury.png",
    details: {
      range: "1,200 nautical miles",
      speed: "260 knots",
      altitude: "28,000 feet",
      features: [
        "Advanced composite construction",
        "Glass cockpit avionics",
        "Pressurized cabin",
        "High climb rate",
        "All-weather capability",
        "Enhanced safety systems",
        "Efficient fuel consumption",
        "Modern interior design",
        "Excellent handling",
        "Low maintenance requirements"
      ]
    }
  },
  {
    name: "Archer® LX​",
    capacity: "4 passengers",
    description: "Light aircraft ideal for flight training.",
    image: "/aircraft/archerlx.png",
    details: {
      range: "522 nautical miles",
      speed: "128 knots",
      altitude: "14,000 feet",
      features: [
        "Garmin G1000 NXi avionics",
        "Comfortable cabin design",
        "Excellent training platform",
        "Reliable Lycoming engine",
        "Dual controls",
        "Enhanced safety features",
        "Good visibility",
        "Easy maintenance access",
        "Stable flight characteristics",
        "Modern interior"
      ]
    }
  },
  {
    name: "Archer® DLX",
    capacity: "4 passengers",
    description: "Enhanced version of the Archer for better performance.",
    image: "/aircraft/archerdlx.png",
    details: {
      range: "522 nautical miles",
      speed: "128 knots",
      altitude: "14,000 feet",
      features: [
        "Advanced avionics package",
        "Luxury interior appointments",
        "Enhanced sound proofing",
        "Air conditioning",
        "Leather seating",
        "USB charging ports",
        "LED lighting system",
        "Digital autopilot",
        "Weather radar",
        "Premium finish options"
      ]
    }
  },
  {
    name: "FanJet 600",
    capacity: "1 passenger",
    description: "Compact jet designed for personal travel.",
    image: "/aircraft/fanjet600.png",
    details: {
      range: "600 nautical miles",
      speed: "250 knots",
      altitude: "25,000 feet",
      features: [
        "Single-pilot operation",
        "Advanced glass cockpit",
        "Compact design",
        "Efficient fuel consumption",
        "Low operating costs",
        "Easy maintenance",
        "Modern avionics",
        "Excellent maneuverability",
        "Quick startup procedure",
        "Compact hangar footprint"
      ]
    }
  }
];
