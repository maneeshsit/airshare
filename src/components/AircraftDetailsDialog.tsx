import { Aircraft } from "@/data/aircraftData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface AircraftDetailsDialogProps {
  aircraft: Aircraft | null;
  onOpenChange: (open: boolean) => void;
}

const AircraftDetailsDialog = ({ aircraft, onOpenChange }: AircraftDetailsDialogProps) => {
  if (!aircraft) return null;

  return (
    <Dialog open={!!aircraft} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{aircraft.name}</DialogTitle>
          <DialogDescription className="text-platinum-600">
            {aircraft.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <div className="flex justify-center mb-8">
            <img
              src={aircraft.image}
              alt={aircraft.name}
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
                  <p className="font-medium">{aircraft.details?.range || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-platinum-600">Speed</p>
                  <p className="font-medium">{aircraft.details?.speed || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-platinum-600">Max Altitude</p>
                  <p className="font-medium">{aircraft.details?.altitude || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-sm text-platinum-600">Capacity</p>
                  <p className="font-medium">{aircraft.capacity}</p>
                </div>
              </div>
            </div>
            {aircraft.details?.features && (
              <div>
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {aircraft.details.features.map((feature, index) => (
                    <li key={index} className="text-platinum-600">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AircraftDetailsDialog;