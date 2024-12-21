import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Download, RefreshCcw } from "lucide-react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { createCustomQRCode, CustomPatternType } from "@/lib/custom-qr/CustomQRCode";
import { useIsMobile } from "@/hooks/use-mobile";

interface QRPreviewProps {
  size: number[];
  setSize: (value: number[]) => void;
  bodyPattern: string;
  bodyColor: string;
  bodySecondColor: string;
  errorLevel: "L" | "M" | "Q" | "H";
  externalEyePattern: string;
  externalEyeColor: string;
  internalEyePattern: string;
  internalEyeColor: string;
}

const patternTypeMap: Record<string, CustomPatternType> = {
  square: "square",
  rounded: "rounded",
  "extra-rounded": "extra-rounded",
  dots: "dots"
};

const QRPreview = ({
  size,
  setSize,
  bodyPattern,
  bodyColor,
  bodySecondColor,
  errorLevel,
  externalEyePattern,
  externalEyeColor,
  internalEyePattern,
  internalEyeColor,
}: QRPreviewProps) => {
  const location = useLocation();
  const { qrValue } = location.state || { qrValue: "https://example.com" };
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!qrRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const maxSize = Math.min(containerWidth - 32, isMobile ? 300 : 400);
    const initialSize = isMobile ? Math.min(180, maxSize) : Math.min(360, maxSize);
    
    if (size[0] > maxSize) {
      setSize([initialSize]);
    }

    qrCode.current = createCustomQRCode({
      width: size[0],
      height: size[0],
      data: qrValue,
      dotsOptions: {
        type: patternTypeMap[bodyPattern] || "square",
        color: bodyColor,
        gradient: bodySecondColor !== bodyColor ? {
          type: "linear",
          rotation: 45,
          colorStops: [
            { offset: 0, color: bodyColor },
            { offset: 1, color: bodySecondColor }
          ]
        } : undefined
      },
      cornersSquareOptions: {
        type: patternTypeMap[externalEyePattern] || "square",
        color: externalEyeColor
      },
      cornersDotOptions: {
        type: patternTypeMap[internalEyePattern] || "square",
        color: internalEyeColor
      },
      backgroundOptions: {
        color: "#1a1a1a",
      },
      qrOptions: {
        errorCorrectionLevel: errorLevel
      }
    });

    qrRef.current.innerHTML = '';
    qrCode.current.append(qrRef.current);
  }, [
    size, 
    bodyPattern, 
    bodyColor, 
    bodySecondColor, 
    errorLevel, 
    externalEyePattern, 
    externalEyeColor, 
    internalEyePattern, 
    internalEyeColor, 
    qrValue, 
    isMobile
  ]);

  const handleDownload = () => {
    if (qrCode.current) {
      qrCode.current.download({ 
        extension: "png",
        name: "qr-code"
      });
    }
    toast.success("QR Code downloaded successfully!");
  };

  const handleReset = () => {
    const initialSize = isMobile ? 180 : 360;
    setSize([initialSize]);
    toast.success("Settings reset successfully!");
  };

  const handleSizeChange = (newSize: number[]) => {
    if (!containerRef.current) return;
    
    const containerWidth = containerRef.current.clientWidth;
    const maxSize = Math.min(containerWidth - 32, isMobile ? 300 : 400);
    const constrainedSize = Math.min(newSize[0], maxSize);
    setSize([constrainedSize]);
  };

  return (
    <Card className="glass-card soft-glow">
      <CardContent className="p-6">
        <div 
          ref={containerRef}
          className="w-full max-w-[400px] mx-auto bg-white/5 backdrop-blur-lg rounded-lg border border-purple-500/20 flex items-center justify-center mb-6 p-4 soft-glow"
        >
          <div ref={qrRef} className="max-w-full" />
        </div>
        
        <div className="space-y-6">
          <div>
            <Label className="text-purple-300 soft-glow-text">Size (px)</Label>
            <Slider
              value={size}
              onValueChange={handleSizeChange}
              max={isMobile ? 300 : 400}
              min={100}
              step={10}
              className="mt-2"
            />
            <div className="text-sm text-purple-400/80 mt-1 soft-glow-text">{size}px</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="flex-1 glow-button hover-glow"
              onClick={handleDownload}
            >
              <Download className="mr-2" />
              Download PNG
            </Button>
            <Button 
              variant="outline" 
              onClick={handleReset}
              className="hover:bg-purple-900/20 border-purple-500/20 text-purple-300 hover-glow"
            >
              <RefreshCcw className="mr-2" />
              Reset Settings
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRPreview;
