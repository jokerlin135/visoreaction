import { ArrowLeft } from "lucide-react";

interface ExploreScreenProps {
  onBackClick?: () => void;
  onPhotoClick?: (title: string) => void;
}

const exploreCategories = [
  {
    id: 'change-hairstyle',
    title: 'Change Hairstyle',
    image: 'https://images.unsplash.com/photo-1620717841004-b2129070b674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsb25kZSUyMGhhaXJzdHlsZSUyMGNoYW5nZXxlbnwxfHx8fDE3NTk4MTgyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hasHairstyleOptions: true
  },
  {
    id: 'ai-couples',
    title: 'AI Couples',
    image: 'https://images.unsplash.com/photo-1597241612345-a3964d7022ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBoYXBweSUyMHRvZ2V0aGVyfGVufDF8fHx8MTc1OTgxODI1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'create-dating-pictures',
    title: 'Create Dating Pictures',
    image: 'https://images.unsplash.com/photo-1582851758656-f06471eb5299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBkYXRpbmclMjBwcm9maWxlJTIwc21pbGV8ZW58MXx8fHwxNzU5ODE4MjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hasHearts: true,
    hasProfileCircles: true
  },
  {
    id: 'gender-swap',
    title: 'Gender Swap',
    image: 'https://images.unsplash.com/photo-1701163802657-30d817693cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGdlbmRlciUyMHN3YXAlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk4MTgyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hasGenderProfile: true
  },
  {
    id: 'summer-vibes',
    title: 'Summer Vibes',
    image: 'https://images.unsplash.com/photo-1596202419734-d8337c44b77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN3aW13ZWFyJTIwc3VtbWVyJTIwdmFjYXRpb258ZW58MXx8fHwxNzU5ODE4MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isGrid: true
  }
];

const beachImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1611963057037-d013043902b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1514989940723-e8e51635b782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
];

export function ExploreScreen({ onBackClick, onPhotoClick }: ExploreScreenProps = {}) {
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
          Explore
        </h1>
      </div>

      {/* Explore Grid */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {/* Row 1: Change Hairstyle & AI Couples */}
          <div 
            className="cursor-pointer group"
            onClick={() => onPhotoClick?.(exploreCategories[0].title)}
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-500 to-purple-600">
              <img 
                src={exploreCategories[0].image}
                alt={exploreCategories[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Hairstyle Options Sidebar */}
              <div className="absolute left-2 top-4 flex flex-col gap-2">
                <div className="w-8 h-10 bg-white rounded-lg border-2 border-purple-500 flex items-center justify-center">
                  <div className="w-4 h-6 bg-pink-400 rounded-lg"></div>
                </div>
                <div className="w-8 h-10 bg-white rounded-lg border border-gray-300 flex items-center justify-center">
                  <div className="w-4 h-6 bg-purple-500 rounded-lg"></div>
                </div>
                <div className="w-8 h-10 bg-white rounded-lg border border-gray-300 flex items-center justify-center">
                  <div className="w-4 h-6 bg-orange-500 rounded-lg"></div>
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-lg">
                  {exploreCategories[0].title}
                </h3>
              </div>
            </div>
          </div>

          <div 
            className="cursor-pointer group"
            onClick={() => onPhotoClick?.(exploreCategories[1].title)}
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
              <img 
                src={exploreCategories[1].image}
                alt={exploreCategories[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-lg">
                  {exploreCategories[1].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Row 2: Create Dating Pictures & Gender Swap */}
          <div 
            className="cursor-pointer group"
            onClick={() => onPhotoClick?.(exploreCategories[2].title)}
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
              <img 
                src={exploreCategories[2].image}
                alt={exploreCategories[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Hearts */}
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                <span className="text-pink-500 text-lg">💗</span>
                <span className="text-pink-500 text-sm">💗</span>
              </div>
              
              {/* Profile Circles */}
              <div className="absolute bottom-16 left-4 flex gap-1">
                <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face" 
                    alt="Profile 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1553543852-3d58cf67529c?w=24&h=24&fit=crop&crop=face" 
                    alt="Profile 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" 
                    alt="Profile 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=24&h=24&fit=crop&crop=face" 
                    alt="Profile 4" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-lg">
                  {exploreCategories[2].title}
                </h3>
              </div>
            </div>
          </div>

          <div 
            className="cursor-pointer group"
            onClick={() => onPhotoClick?.(exploreCategories[3].title)}
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow bg-gradient-to-br from-pink-400 to-purple-500">
              <img 
                src={exploreCategories[3].image}
                alt={exploreCategories[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Gender Profile Circle */}
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                    alt="Gender Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-lg">
                  {exploreCategories[3].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Row 3: Summer Vibes (Grid layout - 2 columns wide) */}
          <div 
            className="col-span-2 cursor-pointer group mb-20"
            onClick={() => onPhotoClick?.(exploreCategories[4].title)}
          >
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
              {/* Grid of beach images */}
              <div className="grid grid-cols-3 h-full">
                {beachImages.map((imageUri, index) => (
                  <div key={index} className={`relative border border-white/20 ${index === 2 ? 'border-2 border-white bg-white/20' : ''}`}>
                    <img 
                      src={index === 0 ? exploreCategories[4].image : imageUri}
                      alt={`Beach ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-lg">
                  {exploreCategories[4].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Ad Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center justify-center bg-black rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-700 rounded"></div>
            <div className="flex items-center gap-2">
              <span className="bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs font-semibold">AD</span>
              <span className="text-gray-400 text-sm">loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}