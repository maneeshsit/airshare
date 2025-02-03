import { Aircraft } from "@/data/aircraftData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AircraftCardProps {
  aircraft: Aircraft;
  onLearnMore: (aircraft: Aircraft) => void;
}

const AircraftCard = ({ aircraft, onLearnMore }: AircraftCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-white p-6 flex items-center justify-center h-56">
        <img
          src={aircraft.image}
          alt={aircraft.name}
          className="w-32 h-32 object-contain transform hover:scale-110 transition-transform duration-300"
          style={{
            filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))"
          }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{aircraft.name}</h3>
        <p className="text-platinum-600 mb-4">{aircraft.description}</p>
        <div className="space-y-2 mb-4">
          <p className="text-sm text-platinum-500">
            <span className="font-medium">Capacity:</span> {aircraft.capacity}
          </p>
        </div>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => onLearnMore(aircraft)}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default AircraftCard;