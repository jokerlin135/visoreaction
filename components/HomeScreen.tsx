import { useState, useEffect } from "react";
import { Settings, ArrowRight, Camera, ImageIcon, Home, Wand2, User, Image, Video } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { AdMobBanner } from "./AdMobBanner";

interface HomeScreenProps {
  onSettingsClick?: () => void;
  onProClick?: () => void;
  onAIToolsClick?: () => void;
  onTrendingClick?: () => void;
  onForYouClick?: () => void;
  onHeadshotsClick?: () => void;
  onTopHitsClick?: () => void;
  onExploreClick?: () => void;
  onFixOldPhotoClick?: () => void;
  onHDImageClick?: () => void;
  onAIPhotoClick?: () => void;
  onTrendingPhotoClick?: (title?: string) => void;
  onMineClick?: () => void;
}

const trendingPhotos = [
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaG9zdGZhY2UlMjBtYXNrJTIwaG9ycm9yJTIwbW92aWV8ZW58MXx8fHwxNzU5NzU4NDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Ghostface"
  },
  {
    image: "https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTc1Njc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Figurine"
  },
  {
    image: "https://images.unsplash.com/photo-1689045246827-3b2a4ac9bfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJsJTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDF8fHx8MTc1OTc1Njc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Face Emoji"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwc3dhcCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTc2NTAyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Split"
  }
];

const forYouPhotos = [
  {
    image: "https://images.unsplash.com/photo-1692859532235-c93fa73bd5d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHlsZSUyMHBhaW50aW5nJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzU5ODIyMzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Cartoonify Yourself"
  },
  {
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjbGUlMjBmaXRuZXNzJTIwZ3ltfGVufDF8fHx8MTc1OTc2ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "AI Muscle"
  },
  {
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGFydHxlbnwxfHx8fDE3NTk3Njg1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Oil Painting"
  },
  {
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2V0Y2glMjBkcmF3aW5nJTIwYXJ0fGVufDF8fHx8MTc1OTc2ODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Sketch"
  }
];

const headshotsPhotos = [
  {
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTc2NTA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "LinkedIn Profile"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhlYWRzaG90JTIwbWFufGVufDF8fHx8MTc1OTc2NTA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Business"
  },
  {
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhlYWRzaG90JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5ODIyMzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "AI Portrait"
  }
];

const topHitsPhotos = [
  {
    image: "https://images.unsplash.com/photo-1698833994589-605fada9de5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwb3J0cmFpdCUyMGxvdmUlMjBoYXBweXxlbnwxfHx8fDE3NTk4MjIzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "AI Hugs"
  },
  {
    image: "https://images.unsplash.com/photo-1740801498451-498c568204ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhY2UlMjBhZ2luZyUyMHBvcnRyYWl0JTIwdGltZXxlbnwxfHx8fDE3NTk3NTM4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Aging Video"
  },
  {
    image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmUlMjBiYWJ5JTIwY2hpbGR8ZW58MXx8fHwxNzU5NzY4NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Future Baby"
  }
];

const explorePhotos = [
  {
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyc3R5bGUlMjBjaGFuZ2UlMjB3b21hbnxlbnwxfHx8fDE3NTk3Njg1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Change Hairstyle"
  },
  {
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByb21hbnRpYyUyMGxvdmV8ZW58MXx8fHwxNzU5NzY4NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "AI Couples"
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRpbmclMjBwaWN0dXJlcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTc2ODUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Create Dating Pictures"
  }
];

