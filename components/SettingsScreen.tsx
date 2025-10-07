import { ArrowLeft, Share, MessageSquare, Globe, Info, FileText, Shield, Users, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface SettingsScreenProps {
  onBack: () => void;
  onTryProClick?: () => void;
}

export function SettingsScreen({ onBack, onTryProClick }: SettingsScreenProps) {
  const menuItems = [
    { icon: Share, label: "Share", onClick: () => console.log("Share clicked") },
    { icon: MessageSquare, label: "Feedback", onClick: () => console.log("Feedback clicked") },
    { icon: Globe, label: "Language", onClick: () => console.log("Language clicked") },
    { icon: Info, label: "About", onClick: () => console.log("About clicked") },
    { icon: FileText, label: "User Agreement", onClick: () => console.log("User Agreement clicked") },
    { icon: Shield, label: "Privacy Policy", onClick: () => console.log("Privacy Policy clicked") },
    { icon: Users, label: "Community Guidelines", onClick: () => console.log("Community Guidelines clicked") },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-40">
      {/* Status Bar */}
      <div className="bg-white text-black py-2 px-4 flex justify-between items-center border-b">
        <span className="font-medium">10:45</span>
        <div className="flex gap-2 items-center">
          <span>🔇</span>
          <span>📶</span>
          <span>📱</span>
          <div className="bg-black text-white px-2 py-1 rounded text-xs">83</div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onBack}
          className="w-10 h-10 p-0 hover:bg-gray-100"
        >
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </Button>
        <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
      </div>

      <div className="px-4 py-6">
        {/* Pro Banner */}
        <Card className="mb-8 border-0 shadow-lg overflow-hidden rounded-3xl">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 p-6 relative">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-4">
                    Unlimited Artwork Styles
                  </h3>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium"
                    onClick={onTryProClick}
                  >
                    Try Pro Now
                  </Button>
                </div>
                <div className="relative">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center">
                    <span className="text-3xl">👑</span>
                  </div>
                  <div className="absolute -top-2 -right-2 text-white text-lg">✨</div>
                  <div className="absolute -bottom-2 -left-2 text-white text-sm">✨</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {menuItems.map((item, index) => (
            <div key={index}>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-between p-4 h-auto hover:bg-gray-50 rounded-none"
                onClick={item.onClick}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900 font-medium">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Button>
              {index < menuItems.length - 1 && (
                <div className="border-b border-gray-100 ml-12" />
              )}
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}