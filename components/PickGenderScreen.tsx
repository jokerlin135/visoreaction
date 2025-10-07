import { ArrowLeft, ChevronRight } from "lucide-react";

interface PickGenderScreenProps {
  onBackClick?: () => void;
  onGenderSelect?: (gender: 'female' | 'male' | 'other') => void;
}

export function PickGenderScreen({ onBackClick, onGenderSelect }: PickGenderScreenProps = {}) {
  const genderOptions = [
    { id: 'female', label: 'Female' },
    { id: 'male', label: 'Male' },
    { id: 'other', label: 'Other' }
  ] as const;

  const handleGenderClick = (gender: 'female' | 'male' | 'other') => {
    onGenderSelect?.(gender);
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
      </div>

      {/* Content */}
      <div className="px-4 py-8 max-w-sm mx-auto w-full">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Pick Your Gender
          </h1>
          <p className="text-gray-600 text-base">
            We need this data to achieve better results
          </p>
        </div>

        {/* Gender Options */}
        <div className="space-y-4 mb-8">
          {genderOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-2xl px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors shadow-sm border border-gray-100"
              onClick={() => handleGenderClick(option.id)}
            >
              <span className="text-lg font-medium text-gray-900">
                {option.label}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
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