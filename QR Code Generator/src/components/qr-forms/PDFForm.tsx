import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { QRCodeSVG } from "qrcode.react";
import { FileUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB in bytes

const PDFForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (!file) {
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: "Error",
        description: "File size must be less than 100MB",
        variant: "destructive",
      });
      return;
    }

    if (file.type !== "application/pdf") {
      toast({
        title: "Error",
        description: "Please select a PDF file",
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    const fileUrl = URL.createObjectURL(file);
    setPdfUrl(fileUrl);
    
    toast({
      title: "Success",
      description: "PDF file selected successfully!",
    });
  };

  const handleGenerateQR = () => {
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a PDF file first",
        variant: "destructive",
      });
      return;
    }
    
    // Navigate to customization page with the PDF URL
    navigate("/qr/customize", { state: { qrValue: pdfUrl, qrType: "pdf" } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-8">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
          <FileUp className="w-6 h-6" />
          <h1>Generate PDF QR Code</h1>
        </div>
        
        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <label
              htmlFor="pdf-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FileUp className="w-8 h-8 mb-2 text-gray-500" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload PDF</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PDF (MAX. 100MB)</p>
              </div>
              <input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {selectedFile && (
              <div className="text-sm text-gray-600">
                Selected file: {selectedFile.name}
              </div>
            )}
          </div>

          {pdfUrl && (
            <div className="flex justify-center">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <QRCodeSVG
                  id="qr-code"
                  value={pdfUrl}
                  size={200}
                  level="H"
                  includeMargin
                />
              </div>
            </div>
          )}

          <Button
            onClick={handleGenerateQR}
            disabled={!selectedFile}
            className="w-full"
          >
            Generate QR Code
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PDFForm;