import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FleetSection = () => {
  const aircraft = [
    {
      name: "Cessna Citation CJ2",
      capacity: "6 passengers",
      image: "/cj2.png",
    },
    {
      name: "Hawker Beechcraft 750",
      capacity: "8 passengers",
      image: "/beachcraft750.png",
    },
    {
      name: "Hawker Beechcraft 800XP",
      capacity: "8 passengers",
      image: "/beechcraft800xp.png",
    },
    {
      name: "Hawker Beechcraft 900XP",
      capacity: "8 passengers",
      image: "/beechcraft900xpmid.png",
    },
    {
      name: "Falcon 2000 Easy",
      capacity: "10 passengers",
      image: "/flacon200easy.png",
    },
    {
      name: "Global 6000",
      capacity: "13-19 passengers",
      image: "/global6000large.png",
    },
    {
      name: "Legacy 600",
      capacity: "13 passengers",
      image: "/legacy600large.png",
    },
    {
      name: "Gulfstream G200",
      capacity: "8-10 passengers",
      image: "/gulfstreamg200supermid.png",
    },
    {
      name: "Dassault Falcon 2000LX",
      capacity: "10 passengers",
      image: "/falcon2000lx.png",
    },
    {
      name: "DA50 RG",
      capacity: "5 passengers",
      image: "/da50rg.png",
    },
    {
      name: "DA62 (twin engine)",
      capacity: "7 passengers",
      image: "/da62.png",
    },
    {
      name: "DA62 MPP (twin engine)",
      capacity: "2 passengers",
      image: "/da62mpp.png",
    },
    {
      name: "DHC-2 Beaver",
      capacity: "6 passengers",
      image: "/dhc2.png",
    },
    {
      name: "M700 Fury​",
      capacity: "6 passengers",
      image: "/m700fury.png",
    },
    {
      name: "Archer® LX​",
      capacity: "4 passengers",
      image: "/archerlx.png",
    },
    {
      name: "Archer® DLX",
      capacity: "4 passengers",
      image: "/archerdlx.png",
    },
    {
      name: "FanJet 600",
      capacity: "1 passenger",
      image: "/fanjet600.png",
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
                className="w-full h-48 object-cover"
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