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
    },
    {
      name: "Legacy 600",
      capacity: "13 passengers",
      description: "Large-cabin jet with outstanding comfort and range.",
      image: "/aircraft/legacy600large.png",
    },
    {
      name: "Gulfstream G200",
      capacity: "8-10 passengers",
      description: "Super mid-size jet with superior performance.",
      image: "/aircraft/gulfstreamg200supermid.png",
    },
    {
      name: "Dassault Falcon 2000LX",
      capacity: "10 passengers",
      description: "Advanced long-range business jet.",
      image: "/aircraft/falcon2000lx.png",
    },
    {
      name: "DA50 RG",
      capacity: "5 passengers",
      description: "Lightweight aircraft with excellent performance.",
      image: "/aircraft/da50rg.png",
    },
    {
      name: "DA62 (twin engine)",
      capacity: "7 passengers",
      description: "Versatile twin-engine aircraft for various missions.",
      image: "/aircraft/da62.png",
    },
    {
      name: "DA62 MPP (twin engine)",
      capacity: "2 passengers",
      description: "Multi-purpose aircraft for diverse operations.",
      image: "/aircraft/da62mpp.png",
    },
    {
      name: "DHC-2 Beaver",
      capacity: "6 passengers",
      description: "Classic bush plane known for its versatility.",
      image: "/aircraft/dhc2.png",
    },
    {
      name: "M700 Fury​",
      capacity: "6 passengers",
      description: "High-performance aircraft for demanding missions.",
      image: "/aircraft/m700fury.png",
    },
    {
      name: "Archer® LX​",
      capacity: "4 passengers",
      description: "Light aircraft ideal for flight training.",
      image: "/aircraft/archerlx.png",
    },
    {
      name: "Archer® DLX",
      capacity: "4 passengers",
      description: "Enhanced version of the Archer for better performance.",
      image: "/aircraft/archerdlx.png",
    },
    {
      name: "FanJet 600",
      capacity: "1 passenger",
      description: "Compact jet designed for personal travel.",
      image: "/aircraft/fanjet600.png",
    },
];
