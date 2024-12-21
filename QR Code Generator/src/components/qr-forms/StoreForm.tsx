import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";

const StoreForm = () => {
  const [storeType, setStoreType] = useState("appstore");
  const [appId, setAppId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storeUrl = storeType === "appstore" 
      ? `https://apps.apple.com/app/id${appId}`
      : `https://play.google.com/store/apps/details?id=${appId}`;
    navigate("/qr/customize", { state: { qrValue: storeUrl } });
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
      
      <Card className="max-w-md mx-auto p-6 glass-card">
        <h1 className="text-2xl font-bold text-center mb-6 text-purple-300">Create App Store QR Code</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label className="text-purple-300">Select Store Type</Label>
            <RadioGroup
              value={storeType}
              onValueChange={setStoreType}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="appstore" id="appstore" className="border-purple-500/30" />
                <Label htmlFor="appstore" className="text-purple-300">App Store (iOS)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="playstore" id="playstore" className="border-purple-500/30" />
                <Label htmlFor="playstore" className="text-purple-300">Google Play Store (Android)</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="appId" className="text-purple-300">
              {storeType === "appstore" ? "App Store ID" : "Package Name"}
            </Label>
            <Input
              id="appId"
              placeholder={storeType === "appstore" ? "Enter App Store ID" : "Enter Package Name"}
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              required
              className="bg-gray-800/50 border-purple-500/30 text-white"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full neon-button"
          >
            Generate QR Code
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default StoreForm;