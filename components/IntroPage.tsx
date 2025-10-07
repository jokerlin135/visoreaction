import { Clock, Signal, Battery, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface IntroPageProps {
  backgroundImage: string;
  title: string;
  description?: string;
  onNext: () => void;
  onSkip: () => void;
  isLastPage?: boolean;
}

export function IntroPage({ 
  backgroundImage, 
  title, 
  description, 
  onNext, 
  onSkip, 
  isLastPage = false 
}: IntroPageProps) {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
        width: '100vw'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Status Bar */}
      <div className="relative z-10 flex justify-between items-center px-6 pt-4 pb-2 text-white">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span className="font-medium">12:12</span>
        </div>
        <div className="flex items-center gap-2">
          <Signal className="w-4 h-4" />
          <Battery className="w-4 h-4" />
        </div>
      </div>
      
      {/* Skip Button */}
      <div className="absolute top-16 right-6 z-10">
        <Button
          variant="secondary"
          size="sm"
          onClick={onSkip}
          className="bg-black/40 text-white border-none hover:bg-black/60 rounded-full px-5 py-2 backdrop-blur-sm font-medium"
        >
          Skip
        </Button>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 pb-16">
        <div className="mb-10">
          <h1 className="text-white text-4xl font-bold mb-6 leading-tight tracking-tight max-w-sm">
            {title}
          </h1>
          {description && (
            <p className="text-white/90 leading-relaxed font-normal max-w-sm">
              {description}
            </p>
          )}
        </div>
        
        {/* Next Button */}
        <div className="flex justify-end">
          <Button
            onClick={onNext}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-16 h-16 p-0 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
          >
            <ChevronRight className="w-7 h-7" />
          </Button>
        </div>
      </div>
    </div>
  );
}