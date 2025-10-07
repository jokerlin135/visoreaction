import { ArrowLeft, Camera, Image as ImageIcon } from "lucide-react";

interface FixOldPhotoScreenProps {
  onBackClick?: () => void;
}

export function FixOldPhotoScreen({ onBackClick }: FixOldPhotoScreenProps = {}) {
  const handlePhotoSelect = () => {
    console.log('Photo selected from gallery');
  };

  const handleCameraCapture = () => {
    console.log('Camera capture');
  };

  const handleDemoClick = (demoNumber: number) => {
    console.log(`Demo ${demoNumber} clicked`);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Status Bar */}
      <div className="h-8 bg-white flex justify-between items-center px-6 text-sm text-gray-900">
        <div className="flex items-center gap-2">
          <span>10:27</span>
          <span className="ml-2">📷</span>
          <span>•</span>
        </div>
        <div className="flex items-center gap-1">
          <span>🔇</span>
          <span>📶</span>
          <span>📶</span>
          <span>81</span>
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
        <h1 className="text-xl font-semibold text-gray-900">
          Fix Old Photo
        </h1>
      </div>

      {/* Before/After Image Display */}
      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-white">
            {/* Split view container */}
            <div className="flex h-full">
              {/* Before (Left side - damaged photo) */}
              <div className="w-1/2 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512373977447-6a8a90da5f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkYW1hZ2VkJTIwdmludGFnZSUyMHBob3RvfGVufDF8fHx8MTc1OTgxODc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Damaged old photo"
                  className="w-full h-full object-cover"
                />
                {/* Damage overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/40 via-transparent to-gray-600/30"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  opacity: 0.3
                }}></div>
              </div>
              
              {/* After (Right side - restored photo) */}
              <div className="w-1/2 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1597515751759-cc67d3fe3f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0b3JlZCUyMHZpbnRhZ2UlMjBmYW1pbHklMjBwaG90b3xlbnwxfHx8fDE3NTk4MTg3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Restored photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Center divider line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white transform -translate-x-px"></div>
          </div>
        </div>
      </div>

      {/* Add Your Photo Section */}
      <div className="px-4 pb-6">
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6">
            <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">
              Add Your Photo
            </h2>
            
            {/* Action Buttons Row */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Photos Button */}
              <button
                onClick={handlePhotoSelect}
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-2xl p-4 flex flex-col items-center gap-2 transition-colors"
              >
                <ImageIcon className="w-8 h-8" />
                <span className="font-medium">Photos</span>
              </button>

              {/* Camera Button */}
              <button
                onClick={handleCameraCapture}
                className="bg-pink-500 hover:bg-pink-600 text-white rounded-2xl p-4 flex flex-col items-center gap-2 transition-colors"
              >
                <Camera className="w-8 h-8" />
                <span className="font-medium">Camera</span>
              </button>
            </div>

            {/* Demo Buttons Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Demo 1 */}
              <button
                onClick={() => handleDemoClick(1)}
                className="relative rounded-2xl overflow-hidden group hover:scale-105 transition-transform"
              >
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1622180458663-65d1cecfedf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkYW1hZ2VkJTIwcGhvdG9ncmFwaCUyMHJlc3RvcmF0aW9ufGVufDF8fHx8MTc1OTgxODc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Demo 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Demo</span>
                </div>
              </button>

              {/* Demo 2 */}
              <button
                onClick={() => handleDemoClick(2)}
                className="relative rounded-2xl overflow-hidden group hover:scale-105 transition-transform"
              >
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1600713715733-cba308d9301c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmFtaWx5JTIwcG9ydHJhaXQlMjByZXN0b3JhdGlvbnxlbnwxfHx8fDE3NTk4MTg3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Demo 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Demo</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grab Ad Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">AD</span>
                <span className="font-medium text-gray-900">Grab (VN)</span>
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