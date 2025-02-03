import { useState } from "react";
import { Aircraft, aircraftData } from "@/data/aircraftData";
import AircraftCard from "./AircraftCard";
import AircraftDetailsDialog from "./AircraftDetailsDialog";

const FleetSection = () => {
  const [selectedAircraft, setSelectedAircraft] = useState<Aircraft | null>(null);

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
          {aircraftData.map((aircraft) => (
            <AircraftCard
              key={aircraft.name}
              aircraft={aircraft}
              onLearnMore={setSelectedAircraft}
            />
          ))}
        </div>
      </div>

      <AircraftDetailsDialog
        aircraft={selectedAircraft}
        onOpenChange={(open) => !open && setSelectedAircraft(null)}
      />
    </section>
  );
};

export default FleetSection;