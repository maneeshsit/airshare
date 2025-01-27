import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FleetSection = () => {
  const aircraft = [
    {
      name: "Citation XLS+",
      description: "Mid-size jet perfect for regional travel",
      capacity: "8 passengers",
      range: "2,100 nautical miles",
      image: "/placeholder.svg",
    },
    {
      name: "Phenom 300E",
      description: "Light jet with exceptional performance",
      capacity: "6 passengers",
      range: "2,010 nautical miles",
      image: "/placeholder.svg",
    },
    {
      name: "King Air 350i",
      description: "Turboprop with outstanding versatility",
      capacity: "8 passengers",
      range: "1,806 nautical miles",
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
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plane.name}</h3>
                <p className="text-platinum-600 mb-4">{plane.description}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-platinum-500">
                    <span className="font-medium">Capacity:</span> {plane.capacity}
                  </p>
                  <p className="text-sm text-platinum-500">
                    <span className="font-medium">Range:</span> {plane.range}
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