export function HomeScreen({
  onSettingsClick,
  onProClick,
  onAIToolsClick,
  onTrendingClick,
  onForYouClick,
  onHeadshotsClick,
  onTopHitsClick,
  onExploreClick,
  onFixOldPhotoClick,
  onHDImageClick,
  onAIPhotoClick,
  onTrendingPhotoClick,
  onMineClick
}: HomeScreenProps) {
  const [activeTab, setActiveTab] = useState('home');

  const renderHorizontalScrollPhotos = (photos: any[], onClick?: (title: string) => void) => (
    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
      {photos.map((photo, index) => (
        <div key={index} className="flex-shrink-0 w-32">
          <Card 
            className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
            onClick={() => onClick ? onClick(photo.title) : onTrendingPhotoClick?.(photo.title)}
          >
            <CardContent className="p-0">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-center">{photo.title}</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-40">
      {/* Status Bar */}
      <div className="bg-white text-black py-2 px-4 flex justify-between items-center border-b">
        <span className="font-medium">11:31</span>
        <div className="flex gap-2 items-center">
          <span>📶</span>
          <span>📶</span>
          <span className="bg-black text-white px-2 py-1 rounded text-xs">90</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
          <span className="text-white text-xl">🤖</span>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:shadow-lg transition-all"
            onClick={onProClick}
          >
            <span className="text-lg">👑</span>
            <span className="font-semibold">PRO</span>
          </Button>
          <button onClick={onSettingsClick} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Settings size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 space-y-6">
        {/* Story of Life Hero Banner */}
        <div className="relative mt-4 rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 p-6 relative">
            <div className="absolute top-4 left-4">
              <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-sm font-medium">5 y/o</span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-sm font-medium">65 y/o</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-white text-3xl font-bold leading-tight">
                Story<br />of Life
              </h2>
            </div>
            <div className="flex justify-end items-center h-32">
              <img 
                src="https://images.unsplash.com/photo-1666855139553-4fd9bc6a1ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeSUyMGxpZmUlMjBhZ2luZyUyMHRpbWVsaW5lJTIwYmVmb3JlJTIwYWZ0ZXJ8ZW58MXx8fHwxNzU5NzY4NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Aging timeline"
                className="w-40 h-32 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={onAIPhotoClick}>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <Camera size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-sm">AI Photo</h3>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={onHDImageClick}>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xs font-bold">HD</span>
              </div>
              <h3 className="font-semibold text-sm">HD Image</h3>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={onFixOldPhotoClick}>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <ImageIcon size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-sm">Fix Old Photo</h3>
            </CardContent>
          </Card>
        </div>

        {/* Trending Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Trending</h2>
              <span className="text-xl">🔥</span>
            </div>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700" onClick={onTrendingClick}>
              <span className="flex items-center gap-1">
                See All <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
          {renderHorizontalScrollPhotos(trendingPhotos)}
        </div>

        {/* For You Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">For You</h2>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700" onClick={onForYouClick}>
              <span className="flex items-center gap-1">
                See All <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
          {renderHorizontalScrollPhotos(forYouPhotos, onForYouClick)}
        </div>

        {/* Headshots Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Headshots</h2>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700" onClick={onHeadshotsClick}>
              <span className="flex items-center gap-1">
                See All <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
          {renderHorizontalScrollPhotos(headshotsPhotos, onHeadshotsClick)}
        </div>

        {/* Top Hits Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Top Hits</h2>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700" onClick={onTopHitsClick}>
              <span className="flex items-center gap-1">
                See All <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
          {renderHorizontalScrollPhotos(topHitsPhotos, onTopHitsClick)}
        </div>

        {/* Explore Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Explore</h2>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700" onClick={onExploreClick}>
              <span className="flex items-center gap-1">
                See All <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
          {renderHorizontalScrollPhotos(explorePhotos, onExploreClick)}
        </div>

        {/* Do you want more styles Section */}
        <div className="text-center py-6">
          <p className="text-gray-600 mb-4">Do you want more styles?</p>
          <Button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-2xl hover:bg-gray-300 transition-colors">
            <span className="flex items-center gap-2">
              Tell us <span className="text-xl">✨</span>
            </span>
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 mx-4 rounded-2xl shadow-lg">
        <div className="flex justify-around items-center">
          <button 
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-colors ${
              activeTab === 'home' ? 'text-purple-600 bg-purple-50' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('home')}
          >
            <Home size={24} />
            <span className="text-xs font-medium">Home</span>
          </button>
          
          <button 
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-colors ${
              activeTab === 'ai-tools' ? 'text-purple-600 bg-purple-50' : 'text-gray-600'
            }`}
            onClick={() => {
              setActiveTab('ai-tools');
              onAIToolsClick?.();
            }}
          >
            <Wand2 size={24} />
            <span className="text-xs font-medium">AI Tools</span>
          </button>
          
          <button 
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-colors ${
              activeTab === 'mine' ? 'text-purple-600 bg-purple-50' : 'text-gray-600'
            }`}
            onClick={() => {
              setActiveTab('mine');
              onMineClick?.();
            }}
          >
            <User size={24} />
            <span className="text-xs font-medium">Mine</span>
          </button>
        </div>
      </div>
    </div>
  );
}