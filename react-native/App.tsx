import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import IntroPage from './components/IntroPage';
import IAPPage from './components/IAPPage';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ProIAPPage from './components/ProIAPPage';
import AIToolsScreen from './components/AIToolsScreen';
import TrendingScreen from './components/TrendingScreen';
import { ForYouScreen } from './components/ForYouScreen';
import { HeadshotsScreen } from './components/HeadshotsScreen';
import { TopHitsScreen } from './components/TopHitsScreen';
import { ExploreScreen } from './components/ExploreScreen';
import FixOldPhotoScreen from './components/FixOldPhotoScreen';
import HDImageScreen from './components/HDImageScreen';
import PickGenderScreen from './components/PickGenderScreen';
import AIPhotoScreen from './components/AIPhotoScreen';
import TrendingDetailScreen from './components/TrendingDetailScreen';
import MangaDetailScreen from './components/MangaDetailScreen';
import FaceSwapScreen from './components/FaceSwapScreen';
import FigurineScreen from './components/FigurineScreen';
import MineScreen from './components/MineScreen';
import { GlobalAdBanner } from './components/GlobalAdBanner';

const introPages = [
  {
    backgroundImage: "https://images.unsplash.com/photo-1704655318412-91c859b25632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGNhbWVyYSUyMHBob3RvZ3JhcGh5JTIwZW5oYW5jZW1lbnR8ZW58MXx8fHwxNzU5NzUzODM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Enhance Your Photo's Quality",
    description: "Transform your photos with professional-grade AI enhancement. Get crystal clear results in seconds with our advanced photo processing technology."
  },
  {
    backgroundImage: "https://images.unsplash.com/photo-1740801498451-498c568204ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhY2UlMjBhZ2luZyUyMHBvcnRyYWl0JTIwdGltZXxlbnwxfHx8fDE3NTk3NTM4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Time-Lapse Your Aging",
    description: "Discover how you'll look through the years with our sophisticated aging simulation technology. Watch time unfold before your eyes."
  },
  {
    backgroundImage: "https://images.unsplash.com/photo-1692859532235-c93fa73bd5d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHlsZSUyMHBhaW50aW5nJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzU5ODIyMzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Turn Photos into Art",
    description: "Transform ordinary photos into stunning artistic masterpieces. Choose from various art styles and watch your memories become works of art."
  },
  {
    backgroundImage: "https://images.unsplash.com/photo-1571763806648-5d022a3d1a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGNhbWVyYSUyMHNpbXBsZXxlbnwxfHx8fDE3NTk4MjI4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Retake for the Perfect Shot",
    description: "Perfect your photos with multiple takes and AI-powered shot suggestions. Get the ideal angle, lighting, and composition every time."
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [showProIAP, setShowProIAP] = useState(false);
  const [showAITools, setShowAITools] = useState(false);
  const [showTrending, setShowTrending] = useState(false);
  const [showForYou, setShowForYou] = useState(false);
  const [showHeadshots, setShowHeadshots] = useState(false);
  const [showTopHits, setShowTopHits] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showFixOldPhoto, setShowFixOldPhoto] = useState(false);
  const [showHDImage, setShowHDImage] = useState(false);
  const [showPickGender, setShowPickGender] = useState(false);
  const [showAIPhoto, setShowAIPhoto] = useState(false);
  const [selectedGender, setSelectedGender] = useState<'female' | 'male' | 'other'>('female');
  const [showTrendingDetail, setShowTrendingDetail] = useState(false);
  const [trendingDetailTitle, setTrendingDetailTitle] = useState("Halloween");
  const [showMangaDetail, setShowMangaDetail] = useState(false);
  const [mangaDetailTitle, setMangaDetailTitle] = useState("Manga");
  const [showFaceSwap, setShowFaceSwap] = useState(false);
  const [faceSwapTitle, setFaceSwapTitle] = useState("Ghostface");
  const [showFigurine, setShowFigurine] = useState(false);
  const [showMine, setShowMine] = useState(false);
  
  const handleNext = () => {
    if (currentPage < introPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(introPages.length); // Go to IAP page
    }
  };
  
  const handleSkip = () => {
    setCurrentPage(introPages.length); // Go to IAP page
  };
  
  const handleIAPClose = () => {
    setCurrentPage(introPages.length + 1); // Go to home
  };
  
  const handlePurchase = (planId: string) => {
    // Handle purchase logic here
    console.log('Purchase plan:', planId);
    setCurrentPage(introPages.length + 1); // Go to home after purchase
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleSettingsBack = () => {
    setShowSettings(false);
  };

  const handleProClick = () => {
    setShowProIAP(true);
  };

  const handleProIAPClose = () => {
    setShowProIAP(false);
  };

  const handleProPurchase = (planId: string) => {
    console.log('Pro purchase:', planId);
    setShowProIAP(false);
    // Could redirect to success page or unlock features
  };

  const handleAIToolsClick = () => {
    setShowAITools(true);
  };

  const handleAIToolsBack = () => {
    setShowAITools(false);
  };

  const handleTrendingClick = () => {
    setShowTrending(true);
  };

  const handleTrendingBack = () => {
    setShowTrending(false);
  };

  const handleForYouClick = () => {
    setShowForYou(true);
  };

  const handleForYouBack = () => {
    setShowForYou(false);
  };

  const handleHeadshotsClick = () => {
    setShowHeadshots(true);
  };

  const handleHeadshotsBack = () => {
    setShowHeadshots(false);
  };

  const handleTopHitsClick = () => {
    setShowTopHits(true);
  };

  const handleTopHitsBack = () => {
    setShowTopHits(false);
  };

  const handleExploreClick = () => {
    setShowExplore(true);
  };

  const handleExploreBack = () => {
    setShowExplore(false);
  };

  const handleFixOldPhotoClick = () => {
    setShowFixOldPhoto(true);
  };

  const handleFixOldPhotoBack = () => {
    setShowFixOldPhoto(false);
  };

  const handleHDImageClick = () => {
    setShowHDImage(true);
  };

  const handleHDImageBack = () => {
    setShowHDImage(false);
  };

  const handleAIPhotoClick = () => {
    setShowPickGender(true);
  };

  const handlePickGenderBack = () => {
    setShowPickGender(false);
  };

  const handleGenderSelect = (gender: 'female' | 'male' | 'other') => {
    console.log('Selected gender:', gender);
    setSelectedGender(gender);
    setShowPickGender(false);
    setShowAIPhoto(true);
  };

  const handleAIPhotoBack = () => {
    setShowAIPhoto(false);
    setShowPickGender(true);
  };

  const handleTrendingDetailBack = () => {
    setShowTrendingDetail(false);
  };

  const handleMangaDetailBack = () => {
    setShowMangaDetail(false);
  };

  const handleTrendingPhotoClick = (title: string = "Ghostface") => {
    if (title === "Face Swap") {
      setFaceSwapTitle(title);
      setShowFaceSwap(true);
    } else if (title === "Ghostface" || title === "Halloween") {
      setTrendingDetailTitle(title);
      setShowTrendingDetail(true);
    } else if (title === "Manga" || title.toLowerCase().includes("manga")) {
      setMangaDetailTitle(title);
      setShowMangaDetail(true);
    } else {
      // For other trending photos, show Figurine screen
      setShowFigurine(true);
    }
  };

  const handleForYouPhotoClick = (title: string) => {
    // For For You photos, show Figurine screen
    setShowFigurine(true);
  };

  const handleFaceSwapBack = () => {
    setShowFaceSwap(false);
  };

  const handleFigurineBack = () => {
    setShowFigurine(false);
  };

  const handleMineClick = () => {
    setShowMine(true);
  };

  const handleMineBack = () => {
    setShowMine(false);
  };
  
  // Show home screen after IAP
  if (currentPage > introPages.length) {
    return (
      <View style={{ flex: 1 }}>
        {showProIAP && (
          <>
            <StatusBar style="light" />
            <ProIAPPage onClose={handleProIAPClose} onPurchase={handleProPurchase} />
          </>
        )}
        {showSettings && (
          <>
            <StatusBar style="dark" />
            <SettingsScreen onBack={handleSettingsBack} onTryProClick={handleProClick} />
          </>
        )}
        {showAITools && (
          <>
            <StatusBar style="dark" />
            <AIToolsScreen onBackClick={handleAIToolsBack} onSettingsClick={handleSettingsClick} onProClick={handleProClick} />
          </>
        )}
        {showTrending && (
          <>
            <StatusBar style="dark" />
            <TrendingScreen onBackClick={handleTrendingBack} onPhotoClick={handleTrendingPhotoClick} />
          </>
        )}
        {showForYou && (
          <>
            <StatusBar style="dark" />
            <ForYouScreen onBackClick={handleForYouBack} onPhotoClick={handleTrendingPhotoClick} />
          </>
        )}
        {showHeadshots && (
          <>
            <StatusBar style="dark" />
            <HeadshotsScreen onBackClick={handleHeadshotsBack} onPhotoClick={handleTrendingPhotoClick} />
          </>
        )}
        {showTopHits && (
          <>
            <StatusBar style="dark" />
            <TopHitsScreen onBackClick={handleTopHitsBack} onPhotoClick={handleTrendingPhotoClick} />
          </>
        )}
        {showExplore && (
          <>
            <StatusBar style="dark" />
            <ExploreScreen onBackClick={handleExploreBack} onPhotoClick={handleTrendingPhotoClick} />
          </>
        )}
        {showFixOldPhoto && (
          <>
            <StatusBar style="dark" />
            <FixOldPhotoScreen onBackClick={handleFixOldPhotoBack} />
          </>
        )}
        {showHDImage && (
          <>
            <StatusBar style="dark" />
            <HDImageScreen onBackClick={handleHDImageBack} />
          </>
        )}
        {showPickGender && (
          <>
            <StatusBar style="dark" />
            <PickGenderScreen onBackClick={handlePickGenderBack} onGenderSelect={handleGenderSelect} />
          </>
        )}
        {showAIPhoto && (
          <>
            <StatusBar style="dark" />
            <AIPhotoScreen onBackClick={handleAIPhotoBack} gender={selectedGender} />
          </>
        )}
        {showTrendingDetail && (
          <>
            <StatusBar style="dark" />
            <TrendingDetailScreen onBackClick={handleTrendingDetailBack} title={trendingDetailTitle} />
          </>
        )}
        {showMangaDetail && (
          <>
            <StatusBar style="dark" />
            <MangaDetailScreen onBackClick={handleMangaDetailBack} title={mangaDetailTitle} />
          </>
        )}
        {showFaceSwap && (
          <>
            <StatusBar style="dark" />
            <FaceSwapScreen onBackClick={handleFaceSwapBack} title={faceSwapTitle} />
          </>
        )}
        {showFigurine && (
          <>
            <StatusBar style="dark" />
            <FigurineScreen onBackClick={handleFigurineBack} />
          </>
        )}
        {showMine && (
          <>
            <StatusBar style="dark" />
            <MineScreen onBackClick={handleMineBack} onSettingsClick={handleSettingsClick} onProClick={handleProClick} />
          </>
        )}
        {!showProIAP && !showSettings && !showAITools && !showTrending && !showForYou && !showHeadshots && !showTopHits && !showExplore && !showFixOldPhoto && !showHDImage && !showPickGender && !showAIPhoto && !showTrendingDetail && !showMangaDetail && !showFaceSwap && !showFigurine && !showMine && (
          <>
            <StatusBar style="dark" />
            <HomeScreen onSettingsClick={handleSettingsClick} onProClick={handleProClick} onAIToolsClick={handleAIToolsClick} onTrendingClick={handleTrendingClick} onForYouClick={handleForYouClick} onHeadshotsClick={handleHeadshotsClick} onTopHitsClick={handleTopHitsClick} onExploreClick={handleExploreClick} onFixOldPhotoClick={handleFixOldPhotoClick} onHDImageClick={handleHDImageClick} onAIPhotoClick={handleAIPhotoClick} onTrendingPhotoClick={handleTrendingPhotoClick} onMineClick={handleMineClick} />
          </>
        )}
        <GlobalAdBanner />
      </View>
    );
  }
  
  // Show IAP page after intro
  if (currentPage === introPages.length) {
    return (
      <>
        <StatusBar style="light" />
        <IAPPage 
          onClose={handleIAPClose}
          onPurchase={handlePurchase}
        />
      </>
    );
  }
  
  // Show current intro page
  const currentIntro = introPages[currentPage];
  
  return (
    <>
      <StatusBar style="light" />
      <IntroPage
        backgroundImage={currentIntro.backgroundImage}
        title={currentIntro.title}
        description={currentIntro.description}
        onNext={handleNext}
        onSkip={handleSkip}
        isLastPage={currentPage === introPages.length - 1}
      />
    </>
  );
}