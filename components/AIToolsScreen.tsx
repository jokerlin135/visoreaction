import { Settings, Home, Wand2, User } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";

interface AIToolsScreenProps {
  onBackClick?: () => void;
  onSettingsClick?: () => void;
  onProClick?: () => void;
}

const aiToolsFeatures = [
  {
    id: 'improve-quality',
    title: 'Improve Photo Quality',
    image: 'https://images.unsplash.com/photo-1694450198239-733c079e98e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWUlMjBmbG93ZXIlMjBtYWNybyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1OTc1ODk0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-purple-600/80 to-purple-800/80'
  },
  {
    id: 'ai-styles',
    title: 'Generate dozens of styles with AI',
    image: 'https://images.unsplash.com/photo-1711194992405-6b5aad30b8fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VyJTIwZGlmZmVyZW50JTIwd29tZW4lMjBwb3J0cmFpdCUyMHN0eWxlc3xlbnwxfHx8fDE3NTk3NTg5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-gray-800/80 to-yellow-600/80',
    hasProfileImage: true,
    profileImage: 'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTczMDA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'restore-photo',
    title: 'Restore Old Photo',
    image: 'https://images.unsplash.com/photo-1600713715773-cae15017841a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkYW1hZ2VkJTIwcGhvdG8lMjByZXN0b3JhdGlvbiUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1OTc1ODk1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-gray-900/80 to-gray-700/80'
  },
  {
    id: 'generate-photos',
    title: 'Generate Your Photos with AI',
    image: 'https://images.unsplash.com/photo-1617818046956-38df20876e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0ZSUyMHBvcnRyYWl0JTIwcGhvdG9zfGVufDF8fHx8MTc1OTc3MTgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-gray-900/80 to-brown-700/80'
  },
  {
    id: 'face-swap',
    title: 'Be Anyone with Face Swap',
    image: 'https://images.unsplash.com/photo-1658070845252-8de7cfb53652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmhlcm8lMjBmYWNlJTIwc3dhcCUyMGZhbnRhc3klMjBjaGFyYWN0ZXJzfGVufDF8fHx8MTc1OTc1ODk2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-blue-900/80 to-orange-600/80',
    hasProfileImages: true,
    profileImages: [
      'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTczMDA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTc1Njc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  },
  {
    id: 'baby-generator',
    title: 'AI Baby Generator',
    image: 'https://images.unsplash.com/photo-1639931723005-483ded9ab43b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwYmFieSUyMGdlbmVyYXRvciUyMGZhbWlseSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTc1ODk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-pink-600/80 to-pink-800/80',
    hasProfileImages: true,
    hasArrow: true,
    profileImages: [
      'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTczMDA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTc1Njc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  },
  {
    id: 'story-of-life',
    title: 'The Story of Life',
    image: 'https://images.unsplash.com/photo-1668185380754-f84fe36e8bf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGdpcmwlMjBvbGRlciUyMHdvbWFuJTIwYWdpbmclMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NTk3NzE4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-orange-600/80 to-orange-800/80',
    hasAgeLabels: true
  },
  {
    id: 'retake-photos',
    title: 'Retake your photos for brighter, wide-open eyes!',
    image: 'https://images.unsplash.com/photo-1751730740515-5bf81a1a955c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYmVmb3JlJTIwYWZ0ZXIlMjBicmlnaHQlMjBleWVzfGVufDF8fHx8MTc1OTc3MTgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-blue-600/80 to-purple-600/80'
  }
];

export function AIToolsScreen({ onBackClick, onSettingsClick, onProClick }: AIToolsScreenProps = {}) {
  const [activeTab, setActiveTab] = useState('ai-tools');

  return (
    <div className="min-h-screen bg-gray-50 pb-40">
      {/* Status Bar */}
      <div className="bg-white text-black py-2 px-4 flex justify-between items-center border-b">
        <span className="font-medium">12:27</span>
        <div className="flex gap-2 items-center">
          <span>🔇</span>
          <span>📶</span>
          <span>📱</span>
          <div className="bg-black text-white px-2 py-1 rounded text-xs">87</div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
          <span className="text-white text-xl">🤖</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:shadow-lg transition-all"
            onClick={onProClick}
          >
            <span className="text-lg">👑</span>
            <span className="font-semibold">PRO</span>
          </button>
          <button onClick={onSettingsClick} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Settings size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* AI Tools Features */}
      <div className="px-4 py-4 space-y-4">
        {aiToolsFeatures.map((feature) => (
          <Card key={feature.id} className="border-0 bg-transparent rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all shadow-lg">
            <CardContent className="p-0 relative">
              <div className="aspect-[16/10] relative overflow-hidden rounded-3xl">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} to-transparent opacity-90`} />
                
                {/* Profile Image (for AI styles) */}
                {feature.hasProfileImage && feature.profileImage && (
                  <div className="absolute bottom-16 right-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-xl">
                      <img 
                        src={feature.profileImage} 
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Profile Images (for face swap and baby generator) */}
                {feature.hasProfileImages && feature.profileImages && (
                  <div className="absolute bottom-16 right-4 flex gap-3">
                    {feature.profileImages.map((img, index) => (
                      <div key={index} className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xl">
                        <img 
                          src={img} 
                          alt={`Profile ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {feature.hasArrow && (
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-lg font-bold">→</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Age Labels (for Story of Life) */}
                {feature.hasAgeLabels && (
                  <>
                    <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">5 y/o</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-gray-800">65 y/o</span>
                    </div>
                  </>
                )}
                
                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-semibold leading-tight drop-shadow-lg">
                    {feature.title}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 mx-4 rounded-2xl shadow-lg">
        <div className="flex justify-around items-center">
          <button 
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-colors ${
              activeTab === 'home' ? 'text-purple-600 bg-purple-50' : 'text-gray-400'
            }`}
            onClick={() => {
              setActiveTab('home');
              onBackClick?.();
            }}
          >
            <Home size={24} />
            <span className="text-xs font-medium">Home</span>
          </button>
          
          <button 
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-colors ${
              activeTab === 'ai-tools' ? 'text-purple-600 bg-purple-50' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('ai-tools')}
          >
            <Wand2 size={24} />
            <span className="text-xs font-medium">AI Tools</span>
          </button>
          
          <button 
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-colors ${
              activeTab === 'mine' ? 'text-purple-600 bg-purple-50' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('mine')}
          >
            <User size={24} />
            <span className="text-xs font-medium">Mine</span>
          </button>
        </div>
      </div>
    </div>
  );
}