import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

const YoutubeForm = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      navigate("/qr/customize", { state: { qrValue: url } });
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

      <div className="max-w-xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-2xl font-semibold text-purple-300">
          <Youtube className="w-6 h-6" />
          <h1>Generate YouTube QR Code</h1>
        </div>
        
        <Card className="glass-card p-6 space-y-6">
          <form onSubmit={handleSubmit}>
            <Input
              type="url"
              placeholder="Enter YouTube URL (e.g., https://youtube.com/watch?v=...)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-gray-800/50 border-purple-500/30 text-white mb-6"
              required
            />

            <Button 
              type="submit"
              className="w-full neon-button"
              disabled={!url.trim()}
            >
              Generate QR Code
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default YoutubeForm;