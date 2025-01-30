import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { cities } from "@/config/cities";
import { CitySelect } from "./booking/CitySelect";
import { DateSelect } from "./booking/DateSelect";
import { PassengerSelect } from "./booking/PassengerSelect";
import { FlightResults } from "./booking/FlightResults";
import { addHours } from "date-fns";
import { toast } from "@/components/ui/use-toast";

const BookingCard = () => {
  const [date, setDate] = useState<Date>();
  const [departure, setDeparture] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");
  const [passengers, setPassengers] = useState("1");
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock function to generate sample flights
  const generateFlights = () => {
    const baseTime = date || new Date();
    const flights = [];
    const prices = [15000, 18000, 22000, 25000, 28000];
    const times = [0, 2, 4, 6, 8];

    for (let i = 0; i < 5; i++) {
      const departureTime = addHours(baseTime, times[i]);
      const arrivalTime = addHours(departureTime, 2);
      
      flights.push({
        id: `flight-${i + 1}`,
        departure,
        arrival,
        departureTime: departureTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        arrivalTime: arrivalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        price: prices[i],
        seatsAvailable: Math.floor(Math.random() * 30) + 10,
      });
    }
    return flights;
  };

  const handleSearch = async () => {
    if (!departure || !arrival || !date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before searching.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowResults(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch flight results. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card className="p-6 w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="space-y-4">
          <CitySelect
            label="Departure"
            value={departure}
            onChange={setDeparture}
            cities={cities}
            placeholder="Select departure city"
          />
          
          <CitySelect
            label="Arrival"
            value={arrival}
            onChange={setArrival}
            cities={cities.filter(city => city !== departure)}
            placeholder="Select arrival city"
          />

          <DateSelect date={date} onSelect={setDate} />

          <PassengerSelect value={passengers} onChange={setPassengers} />

          <Button 
            className="w-full" 
            onClick={handleSearch}
            disabled={!departure || !arrival || !date || isLoading}
          >
            {isLoading ? "Searching..." : "Search Flights"}
          </Button>
        </div>
      </Card>

      <FlightResults
        open={showResults}
        onClose={() => setShowResults(false)}
        flights={generateFlights()}
        date={date!}
        passengers={parseInt(passengers)}
      />
    </>
  );
};

export default BookingCard;