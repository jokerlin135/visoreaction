import { ArrowLeft, Camera, Image } from "lucide-react";
import { useState } from "react";

interface MangaDetailScreenProps {
  onBackClick?: () => void;
  title?: string;
}

export function MangaDetailScreen({ onBackClick, title = "Manga" }: MangaDetailScreenProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1593345215990-170543af6949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMG1hbmdhJTIwYXJ0JTIwc3R5bGUlMjB3b21hbnxlbnwxfHx8fDE3NTk4MjA4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1655825476295-e497a704a8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGdpcmwlMjBwb3J0cmFpdCUyMGFydHxlbnwxfHx8fDE3NTk4MjA4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1640534936814-80670cb60f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMHN0eWxlJTIwYXJ0d29yayUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTgyMDg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1612532849496-09829c0013a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGFydCUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU5ODIwODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1755756383664-af3cf523242b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFuaW1lJTIwYXJ0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5ODIwODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1755853913084-c55e7ef1746b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwYW5pbWUlMjBzdHlsZXxlbnwxfHx8fDE3NTk4MjA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const demoPhotos = [
    {
      id: 'demo1',
      image: "https://images.unsplash.com/photo-1627465688839-f088954a40a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbCUyMHBob3RvfGVufDF8fHx8MTc1OTgyMDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: 'Demo'
    },
    {
      id: 'demo2',
      image: "https://images.unsplash.com/photo-1600624688988-7522806e3d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYXJ0aXN0aWMlMjBzdHlsZXxlbnwxfHx8fDE3NTk4MjA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: 'Demo'
    }
  ];

  const handlePhotoScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const itemWidth = e.currentTarget.offsetWidth * 0.8; // 80% width for each item
    const index = Math.round(scrollLeft / itemWidth);
    setCurrentPhotoIndex(Math.min(index, photos.length - 1));
  };

  const handlePhotosClick = () => {
    console.log('Photos button clicked');
  };

  const handleCameraClick = () => {
    console.log('Camera button clicked');
  };

  const handleDemoClick = (demoId: string) => {
    console.log('Demo photo clicked:', demoId);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Status Bar */}
      <div className="h-8 bg-white flex justify-between items-center px-6 text-sm text-gray-900">
        <div className="flex items-center gap-2">
          <span>1:56</span>
          <span className="ml-2">📱</span>
          <span>🔇</span>
          <span>•</span>
        </div>
        <div className="flex items-center gap-1">
          <span>🔇</span>
          <span>📶</span>
          <span>📶</span>
          <span>78</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center gap-4">
        <div 
          className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
          onClick={onBackClick}
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </div>
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      </div>

      {/* Content */}
      <div className="flex-1 pb-24">
        {/* Photo Gallery */}
        <div className="bg-white px-4 py-6">
          <div 
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            onScroll={handlePhotoScroll}
          >
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className="flex-shrink-0 w-80 snap-center"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-[3/4]">
                  <img 
                    src={photo.image}
                    alt={`${title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Page Dots */}
          <div className="flex justify-center gap-1 mt-6">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentPhotoIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Add Your Photo Section */}
        <div className="bg-gray-100 px-4 pt-8 pb-12">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Add Your Photo
          </h2>

          <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
            {/* Photos Button */}
            <div 
              className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 flex flex-col items-center justify-center aspect-square cursor-pointer hover:shadow-lg transition-shadow"
              onClick={handlePhotosClick}
            >
              <Image className="w-8 h-8 text-white mb-2" />
              <span className="text-white text-sm font-medium">Photos</span>
            </div>

            {/* Camera Button */}
            <div 
              className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-4 flex flex-col items-center justify-center aspect-square cursor-pointer hover:shadow-lg transition-shadow"
              onClick={handleCameraClick}
            >
              <Camera className="w-8 h-8 text-white mb-2" />
              <span className="text-white text-sm font-medium">Camera</span>
            </div>

            {/* Demo Photos */}
            {demoPhotos.map((demo) => (
              <div
                key={demo.id}
                className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-square cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleDemoClick(demo.id)}
              >
                <img 
                  src={demo.image}
                  alt={demo.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2">
                  <span className="text-white text-xs font-medium text-center block">
                    {demo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Binance Ad Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">₿</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">Binance: Buy Bitcoin & Crypto</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-green-600 text-xs">▶ Google Play</span>
              </div>
            </div>
          </div>
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}