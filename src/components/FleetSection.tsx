import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

const FleetSection = () => {
  const [selectedAircraft, setSelectedAircraft] = useState<null | {
    name: string;
    capacity: string;
    description: string;
    image: string;
    details?: {
      range?: string;
      speed?: string;
      altitude?: string;
      features?: string[];
    };
  }>(null);

  const aircraft = [
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
    },
    {
      name: "Hawker Beechcraft 900XP",
      capacity: "8 passengers",
      description: "Latest generation mid-size jet with enhanced range.",
      image: "/aircraft/beechcraft900xpmid.png",
    },
    {
      name: "Falcon 2000 Easy",
      capacity: "10 passengers",
      description: "Super mid-size jet offering transcontinental range.",
      image: "/aircraft/flacon200easy.png",
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
              <div className="bg-white p-6 flex items-center justify-center h-56">
                <img
                  src={plane.image}
                  alt={plane.name}
                  className="w-32 h-32 object-contain transform hover:scale-110 transition-transform duration-300"
                  style={{
                    filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))"
                  }}
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
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setSelectedAircraft(plane)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedAircraft} onOpenChange={() => setSelectedAircraft(null)}>
        {selectedAircraft && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedAircraft.name}</DialogTitle>
              <DialogDescription className="text-platinum-600">
                {selectedAircraft.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6">
              <div className="flex justify-center mb-8">
                <img
                  src={selectedAircraft.image}
                  alt={selectedAircraft.name}
                  className="w-48 h-48 object-contain"
                  style={{
                    filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))"
                  }}
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Specifications</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-platinum-600">Range</p>
                      <p className="font-medium">{selectedAircraft.details?.range || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-platinum-600">Speed</p>
                      <p className="font-medium">{selectedAircraft.details?.speed || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-platinum-600">Max Altitude</p>
                      <p className="font-medium">{selectedAircraft.details?.altitude || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-platinum-600">Capacity</p>
                      <p className="font-medium">{selectedAircraft.capacity}</p>
                    </div>
                  </div>
                </div>
                {selectedAircraft.details?.features && (
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {selectedAircraft.details.features.map((feature, index) => (
                        <li key={index} className="text-platinum-600">{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default FleetSection;
