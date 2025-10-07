import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

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

  const renderHorizontalScrollPhotos = (photos: any[]) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContainer}>
      {photos.map((photo, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.horizontalPhotoCard}
          onPress={() => onTrendingPhotoClick?.(photo.title)}
        >
          <Image source={{ uri: photo.image }} style={styles.horizontalPhotoImage} />
          <View style={styles.photoInfo}>
            <Text style={styles.photoTitle}>{photo.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusTime}>11:31</Text>
        <View style={styles.statusRight}>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <View style={styles.batteryIndicator}>
            <Text style={styles.batteryText}>90</Text>
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.appIcon}>
          <Text style={styles.appIconText}>🤖</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.proBadge} onPress={onProClick}>
            <Text style={styles.proEmoji}>👑</Text>
            <Text style={styles.proText}>PRO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton} onPress={onSettingsClick}>
            <Ionicons name="settings" size={24} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Story of Life Hero Banner */}
        <View style={styles.heroBanner}>
          <View style={styles.ageLabels}>
            <View style={styles.ageLabel}>
              <Text style={styles.ageLabelText}>5 y/o</Text>
            </View>
            <View style={styles.ageLabel}>
              <Text style={styles.ageLabelText}>65 y/o</Text>
            </View>
          </View>
          <View style={styles.heroContent}>
            <View style={styles.heroTextContainer}>
              <Text style={styles.heroTitle}>Story{'\n'}of Life</Text>
            </View>
            <Image 
              source={{ uri: "https://images.unsplash.com/photo-1666855139553-4fd9bc6a1ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeSUyMGxpZmUlMjBhZ2luZyUyMHRpbWVsaW5lJTIwYmVmb3JlJTIwYWZ0ZXJ8ZW58MXx8fHwxNzU5NzY4NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }} 
              style={styles.heroImage}
            />
          </View>
        </View>

        {/* Main Actions */}
        <View style={styles.mainActions}>
          <TouchableOpacity style={styles.actionCard} onPress={onAIPhotoClick}>
            <View style={styles.actionIconPurple}>
              <Ionicons name="camera" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.actionTitle}>AI Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={onHDImageClick}>
            <View style={styles.actionIconDark}>
              <Text style={styles.hdText}>HD</Text>
            </View>
            <Text style={styles.actionTitle}>HD Image</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={onFixOldPhotoClick}>
            <View style={styles.actionIconDark}>
              <Ionicons name="image" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.actionTitle}>Fix Old Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Trending Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Trending</Text>
              <Text style={styles.trendingEmoji}>🔥</Text>
            </View>
            <TouchableOpacity style={styles.seeAllButton} onPress={onTrendingClick}>
              <Text style={styles.seeAllText}>See All</Text>
              <Ionicons name="arrow-forward" size={16} color="#7C3AED" />
            </TouchableOpacity>
          </View>
          {renderHorizontalScrollPhotos(trendingPhotos)}
        </View>

        {/* For You Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>For You</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <Ionicons name="arrow-forward" size={16} color="#7C3AED" />
            </TouchableOpacity>
          </View>
          {renderHorizontalScrollPhotos(forYouPhotos)}
        </View>

        {/* Headshots Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Headshots</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <Ionicons name="arrow-forward" size={16} color="#7C3AED" />
            </TouchableOpacity>
          </View>
          {renderHorizontalScrollPhotos(headshotsPhotos)}
        </View>

        {/* Top Hits Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Hits</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <Ionicons name="arrow-forward" size={16} color="#7C3AED" />
            </TouchableOpacity>
          </View>
          {renderHorizontalScrollPhotos(topHitsPhotos)}
        </View>

        {/* Explore Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Explore</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <Ionicons name="arrow-forward" size={16} color="#7C3AED" />
            </TouchableOpacity>
          </View>
          {renderHorizontalScrollPhotos(explorePhotos)}
        </View>

        {/* Do you want more styles Section */}
        <View style={styles.moreStylesSection}>
          <Text style={styles.moreStylesText}>Do you want more styles?</Text>
          <TouchableOpacity style={styles.tellUsButton}>
            <Text style={styles.tellUsText}>Tell us</Text>
            <Text style={styles.tellUsEmoji}>✨</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity 
          style={[styles.navButton, activeTab === 'home' && styles.activeNavButton]}
          onPress={() => setActiveTab('home')}
        >
          <Ionicons name="home" size={24} color={activeTab === 'home' ? '#7C3AED' : '#6B7280'} />
          <Text style={[styles.navText, activeTab === 'home' && styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navButton, activeTab === 'ai-tools' && styles.activeNavButton]}
          onPress={() => {
            setActiveTab('ai-tools');
            onAIToolsClick?.();
          }}
        >
          <Ionicons name="color-wand" size={24} color={activeTab === 'ai-tools' ? '#7C3AED' : '#6B7280'} />
          <Text style={[styles.navText, activeTab === 'ai-tools' && styles.activeNavText]}>AI Tools</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navButton, activeTab === 'mine' && styles.activeNavButton]}
          onPress={() => {
            setActiveTab('mine');
            onMineClick?.();
          }}
        >
          <Ionicons name="person" size={24} color={activeTab === 'mine' ? '#7C3AED' : '#6B7280'} />
          <Text style={[styles.navText, activeTab === 'mine' && styles.activeNavText]}>Mine</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  statusBar: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  statusTime: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusIcon: {
    fontSize: 14,
  },
  batteryIndicator: {
    backgroundColor: '#000000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  batteryText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#7C3AED',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIconText: {
    fontSize: 24,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  proBadge: {
    backgroundColor: '#7C3AED',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  proEmoji: {
    fontSize: 18,
  },
  proText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  settingsButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 180,
  },
  heroBanner: {
    margin: 16,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#F59E0B',
    padding: 24,
    position: 'relative',
  },
  ageLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  ageLabel: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ageLabelText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  heroContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroTextContainer: {
    flex: 1,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  heroImage: {
    width: 160,
    height: 128,
    borderRadius: 12,
    marginLeft: 16,
  },
  mainActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 24,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  actionIconPurple: {
    width: 48,
    height: 48,
    backgroundColor: '#7C3AED',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionIconDark: {
    width: 48,
    height: 48,
    backgroundColor: '#111827',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  hdText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  trendingEmoji: {
    fontSize: 20,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  seeAllText: {
    fontSize: 16,
    color: '#7C3AED',
  },
  horizontalScrollContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  horizontalPhotoCard: {
    width: 128,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  horizontalPhotoImage: {
    width: '100%',
    aspectRatio: 3/4,
  },
  photoInfo: {
    padding: 12,
  },
  photoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
  },
  moreStylesSection: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  moreStylesText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
  },
  tellUsButton: {
    backgroundColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 16,
  },
  tellUsText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  tellUsEmoji: {
    fontSize: 20,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 80,
    left: 16,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 16,
  },
  activeNavButton: {
    backgroundColor: '#EDE9FE',
  },
  navText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
    fontWeight: '500',
  },
  activeNavText: {
    color: '#7C3AED',
  },

});