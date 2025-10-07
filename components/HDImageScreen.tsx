import { ArrowLeft, Camera, Image as ImageIcon } from "lucide-react";

interface HDImageScreenProps {
  onBackClick?: () => void;
}

export function HDImageScreen({ onBackClick }: HDImageScreenProps = {}) {
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
          HD Image
        </h1>
      </div>

      {/* Before/After Image Display */}
      <div className="px-4 py-6">
        <div className="max-w-sm mx-auto">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-white">
            {/* Split view container */}
            <div className="flex h-full">
              {/* Before (Left side - lower quality) */}
              <div className="w-1/2 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 via-purple-400 to-purple-600">
                  {/* Blurred/lower quality version */}
                  <img 
                    src="https://images.unsplash.com/photo-1714685825758-fd9a7c8722a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWUlMjBmbG93ZXIlMjBwdXJwbGUlMjBtYWNybyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1OTgxOTA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Low quality bee photo"
                    className="w-full h-full object-cover blur-sm"
                    style={{ filter: 'blur(2px) contrast(0.8) brightness(0.9)' }}
                  />
                  {/* Gray overlay for low quality effect */}
                  <div className="absolute inset-0 bg-gray-500/20"></div>
                </div>
              </div>
              
              {/* After (Right side - HD quality) */}
              <div className="w-1/2 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1714685825758-fd9a7c8722a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWUlMjBmbG93ZXIlMjBwdXJwbGUlMjBtYWNybyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1OTgxOTA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="HD quality bee photo"
                  className="w-full h-full object-cover"
                  style={{ filter: 'contrast(1.1) saturate(1.2) brightness(1.05)' }}
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
        <div className="max-w-sm mx-auto">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">
              Add Your Photo
            </h2>
            
            {/* Action Buttons Grid */}
            <div className="grid grid-cols-2 gap-4">
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

              {/* Demo 1 */}
              <button
                onClick={() => handleDemoClick(1)}
                className="relative rounded-2xl overflow-hidden group hover:scale-105 transition-transform"
              >
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1667842287310-95f20dcbce8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJkJTIwdHJvcGljYWwlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTk4MTkwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                    src="https://images.unsplash.com/photo-1693823163769-bb7ca8afdbcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXJmbHklMjBuYXR1cmUlMjBjbG9zZXVwfGVufDF8fHx8MTc1OTgxOTA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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