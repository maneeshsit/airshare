import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

const BookingCard = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card className="p-6 w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="departure">Departure</Label>
          <Input id="departure" placeholder="Enter city or airport" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="arrival">Arrival</Label>
          <Input id="arrival" placeholder="Enter city or airport" />
        </div>

        <div className="space-y-2">
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="passengers">Passengers</Label>
          <Input
            id="passengers"
            type="number"
            min="1"
            placeholder="Number of passengers"
          />
        </div>

        <Button className="w-full">Search Flights</Button>
      </div>
    </Card>
  );
};

export default BookingCard;