import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FleetSection = () => {
  const aircraft = [
    {
      name: "Cessna Citation CJ2",
      capacity: "6 passengers",
      image: "/aircraft/cessna.svg",
    },
    {
      name: "Hawker Beechcraft 750",
      capacity: "8 passengers", 
      image: "/aircraft/hawker.svg",
    },
    {
      name: "Hawker Beechcraft 800XP",
      capacity: "8 passengers",
      image: "/aircraft/hawker.svg",
    },
    {
      name: "Hawker Beechcraft 900XP",
      capacity: "8 passengers",
      image: "/aircraft/hawker.svg",
    },
    {
      name: "Falcon 2000 Easy",
      capacity: "10 passengers",
      image: "/aircraft/falcon.svg",
    },
    {
      name: "Global 6000",
      capacity: "13-19 passengers",
      image: "/aircraft/global.svg",
    },
    {
      name: "Legacy 600",
      capacity: "13 passengers",
      image: "/aircraft/legacy.svg",
    },
    {
      name: "Gulfstream G200",
      capacity: "8-10 passengers",
      image: "/aircraft/gulfstream.svg",
    },
    {
      name: "Augusta AW 109",
      capacity: "6 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "Dassault Falcon 2000LX",
      capacity: "10 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "DA50 RG",
      capacity: "5 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "DA62 (twin engine)",
      capacity: "7 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "eDA40 (electric)",
      capacity: "4 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "DA62 MPP (twin engine)",
      capacity: "2 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "DHC-2 Beaver",
      capacity: "6 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "M700 Fury​",
      capacity: "6 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "M500",
      capacity: "6 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "M350",
      capacity: "6 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "Archer® LX​",
      capacity: "4 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "Archer® DLX",
      capacity: "4 passengers",
      image: "/placeholder.svg",
    },
    {
      name: "FanJet 600",
      capacity: "1 passenger",
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
              <img
                src={plane.image}
                alt={plane.name}
                className="w-full h-48 object-contain p-4"
              />
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
