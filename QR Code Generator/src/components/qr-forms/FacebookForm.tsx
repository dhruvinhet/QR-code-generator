import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Facebook, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FacebookForm = () => {
  const [profileUrl, setProfileUrl] = useState("");
  const navigate = useNavigate();

  const handleGenerateQR = () => {
    if (!profileUrl) return;
    
    navigate("/qr/customize", { 
      state: { 
        qrValue: profileUrl,
        qrType: "facebook"
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
          <Facebook className="w-6 h-6" />
          <h1>Generate Facebook QR Code</h1>
        </div>
        
        <Card className="glass-card p-6 space-y-6">
          <Input
            type="url"
            placeholder="Enter Facebook Profile URL"
            value={profileUrl}
            onChange={(e) => setProfileUrl(e.target.value)}
            className="w-full bg-gray-800/50 border-purple-500/30 text-white"
          />

          <Button
            onClick={handleGenerateQR}
            disabled={!profileUrl}
            className="w-full neon-button"
          >
            Generate QR Code
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default FacebookForm;