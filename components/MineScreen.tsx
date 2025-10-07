import { ArrowLeft, Settings, Home, Wand2, User } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface MineScreenProps {
  onBackClick?: () => void;
  onSettingsClick?: () => void;
  onProClick?: () => void;
}

export function MineScreen({ onBackClick, onSettingsClick, onProClick }: MineScreenProps) {
  const [activeTab, setActiveTab] = useState('mine');

  // Create array of 12 placeholder items for the grid
  const placeholderItems = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div className="min-h-screen bg-gray-50 pb-40">
      {/* Status Bar */}
      <div className="bg-white text-black py-2 px-4 flex justify-between items-center border-b">
        <span className="font-medium">11:43</span>
        <div className="flex gap-2 items-center">
          <span>🔇</span>
          <span>📶</span>
          <span>📱</span>
          <div className="bg-black text-white px-2 py-1 rounded text-xs">88</div>
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
      <div className="px-4 py-6 flex flex-col items-center">
        {/* Grid of placeholder items */}
        <div className="grid grid-cols-4 gap-3 mb-12 w-full max-w-sm">
          {placeholderItems.map((item) => (
            <div 
              key={item} 
              className="aspect-[3/4] bg-gray-200 rounded-xl"
            />
          ))}
        </div>

        {/* Start Creating Section */}
        <div className="text-center space-y-4 px-4">
          <h2 className="text-2xl font-semibold text-gray-900">Start Creating Now</h2>
          <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
            Start experiencing the features to embark on your AI journey...
          </p>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all mt-6"
            size="lg"
          >
            Start Creating
          </Button>
        </div>
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