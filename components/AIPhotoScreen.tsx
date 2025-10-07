import { ArrowLeft } from "lucide-react";

interface AIPhotoScreenProps {
  onBackClick?: () => void;
  gender: 'female' | 'male' | 'other';
}

export function AIPhotoScreen({ onBackClick, gender }: AIPhotoScreenProps) {
  const femalePhotos = {
    linkedin: [
      {
        id: 'suit',
        image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwc3VpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk4MTk4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Suit'
      },
      {
        id: 'office',
        image: "https://images.unsplash.com/photo-1648412868424-9bee5023a257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG9mZmljZSUyMHdvcmslMjBjb21wdXRlcnxlbnwxfHx8fDE3NTk4MTk4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Office'
      },
      {
        id: 'business',
        image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhlYWRzaG90JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5ODIyMzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Business'
      },
      {
        id: 'profile',
        image: "https://images.unsplash.com/photo-1723189518780-2380f644eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmlsZSUyMGNhc3VhbHxlbnwxfHx8fDE3NTk4MTk4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Profile'
      }
    ]
  };

  const malePhotos = {
    linkedin: [
      {
        id: 'suit',
        image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5NzcwODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Suit'
      },
      {
        id: 'office',
        image: "https://images.unsplash.com/photo-1679508057079-f1bf069350ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBvZmZpY2UlMjB3b3JrJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU5ODE5ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Office'
      },
      {
        id: 'business',
        image: "https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTc1Njc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Business'
      },
      {
        id: 'profile',
        image: "https://images.unsplash.com/photo-1758600588319-fa4097ee5208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbCUyMHNoaXJ0fGVufDF8fHx8MTc1OTgxOTgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Profile'
      }
    ]
  };

  const currentPhotos = (gender === 'male') ? malePhotos : femalePhotos;

  const handlePhotoClick = (photoId: string) => {
    console.log(`Selected photo: ${photoId} for gender: ${gender}`);
  };

  const renderAdBanner = () => {
    if (gender === 'other') {
      return (
        <div className="fixed bottom-0 left-0 right-0 bg-black px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">MEXC</span>
            </div>
            <div>
              <div className="text-white text-sm">
                <span className="text-yellow-400">Quà tặng chào mừng $10,000</span>
              </div>
              <div className="text-gray-400 text-xs">Sàn sàng giao dịch cùng chúng tôi!</div>
            </div>
          </div>
          <div className="bg-blue-600 px-4 py-2 rounded-full">
            <span className="text-white text-sm font-semibold">Đăng ký</span>
          </div>
        </div>
      );
    } else if (gender === 'male') {
      return (
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
      );
    } else {
      return (
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
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Status Bar */}
      <div className="h-8 bg-white flex justify-between items-center px-6 text-sm text-gray-900">
        <div className="flex items-center gap-2">
          <span>1:48</span>
          <span className="ml-2">📱</span>
          <span>📷</span>
        </div>
        <div className="flex items-center gap-1">
          <span>🔇</span>
          <span>📶</span>
          <span>79</span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gray-50 px-4 py-4 flex items-center">
        <div 
          className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200 rounded-full transition-colors"
          onClick={onBackClick}
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-24">
        {/* LinkedIn Section */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">LinkedIn</h2>
          
          <div className="grid grid-cols-2 gap-3">
            {currentPhotos.linkedin.map((photo) => (
              <div
                key={photo.id}
                className="relative cursor-pointer group"
                onClick={() => handlePhotoClick(photo.id)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-[3/4]">
                  <img 
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  {/* 3D effect overlay */}
                  <div className="absolute top-2 right-2 w-6 h-6 bg-black/20 rounded-tl-lg border-l-2 border-t-2 border-white/20"></div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-gray-600 font-medium">{photo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aesthetic Section */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Aesthetic</h2>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 aspect-[3/4]">
              <div className="absolute top-2 right-2 w-6 h-6 bg-black/20 rounded-tl-lg border-l-2 border-t-2 border-white/20"></div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 aspect-[3/4]">
              <div className="absolute top-2 right-2 w-6 h-6 bg-black/20 rounded-tl-lg border-l-2 border-t-2 border-white/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Banner */}
      {renderAdBanner()}
    </div>
  );
}