import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Youtube,
  MapPin,
  Instagram,
  FileText,
  Wifi,
  Facebook,
  Link,
  Mail,
  Store,
  Text
} from "lucide-react";
import { motion } from "framer-motion";

const QRTypes = [
  { id: 'url', icon: Link, label: 'URL/Link', size: 'lg', path: '/qr/url' },
  { id: 'text', icon: Text, label: 'Text', size: 'sm', path: '/qr/text' },
  { id: 'youtube', icon: Youtube, label: 'YouTube', size: 'sm', path: '/qr/youtube' },
  { id: 'email', icon: Mail, label: 'Email', size: 'md', path: '/qr/email' },
  { id: 'wifi', icon: Wifi, label: 'Wi-Fi', size: 'sm', path: '/qr/wifi' },
  { id: 'facebook', icon: Facebook, label: 'Facebook', size: 'sm', path: '/qr/facebook' },
  { id: 'location', icon: MapPin, label: 'Location', size: 'sm', path: '/qr/location' },
  { id: 'instagram', icon: Instagram, label: 'Instagram', size: 'sm', path: '/qr/instagram' },
  { id: 'store', icon: Store, label: 'App Store/Play Store', size: 'lg', path: '/qr/store' },
];

const Index = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse delay-1000" />
        <div className="absolute w-[300px] h-[300px] bg-green-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500" />
      </div>

      <div className="relative max-w-6xl mx-auto p-4 sm:p-8 z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white soft-glow-text">
            Create & Customize Your Dynamic QR code for FREE
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl">
            Generate QR codes for various purposes - URLs, social media, contact info, and more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-purple-300 soft-glow-text">Choose QR Type</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {QRTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`p-4 cursor-pointer transition-all glass-card hover:border-purple-500/30 ${
                      type.size === "lg"
                        ? "col-span-2"
                        : type.size === "md"
                        ? "col-span-1"
                        : "col-span-1"
                    }`}
                    onClick={() => navigate(type.path)}
                  >
                    <div className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <type.icon className="w-5 h-5 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                          {type.label}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="p-8 rounded-lg glass-card">
              <h3 className="text-xl font-semibold mb-4 text-purple-300 soft-glow-text">Why Choose Our QR Generator?</h3>
              <ul className="space-y-3 text-gray-300">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  Free and easy to use
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  Multiple QR code types
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  High-quality downloads
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  Advanced QR customization options
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;