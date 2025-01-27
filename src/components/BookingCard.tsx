import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Miami",
  "Seattle",
  "San Francisco",
  "Las Vegas",
  "Boston",
  "Washington DC",
  "Houston"
];

const BookingCard = () => {
  const [date, setDate] = useState<Date>();
  const [departure, setDeparture] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");

  return (
    <Card className="p-6 w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="departure">Departure</Label>
          <Select value={departure} onValueChange={setDeparture}>
            <SelectTrigger>
              <SelectValue placeholder="Select departure city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="arrival">Arrival</Label>
          <Select value={arrival} onValueChange={setArrival}>
            <SelectTrigger>
              <SelectValue placeholder="Select arrival city" />
            </SelectTrigger>
            <SelectContent>
              {cities.filter(city => city !== departure).map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
          <Select defaultValue="1">
            <SelectTrigger>
              <SelectValue placeholder="Select number of passengers" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? 'Passenger' : 'Passengers'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full">Search Flights</Button>
      </div>
    </Card>
  );
};

export default BookingCard;