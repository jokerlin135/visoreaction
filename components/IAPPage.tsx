import { X, Crown, Star, Zap, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface IAPPageProps {
  onClose: () => void;
  onPurchase: (planId: string) => void;
}

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
    name: "BEST VALUE",
    title: "Lifetime",
    subtitle: "1 purchase",
    price: "₫2,050,000",
    highlight: false
  },
  {
    id: "yearly", 
    name: "SAVE 89%",
    title: "1 Year",
    subtitle: "₫18153.85 / Week",
    price: "₫944,000",
    highlight: true
  },
  {
    id: "weekly",
    name: "MOST POPULAR", 
    title: "1 Week",
    subtitle: "",
    price: "₫165,000",
    highlight: false
  }
];

export function IAPPage({ onClose, onPurchase }: IAPPageProps) {
  return (
    <div 
      className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 relative"
      style={{ 
        height: '100vh',
        width: '100vw'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-8 flex justify-between items-center px-6 pt-2 z-20">
        <div className="flex items-center gap-1 text-white text-sm">
          <span>12:13</span>
          <span className="ml-2">📶</span>
          <span>📧</span>
          <span>G</span>
        </div>
        <div className="flex items-center gap-1 text-white">
          <span>📶</span>
          <span>📊</span>
          <span>🔋</span>
        </div>
      </div>
      
      {/* Close Button */}
      <div className="absolute top-12 left-6 z-20">
        <Button
          variant="secondary"
          size="sm"
          onClick={onClose}
          className="bg-black/30 text-white border-none hover:bg-black/50 rounded-full w-10 h-10 p-0 backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>
      
      {/* Restore Button */}
      <div className="absolute top-12 right-6 z-20">
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 px-3 py-1 text-sm"
        >
          Restore
        </Button>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full pt-20 pb-8 px-6 max-w-md mx-auto">
        {/* Features List */}
        <div className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <span className="text-white font-medium">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Save Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-purple-600 text-white px-6 py-2 rounded-full">
            <span className="font-bold">SAVE 89%</span>
          </div>
        </div>
        
        {/* Plans */}
        <div className="flex gap-3 mb-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`flex-1 border-2 rounded-2xl p-4 text-center ${
                plan.highlight 
                  ? 'border-purple-500 bg-purple-600/20' 
                  : 'border-white/30 bg-black/20'
              }`}
            >
              <div className={`text-xs px-2 py-1 rounded-full mb-2 ${
                plan.highlight ? 'bg-purple-500 text-white' : 'bg-white/20 text-white'
              }`}>
                {plan.name}
              </div>
              <div className="text-white">
                <div className="text-lg font-bold">{plan.title}</div>
                {plan.subtitle && (
                  <div className="text-xs text-white/70 mb-1">{plan.subtitle}</div>
                )}
                <div className="text-xl font-bold">{plan.price}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Continue Button */}
        <Button
          onClick={() => onPurchase('yearly')}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-full text-lg font-semibold mb-6"
        >
          Continue
          <span className="ml-2">→</span>
        </Button>
        
        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-white/70 text-sm">
            Auto-renewable. Cancel anytime.
          </p>
          <div className="flex justify-center items-center gap-4 text-white/60 text-xs">
            <button className="hover:text-white/80 underline">User Agreement</button>
            <button className="hover:text-white/80 underline">Privacy Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
}