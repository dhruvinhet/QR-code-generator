import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const URLForm = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please enter a URL");
      return;
    }
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      toast.error("Please enter a valid URL starting with http:// or https://");
      return;
    }
    navigate("/qr/customize", { state: { qrValue: url } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/")}
        className="mb-6 text-purple-300 hover:bg-purple-900/20"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Button>

      <Card className="max-w-md mx-auto glass-card">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-purple-300">
            Create URL QR Code
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="url"
                placeholder="Enter URL (e.g., https://example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-gray-800/50 border-purple-500/30 text-purple-100 placeholder:text-purple-300/50"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Generate QR Code
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default URLForm;