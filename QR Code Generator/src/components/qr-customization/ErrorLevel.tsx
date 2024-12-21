import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ErrorLevelProps {
  errorLevel: string;
  setErrorLevel: (value: string) => void;
}

const ErrorLevel = ({ errorLevel, setErrorLevel }: ErrorLevelProps) => {
  return (
    <Card className="animate-fade-in bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-purple-300">Scannability Error Level</h3>
        <RadioGroup 
          value={errorLevel}
          onValueChange={setErrorLevel}
          className="grid gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="L" id="L" className="border-purple-500/30" />
            <Label htmlFor="L" className="text-purple-300">Smallest - Less complex pattern, basic error correction</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="M" id="M" className="border-purple-500/30" />
            <Label htmlFor="M" className="text-purple-300">Medium - Balanced complexity and error correction</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Q" id="Q" className="border-purple-500/30" />
            <Label htmlFor="Q" className="text-purple-300">High - More complex pattern, better error correction</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="H" id="H" className="border-purple-500/30" />
            <Label htmlFor="H" className="text-purple-300">Best - Most complex pattern, highest error correction</Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default ErrorLevel;