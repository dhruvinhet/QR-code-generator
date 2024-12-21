import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BodyPatternsProps {
  bodyPattern: string;
  setBodyPattern: (value: string) => void;
  bodyColor: string;
  setBodyColor: (value: string) => void;
  bodySecondColor: string;
  setBodySecondColor: (value: string) => void;
}

const bodyPatterns = [
  "square", "rounded", "extra-rounded", "dots"
];

const gradients = [
  { name: "Purple Haze", colors: ["#c471ed", "#f64f59"] },
  { name: "Ocean Blue", colors: ["#2193b0", "#6dd5ed"] },
  { name: "Sunset", colors: ["#ee9ca7", "#ffdde1"] },
  { name: "Forest", colors: ["#11998e", "#38ef7d"] },
];

const BodyPatterns = ({ 
  bodyPattern, 
  setBodyPattern, 
  bodyColor, 
  setBodyColor,
  bodySecondColor,
  setBodySecondColor
}: BodyPatternsProps) => {
  return (
    <Card className="glass-card soft-glow">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-purple-300 soft-glow-text">Body Patterns</h3>
        <ToggleGroup 
          type="single" 
          value={bodyPattern}
          onValueChange={(value) => value && setBodyPattern(value)}
          className="grid grid-cols-2 gap-2 sm:grid-cols-4"
        >
          {bodyPatterns.map((pattern) => (
            <ToggleGroupItem 
              key={pattern} 
              value={pattern}
              className="aspect-square hover-glow data-[state=on]:glow-button hover:bg-purple-500/20 transition-colors text-purple-300 border-purple-500/20"
            >
              {pattern}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        <div className="mt-6 space-y-4">
          <div>
            <Label className="text-purple-300 soft-glow-text">Primary Color</Label>
            <Input 
              type="color" 
              value={bodyColor}
              onChange={(e) => setBodyColor(e.target.value)}
              className="h-10 w-full bg-transparent border-purple-500/20 soft-glow"
            />
          </div>

          <div>
            <Label className="text-purple-300 soft-glow-text">Secondary Color</Label>
            <Input 
              type="color" 
              value={bodySecondColor}
              onChange={(e) => setBodySecondColor(e.target.value)}
              className="h-10 w-full bg-transparent border-purple-500/20 soft-glow"
            />
          </div>

          <div>
            <Label className="text-purple-300 soft-glow-text">Gradient Presets</Label>
            <Select onValueChange={(value) => {
              const [color1, color2] = JSON.parse(value);
              setBodyColor(color1);
              setBodySecondColor(color2);
            }}>
              <SelectTrigger className="bg-gray-800/50 border-purple-500/20 text-purple-300 hover-glow">
                <SelectValue placeholder="Select gradient" />
              </SelectTrigger>
              <SelectContent>
                {gradients.map((gradient) => (
                  <SelectItem 
                    key={gradient.name} 
                    value={JSON.stringify(gradient.colors)}
                    className="text-purple-300"
                  >
                    {gradient.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BodyPatterns;