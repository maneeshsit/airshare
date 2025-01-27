import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { cities } from "@/config/cities";
import { CitySelect } from "./booking/CitySelect";
import { DateSelect } from "./booking/DateSelect";
import { PassengerSelect } from "./booking/PassengerSelect";

const BookingCard = () => {
  const [date, setDate] = useState<Date>();
  const [departure, setDeparture] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");
  const [passengers, setPassengers] = useState("1");

  return (
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

        <Button className="w-full">Search Flights</Button>
      </div>
    </Card>
  );
};

export default BookingCard;