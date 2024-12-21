import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleGenerateQR = () => {
    if (!email) return;
    
    let mailto = `mailto:${email}`;
    if (subject) {
      mailto += `?subject=${encodeURIComponent(subject)}`;
    }
    
    navigate("/qr/customize", { 
      state: { 
        qrValue: mailto,
        qrType: "email"
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
          <Mail className="w-6 h-6" />
          <h1>Generate Email QR Code</h1>
        </div>
        
        <Card className="glass-card p-6 space-y-6">
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800/50 border-gray-700 text-white"
            />
            <Input
              type="text"
              placeholder="Enter subject (optional)"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-gray-800/50 border-gray-700 text-white"
            />
          </div>

          <Button
            onClick={handleGenerateQR}
            disabled={!email}
            className="w-full neon-button"
          >
            Generate QR Code
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default EmailForm;