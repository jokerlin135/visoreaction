import { ArrowLeft } from "lucide-react";

interface TopHitsScreenProps {
  onBackClick?: () => void;
  onPhotoClick?: (title: string) => void;
}

const topHitsCategories = [
  {
    id: 'ai-hugs',
    title: 'AI Hugs',
    image: 'https://images.unsplash.com/photo-1633653331364-9a6f17b9aed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBodWclMjBhZmZlY3Rpb24lMjBsb3ZlJTIwaGFwcHl8ZW58MXx8fHwxNzU5ODI0MDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'aging-video',
    title: 'Aging Video',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGFnaW5nJTIwdGltZSUyMGVsZGVybHl8ZW58MXx8fHwxNzU5NzYzNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'future-baby',
    title: 'Future Baby',
    image: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJhYnklMjBjaGlsZCUyMHNtaWxlJTIwaGFwcHl8ZW58MXx8fHwxNzU5NzYzNTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hasOverlay: true
  },
  {
    id: 'animate-photos',
    title: 'Animate Photos',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5NzYzNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hasTag: true
  },
  {
    id: 'minime',
    title: 'MiniMe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbiUyMHNtaWxlJTIwaGFwcHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk3NjM1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'animal-toon',
    title: 'Animal Toon',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMGFuaW1hbCUyMGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzU5NzYzNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function TopHitsScreen({ onBackClick, onPhotoClick }: TopHitsScreenProps = {}) {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Status Bar */}
      <div className="h-8 bg-white flex justify-between items-center px-6 text-sm text-gray-900">
        <div className="flex items-center gap-2">
          <span>10:31</span>
          <span className="ml-2">📱</span>
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
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={onBackClick}
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Top Hits
        </h1>
      </div>

      {/* Top Hits Grid */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {topHitsCategories.map((category, index) => (
            <div 
              key={category.id}
              className="cursor-pointer group"
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
                
                {/* Future Baby Special Overlay */}
                {category.hasOverlay && (
                  <div className="absolute bottom-16 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" 
                        alt="Parent 1" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">+</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1553543852-3d58cf67529c?w=32&h=32&fit=crop&crop=face" 
                        alt="Parent 2" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Friends Tag for Animate Photos */}
                {category.hasTag && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    Friends
                  </div>
                )}
                
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

      {/* MEX Ad Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-sm">🏔️</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">MEX</span>
              </div>
              <p className="text-gray-300 text-sm">Sự kiến tiết kiếm PI</p>
              <p className="text-gray-400 text-xs">Đang hoạt động ở 668+ TG khu UT</p>
            </div>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-600 transition-colors">
            Tham gia ngay
          </button>
        </div>
      </div>
    </div>
  );
}