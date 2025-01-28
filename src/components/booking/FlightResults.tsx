import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";

interface Flight {
  id: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  seatsAvailable: number;
}

interface FlightResultsProps {
  open: boolean;
  onClose: () => void;
  flights: Flight[];
  date: Date;
  passengers: number;
}

export const FlightResults = ({ open, onClose, flights, date, passengers }: FlightResultsProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Available Flights - {format(date, 'MMMM d, yyyy')}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
          <div className="space-y-4">
            {flights.map((flight) => (
              <Card key={flight.id} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-8">
                      <div>
                        <p className="text-sm text-gray-500">Departure</p>
                        <p className="font-semibold">{flight.departure}</p>
                        <p className="text-sm">{flight.departureTime}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Arrival</p>
                        <p className="font-semibold">{flight.arrival}</p>
                        <p className="text-sm">{flight.arrivalTime}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      {flight.seatsAvailable} seats available
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">₹{flight.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">per person</p>
                    <p className="font-medium">Total: ₹{(flight.price * passengers).toLocaleString()}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};