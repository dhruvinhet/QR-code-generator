import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const TextForm = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      navigate("/qr/customize", { state: { qrValue: text } });
    }
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
        <h1 className="text-2xl font-bold text-center mb-6 text-purple-300">Create Text QR Code</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="text" className="text-purple-300">Enter Your Text</Label>
            <Textarea
              id="text"
              placeholder="Enter the text you want to encode in the QR code..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[150px] bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-400"
              required
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

export default TextForm;