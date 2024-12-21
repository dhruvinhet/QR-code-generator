import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LocationForm = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const navigate = useNavigate();

  const handleGenerateQR = () => {
    if (!latitude || !longitude) return;
    
    const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    navigate("/qr/customize", { 
      state: { 
        qrValue: locationUrl,
        qrType: "location"
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-8 animate-fade-in">
      <Button 
        variant="outline" 
        onClick={() => navigate("/")}
        className="mb-6 text-purple-300 hover:bg-purple-900/20 border-purple-500/30"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Button>

      <div className="max-w-xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-2xl font-semibold text-purple-300">
          <MapPin className="w-6 h-6" />
          <h1>Generate Location QR Code</h1>
        </div>
        
        <Card className="glass-card p-6 space-y-6">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              className="w-full bg-gray-800/50 border-purple-500/30 text-white"
            />
            <Input
              type="text"
              placeholder="Longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              className="w-full bg-gray-800/50 border-purple-500/30 text-white"
            />
          </div>

          <Button
            onClick={handleGenerateQR}
            disabled={!latitude || !longitude}
            className="w-full neon-button"
          >
            Generate QR Code
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default LocationForm;