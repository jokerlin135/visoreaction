import { ArrowLeft } from "lucide-react";

interface HeadshotsScreenProps {
  onBackClick?: () => void;
  onPhotoClick?: (title: string) => void;
}

const headshotsCategories = [
  {
    id: 'linkedin-profile',
    title: 'LinkedIn Profile',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU5NzYyNzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'business',
    title: 'Business',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhlYWRzaG90JTIwbWFuJTIwYmx1ZSUyMHN1aXR8ZW58MXx8fHwxNzU5NzYyNzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'ai-portrait',
    title: 'AI Portrait',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTk4MjQwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function HeadshotsScreen({ onBackClick, onPhotoClick }: HeadshotsScreenProps = {}) {
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
          <span>82</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center gap-4 border-b border-gray-200">
        <div 
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={onBackClick}
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Headshots
        </h1>
      </div>

      {/* Headshots Grid */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {headshotsCategories.map((category, index) => (
            <div 
              key={category.id}
              className={`cursor-pointer group ${index === 2 ? 'col-span-1 mx-auto' : ''}`}
              onClick={() => onPhotoClick?.(category.title)}
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-lg">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grab Ad Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Grab</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Grab (VN)</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">AD</span>
              </div>
            </div>
          </div>
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
}