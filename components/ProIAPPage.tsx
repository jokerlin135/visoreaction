import { X, ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
// Using Unsplash image instead of Figma asset
const sunflowerImage = "https://images.unsplash.com/photo-1714849294343-2a39a8dece8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBmaWVsZCUyMHByZW1pdW0lMjBuYXR1cmV8ZW58MXx8fHwxNzU5ODIyNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface ProIAPPageProps {
  onClose: () => void;
  onPurchase: (planId: string) => void;
}

export function ProIAPPage({ onClose, onPurchase }: ProIAPPageProps) {
  const features = [
    "Unlock to All Features",
    "200% Faster Processing", 
    "Unlimited Creations",
    "Priority Access to New Content",
    "No Ads, No Watermarks"
  ];

  const plans = [
    {
      id: "lifetime",
      duration: "∞",
      subtitle: "Lifetime\n1 purchase",
      price: "₫2,050,000",
      badge: "BEST VALUE",
      badgeColor: "bg-gray-800 text-white"
    },
    {
      id: "yearly", 
      duration: "1",
      subtitle: "Year\n₫18153.85 / Week",
      price: "₫944,000",
      badge: "SAVE 89%",
      badgeColor: "bg-purple-600 text-white",
      isPopular: true
    },
    {
      id: "weekly",
      duration: "1",
      subtitle: "Week",
      price: "₫165,000",
      badge: "MOST POPULAR",
      badgeColor: "bg-gray-800 text-white"
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sunflowerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      {/* Status Bar */}
      <div className="relative z-10 h-8 flex justify-between items-center px-6 text-sm text-white">
        <div className="flex items-center gap-2">
          <span>10:21</span>
          <span className="ml-2">🔇</span>
          <span>📶</span>
          <span>📶</span>
        </div>
        <div className="flex items-center gap-1">
          <span>📶</span>
          <span>82</span>
        </div>
      </div>

      {/* Header Controls */}
      <div className="relative z-10 flex justify-between items-center px-6 py-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onClose}
          className="w-10 h-10 p-0 text-white hover:bg-white hover:bg-opacity-20"
        >
          <X className="w-6 h-6" />
        </Button>
        <Button 
          variant="ghost"
          className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2"
          onClick={() => console.log("Restore clicked")}
        >
          Restore
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col justify-center min-h-[calc(100vh-160px)]">
        
        {/* Features List */}
        <div className="mb-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-white text-lg font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="flex gap-3 mb-6">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id}
              className={`flex-1 border-2 cursor-pointer transition-all ${
                plan.isPopular ? 'border-purple-500 bg-purple-600 bg-opacity-90' : 'border-gray-500 bg-gray-700 bg-opacity-80'
              }`}
              onClick={() => onPurchase(plan.id)}
            >
              <CardContent className="p-4 text-center relative">
                {plan.badge && (
                  <Badge className={`absolute -top-2 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-xs px-2 py-1 rounded`}>
                    {plan.badge}
                  </Badge>
                )}
                <div className="mt-3 mb-4">
                  <div className="text-white text-3xl font-bold mb-1">
                    {plan.duration}
                  </div>
                  <div className="text-white text-sm leading-tight whitespace-pre-line">
                    {plan.subtitle}
                  </div>
                </div>
                <div className="text-white text-lg font-bold">
                  {plan.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Button */}
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 rounded-full text-lg font-semibold mb-6"
          onClick={() => onPurchase('yearly')}
        >
          <span className="flex items-center justify-center gap-2">
            Continue
            <ArrowRight className="w-5 h-5" />
          </span>
        </Button>

        {/* Footer Text */}
        <div className="text-center text-white text-sm opacity-80">
          <div className="mb-2">Auto-renewable. Cancel anytime.</div>
          <div className="flex justify-center gap-6">
            <button 
              className="underline"
              onClick={() => console.log("User Agreement clicked")}
            >
              User Agreement
            </button>
            <button 
              className="underline"
              onClick={() => console.log("Privacy Policy clicked")}
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}