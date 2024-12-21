import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import URLForm from "./components/qr-forms/URLForm";
import YoutubeForm from "./components/qr-forms/YoutubeForm";
import EmailForm from "./components/qr-forms/EmailForm";
import WifiForm from "./components/qr-forms/WifiForm";
import FacebookForm from "./components/qr-forms/FacebookForm";
import LocationForm from "./components/qr-forms/LocationForm";
import InstagramForm from "./components/qr-forms/InstagramForm";
import TextForm from "./components/qr-forms/TextForm";
import StoreForm from "./components/qr-forms/StoreForm";
import QRCustomization from "./pages/QRCustomization";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/qr/url" element={<URLForm />} />
          <Route path="/qr/youtube" element={<YoutubeForm />} />
          <Route path="/qr/email" element={<EmailForm />} />
          <Route path="/qr/wifi" element={<WifiForm />} />
          <Route path="/qr/facebook" element={<FacebookForm />} />
          <Route path="/qr/location" element={<LocationForm />} />
          <Route path="/qr/instagram" element={<InstagramForm />} />
          <Route path="/qr/text" element={<TextForm />} />
          <Route path="/qr/store" element={<StoreForm />} />
          <Route path="/qr/customize" element={<QRCustomization />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;