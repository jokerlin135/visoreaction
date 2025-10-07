import { useState, useEffect } from "react";
import { ArrowLeft, Camera, Image } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { AdMobBanner } from "./AdMobBanner";

interface FigurineScreenProps {
  onBackClick?: () => void;
}

const figurineImages = [
  "https://images.unsplash.com/photo-1745483537091-1dea84b498ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWd1cmluZSUyMHRveSUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NTk3NjU3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1732613942657-61684c51eb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGNoYXJhY3RlciUyMG1vZGVsfGVufDF8fHx8MTc1OTc2NTcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=1080&q=80",
  "https://images.unsplash.com/photo-1745483537091-1dea84b498ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWd1cmluZSUyMHRveSUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NTk3NjU3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

const demoUsers = [
  {
    name: "Demo",
    image: "https://images.unsplash.com/photo-1724414768978-21ee5420b925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NjY0MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Demo",
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1OTczMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function FigurineScreen({ onBackClick }: FigurineScreenProps = {}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % figurineImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="bg-black text-white py-2 px-4 flex justify-between items-center">
        <span>10:43</span>
        <div className="flex gap-2">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white p-4 flex items-center gap-4 shadow-sm">
        <button 
          onClick={onBackClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl">Figurine</h1>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Image Carousel */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg">
            <img
              src={figurineImages[currentImageIndex]}
              alt="Figurine"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {figurineImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Add Your Photo Section */}
        <div className="bg-purple-50 rounded-2xl p-6 space-y-6">
          <h2 className="text-xl text-center text-gray-800">Add Your Photo</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Photos Button */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Image size={32} className="text-white" />
                </div>
                <p className="text-white">Photos</p>
              </CardContent>
            </Card>

            {/* Camera Button */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Camera size={32} className="text-white" />
                </div>
                <p className="text-white">Camera</p>
              </CardContent>
            </Card>

            {/* Demo Users */}
            {demoUsers.map((user, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 overflow-hidden">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700">{user.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* AdMob Banner */}
      <div className="mt-auto">
        <AdMobBanner />
      </div>
    </div>
  );
}