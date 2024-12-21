import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface EyePatternsProps {
  title: string;
  pattern: string;
  setPattern: (value: string) => void;
  color: string;
  setColor: (value: string) => void;
}

const eyePatterns = [
  "square",
  "extra-rounded"
];

const EyePatterns = ({ 
  title,
  pattern, 
  setPattern, 
  color, 
  setColor 
}: EyePatternsProps) => {
  return (
    <Card className="glass-card soft-glow">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-purple-300 soft-glow-text">{title}</h3>
        <ToggleGroup 
          type="single" 
          value={pattern}
          onValueChange={(value) => value && setPattern(value)}
          className="grid grid-cols-2 gap-2"
        >
          {eyePatterns.map((p) => (
            <ToggleGroupItem 
              key={p} 
              value={p}
              className="aspect-square hover-glow data-[state=on]:glow-button hover:bg-purple-500/20 transition-colors text-purple-300 border-purple-500/20"
            >
              {p}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <div className="mt-4">
          <Label className="text-purple-300 soft-glow-text">Color</Label>
          <Input 
            type="color" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="h-10 w-full bg-transparent border-purple-500/20 soft-glow"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default EyePatterns;