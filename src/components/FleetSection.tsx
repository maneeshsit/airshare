import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FleetSection = () => {
  const aircraft = [
    {
      name: "Cessna Citation CJ2",
      capacity: "6 passengers",
      description: "Light jet perfect for short-range trips with exceptional comfort.",
      image: "/aircraft/cessna.svg",
    },
    {
      name: "Hawker Beechcraft 750",
      capacity: "8 passengers", 
      description: "Mid-size jet offering superior range and cabin comfort.",
      image: "/aircraft/hawker.svg",
    },
    {
      name: "Hawker Beechcraft 800XP",
      capacity: "8 passengers",
      description: "Advanced mid-size jet with excellent performance capabilities.",
      image: "/aircraft/hawker.svg",
    },
    {
      name: "Hawker Beechcraft 900XP",
      capacity: "8 passengers",
      description: "Latest generation mid-size jet with enhanced range.",
      image: "/aircraft/hawker.svg",
    },
    {
      name: "Falcon 2000 Easy",
      capacity: "10 passengers",
      description: "Super mid-size jet offering transcontinental range.",
      image: "/aircraft/falcon.svg",
    },
    {
      name: "Global 6000",
      capacity: "13-19 passengers",
      description: "Ultra-long-range jet with exceptional cabin space.",
      image: "/aircraft/global.svg",
    },
    {
      name: "Legacy 600",
      capacity: "13 passengers",
      description: "Large-cabin jet with outstanding comfort and range.",
      image: "/aircraft/legacy.svg",
    },
    {
      name: "Gulfstream G200",
      capacity: "8-10 passengers",
      description: "Super mid-size jet with superior performance.",
      image: "/aircraft/gulfstream.svg",
    },
    {
      name: "Augusta AW 109",
      capacity: "6 passengers",
      description: "Premium helicopter for short-distance luxury travel.",
      image: "/aircraft/augusta.svg",
    },
    {
      name: "Dassault Falcon 2000LX",
      capacity: "10 passengers",
      description: "Advanced long-range business jet.",
      image: "/aircraft/dassault.svg",
    },
    {
      name: "DA50 RG",
      capacity: "5 passengers",
      description: "Lightweight aircraft with excellent performance.",
      image: "/placeholder.svg",
    },
    {
      name: "DA62 (twin engine)",
      capacity: "7 passengers",
      description: "Versatile twin-engine aircraft for various missions.",
      image: "/placeholder.svg",
    },
    {
      name: "eDA40 (electric)",
      capacity: "4 passengers",
      description: "Eco-friendly electric aircraft for short flights.",
      image: "/placeholder.svg",
    },
    {
      name: "DA62 MPP (twin engine)",
      capacity: "2 passengers",
      description: "Multi-purpose aircraft for diverse operations.",
      image: "/placeholder.svg",
    },
    {
      name: "DHC-2 Beaver",
      capacity: "6 passengers",
      description: "Classic bush plane known for its versatility.",
      image: "/placeholder.svg",
    },
    {
      name: "M700 Fury​",
      capacity: "6 passengers",
      description: "High-performance aircraft for demanding missions.",
      image: "/placeholder.svg",
    },
    {
      name: "M500",
      capacity: "6 passengers",
      description: "Compact aircraft designed for efficiency.",
      image: "/placeholder.svg",
    },
    {
      name: "M350",
      capacity: "6 passengers",
      description: "Reliable aircraft for short to medium-range flights.",
      image: "/placeholder.svg",
    },
    {
      name: "Archer® LX​",
      capacity: "4 passengers",
      description: "Light aircraft ideal for flight training.",
      image: "/placeholder.svg",
    },
    {
      name: "Archer® DLX",
      capacity: "4 passengers",
      description: "Enhanced version of the Archer for better performance.",
      image: "/placeholder.svg",
    },
    {
      name: "FanJet 600",
      capacity: "1 passenger",
      description: "Compact jet designed for personal travel.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="fleet" className="py-20 bg-platinum-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Premium Fleet</h2>
          <p className="text-platinum-600 max-w-2xl mx-auto">
            Experience comfort with our meticulously maintained aircraft fleet,
            each selected for optimal performance and passenger comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aircraft.map((plane) => (
            <Card key={plane.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-white p-4 flex items-center justify-center h-48">
                <img
                  src={plane.image}
                  alt={plane.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plane.name}</h3>
                <p className="text-platinum-600 mb-4">{plane.description}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-platinum-500">
                    <span className="font-medium">Capacity:</span> {plane.capacity}
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
