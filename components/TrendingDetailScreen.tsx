import { ArrowLeft, Camera, Image } from "lucide-react";
import { useState } from "react";

interface TrendingDetailScreenProps {
  onBackClick?: () => void;
  title?: string;
}

export function TrendingDetailScreen({ onBackClick, title = "Halloween" }: TrendingDetailScreenProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1624978229553-a9e955b46fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhbGxvd2VlbiUyMG1ha2V1cCUyMGNvc3R1bWV8ZW58MXx8fHwxNzU5ODIwNTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1665702884785-c8a7a20a46a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxsb3dlZW4lMjBnb3RoaWMlMjBtYWtldXAlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk4MjA1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1636005811007-9715266f1160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxsb3dlZW4lMjB3aXRjaCUyMG1ha2V1cCUyMHdvbWFufGVufDF8fHx8MTc1OTgyMDUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1741027517018-a8bad3cc29af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxsb3dlZW4lMjBwYXJ0eSUyMG1ha2V1cCUyMHdvbWFufGVufDF8fHx8MTc1OTgyMDUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const demoPhotos = [
    {
      id: 'demo1',
      image: "https://images.unsplash.com/photo-1670408377169-7babedc25a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbCUyMGRlbW98ZW58MXx8fHwxNzU5ODIwNTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: 'Demo'
    },
    {
      id: 'demo2',
      image: "https://images.unsplash.com/photo-1639986162505-c9bcccfc9712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwZGVtbyUyMHBob3RvfGVufDF8fHx8MTc1OTgyMDUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: 'Demo'
    }
  ];

  const handlePhotoScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const itemWidth = e.currentTarget.offsetWidth;
    const index = Math.round(scrollLeft / itemWidth);
    setCurrentPhotoIndex(index);
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
          <span>1:55</span>
          <span className="ml-2">📱</span>
          <span>📷</span>
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
      <div className="bg-white px-4 py-4 flex items-center gap-4 border-b border-gray-200">
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
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            onScroll={handlePhotoScroll}
          >
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className="flex-shrink-0 w-64 snap-center"
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
          <div className="flex justify-center gap-2 mt-6">
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
        <div className="bg-gray-100 px-4 py-8">
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

      {/* Ad Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">xad</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">xad-GATE</span>
              </div>
            </div>
          </div>
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
}