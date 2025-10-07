import { ArrowLeft, Plus, Play } from "lucide-react";
import { Button } from "./ui/button";
import { AdMobBanner } from "./AdMobBanner";
import { useState } from "react";
import exampleImage from 'figma:asset/d25ae6c55a303aa627b9a1a731be33be534b3f5e.png';

interface FaceSwapScreenProps {
  onBackClick?: () => void;
  title?: string;
}

export function FaceSwapScreen({ onBackClick, title = "Ghostface" }: FaceSwapScreenProps = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Mock carousel images - in real app, these would come from props or API
  const carouselImages = [
    exampleImage,
    "https://images.unsplash.com/photo-1608234773387-2cc931668c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBob25lJTIwY2FsbCUyMGhvcnJvciUyMG1vdmllJTIwc2NlbmV8ZW58MXx8fHwxNzU5NzY0MzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      {/* Status Bar */}
      <div className="h-8 bg-white flex justify-between items-center px-6 text-sm text-gray-900">
        <div className="flex items-center gap-2">
          <span>10:13</span>
          <div className="bg-blue-600 text-white px-1 rounded text-xs">HD</div>
        </div>
        <div className="flex items-center gap-1">
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div 
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={onBackClick}
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </div>
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2"
        >
          Remove Ad
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
        {/* Image Carousel */}
        <div className="mb-6">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-black relative">
            <img 
              src={carouselImages[currentSlide]}
              alt="Face Swap Template"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Add Your Face Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Add your face to swap
          </h2>
          
          <div className="w-20 h-20 border-2 border-purple-300 border-dashed rounded-full flex items-center justify-center bg-purple-50 cursor-pointer hover:bg-purple-100 transition-colors">
            <Plus className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        {/* Swap Face Button */}
        <div className="mb-8">
          <Button className="w-full bg-purple-200 hover:bg-purple-300 text-purple-800 rounded-2xl py-6 flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-purple-300 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-purple-800 ml-0.5" />
            </div>
            <div className="text-center">
              <div className="font-semibold text-lg">Swap Face</div>
              <div className="text-sm opacity-80">Watch Ad</div>
            </div>
          </Button>
        </div>
      </div>

      {/* AdMob Banner */}
      <AdMobBanner />
    </div>
  );
}