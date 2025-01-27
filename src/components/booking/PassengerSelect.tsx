import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PassengerSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const PassengerSelect = ({ value, onChange }: PassengerSelectProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="passengers">Passengers</Label>
      <Select value={value} onValueChange={onChange}>
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
  );
};