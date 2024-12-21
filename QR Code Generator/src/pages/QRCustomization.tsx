import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import BodyPatterns from "@/components/qr-customization/BodyPatterns";
import ErrorLevel from "@/components/qr-customization/ErrorLevel";
import EyePatterns from "@/components/qr-customization/EyePatterns";
import QRPreview from "@/components/qr-customization/QRPreview";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type ErrorLevelType = "L" | "M" | "Q" | "H";

const QRCustomization = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [bodyPattern, setBodyPattern] = useState("squares");
  const [bodyColor, setBodyColor] = useState("#000000");
  const [bodySecondColor, setBodySecondColor] = useState("#000000");
  const [errorLevel, setErrorLevel] = useState<ErrorLevelType>("M");
  const [externalEyePattern, setExternalEyePattern] = useState("square");
  const [externalEyeColor, setExternalEyeColor] = useState("#000000");
  const [internalEyePattern, setInternalEyePattern] = useState("square");
  const [internalEyeColor, setInternalEyeColor] = useState("#000000");
  const [size, setSize] = useState([isMobile ? 180 : 360]);

  const handleErrorLevelChange = (value: ErrorLevelType) => {
    setErrorLevel(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/")}
        className="mb-6 hover:bg-purple-900/20 text-purple-300"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Button>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <BodyPatterns
              bodyPattern={bodyPattern}
              setBodyPattern={setBodyPattern}
              bodyColor={bodyColor}
              setBodyColor={setBodyColor}
              bodySecondColor={bodySecondColor}
              setBodySecondColor={setBodySecondColor}
            />
            <ErrorLevel
              errorLevel={errorLevel}
              setErrorLevel={handleErrorLevelChange}
            />
            <EyePatterns
              title="External Eye Patterns"
              pattern={externalEyePattern}
              setPattern={setExternalEyePattern}
              color={externalEyeColor}
              setColor={setExternalEyeColor}
            />
            <EyePatterns
              title="Internal Eye Patterns"
              pattern={internalEyePattern}
              setPattern={setInternalEyePattern}
              color={internalEyeColor}
              setColor={setInternalEyeColor}
            />
          </div>

          <div>
            <QRPreview
              size={size}
              setSize={setSize}
              bodyPattern={bodyPattern}
              bodyColor={bodyColor}
              bodySecondColor={bodySecondColor}
              errorLevel={errorLevel}
              externalEyePattern={externalEyePattern}
              externalEyeColor={externalEyeColor}
              internalEyePattern={internalEyePattern}
              internalEyeColor={internalEyeColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCustomization;