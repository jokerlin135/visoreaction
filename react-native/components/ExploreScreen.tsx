import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

interface ExploreScreenProps {
  onBackClick?: () => void;
  onPhotoClick?: (title: string) => void;
}

const exploreCategories = [
  {
    id: 'change-hairstyle',
    title: 'Change Hairstyle',
    image: 'https://images.unsplash.com/photo-1620717841004-b2129070b674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsb25kZSUyMGhhaXJzdHlsZSUyMGNoYW5nZXxlbnwxfHx8fDE3NTk4MTgyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hasHairstyleOptions: true
  },
  {
    id: 'ai-couples',
    title: 'AI Couples',
    image: 'https://images.unsplash.com/photo-1597241612345-a3964d7022ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBoYXBweSUyMHRvZ2V0aGVyfGVufDF8fHx8MTc1OTgxODI1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'create-dating-pictures',
    title: 'Create Dating Pictures',
    image: 'https://images.unsplash.com/photo-1582851758656-f06471eb5299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBkYXRpbmclMjBwcm9maWxlJTIwc21pbGV8ZW58MXx8fHwxNzU5ODE4MjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hasHearts: true,
    hasProfileCircles: true
  },
  {
    id: 'gender-swap',
    title: 'Gender Swap',
    image: 'https://images.unsplash.com/photo-1701163802657-30d817693cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGdlbmRlciUyMHN3YXAlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk4MTgyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hasGenderProfile: true
  },
  {
    id: 'summer-vibes',
    title: 'Summer Vibes',
    image: 'https://images.unsplash.com/photo-1596202419734-d8337c44b77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN3aW13ZWFyJTIwc3VtbWVyJTIwdmFjYXRpb258ZW58MXx8fHwxNzU5ODE4MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isGrid: true
  }
];

const beachImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1611963057037-d013043902b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1514989940723-e8e51635b782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
];

export function ExploreScreen({ onBackClick, onPhotoClick }: ExploreScreenProps = {}) {
  const cardWidth = (width - 48) / 2; // Account for padding and gap

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusLeft}>
          <Text style={styles.statusTime}>10:27</Text>
          <Text style={styles.statusIcon}>📷</Text>
          <Text style={styles.statusDot}>•</Text>
        </View>
        <View style={styles.statusRight}>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.batteryText}>82</Text>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackClick}>
          <Ionicons name="arrow-back" size={20} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Explore</Text>
      </View>

      {/* Explore Grid */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.grid}>
            {/* Row 1: Change Hairstyle & AI Couples */}
            <TouchableOpacity
              style={[styles.categoryCard, { width: cardWidth }]}
              onPress={() => onPhotoClick?.(exploreCategories[0].title)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#A855F7', '#9333EA']}
                style={styles.imageContainer}
              >
                <Image source={{ uri: exploreCategories[0].image }} style={styles.categoryImage} />
                
                {/* Hairstyle Options Sidebar */}
                <View style={styles.hairstyleOptions}>
                  <View style={[styles.hairstyleOption, styles.selectedOption]}>
                    <View style={[styles.hairColor, { backgroundColor: '#F472B6' }]} />
                  </View>
                  <View style={styles.hairstyleOption}>
                    <View style={[styles.hairColor, { backgroundColor: '#A855F7' }]} />
                  </View>
                  <View style={styles.hairstyleOption}>
                    <View style={[styles.hairColor, { backgroundColor: '#F97316' }]} />
                  </View>
                </View>
                
                {/* Gradient Overlay */}
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']}
                  style={styles.gradientOverlay}
                />
                
                {/* Title */}
                <View style={styles.titleContainer}>
                  <Text style={styles.categoryTitle}>{exploreCategories[0].title}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryCard, { width: cardWidth }]}
              onPress={() => onPhotoClick?.(exploreCategories[1].title)}
              activeOpacity={0.8}
            >
              <View style={styles.imageContainer}>
                <Image source={{ uri: exploreCategories[1].image }} style={styles.categoryImage} />
                
                {/* Gradient Overlay */}
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']}
                  style={styles.gradientOverlay}
                />
                
                {/* Title */}
                <View style={styles.titleContainer}>
                  <Text style={styles.categoryTitle}>{exploreCategories[1].title}</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Row 2: Create Dating Pictures & Gender Swap */}
            <TouchableOpacity
              style={[styles.categoryCard, { width: cardWidth }]}
              onPress={() => onPhotoClick?.(exploreCategories[2].title)}
              activeOpacity={0.8}
            >
              <View style={styles.imageContainer}>
                <Image source={{ uri: exploreCategories[2].image }} style={styles.categoryImage} />
                
                {/* Hearts */}
                <View style={styles.heartsContainer}>
                  <Text style={[styles.heart, { fontSize: 16 }]}>💗</Text>
                  <Text style={[styles.heart, { fontSize: 12 }]}>💗</Text>
                </View>
                
                {/* Profile Circles */}
                <View style={styles.profileCircles}>
                  <Image source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face' }} style={styles.profileCircle} />
                  <Image source={{ uri: 'https://images.unsplash.com/photo-1553543852-3d58cf67529c?w=24&h=24&fit=crop&crop=face' }} style={styles.profileCircle} />
                  <Image source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face' }} style={styles.profileCircle} />
                  <Image source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=24&h=24&fit=crop&crop=face' }} style={styles.profileCircle} />
                </View>
                
                {/* Gradient Overlay */}
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']}
                  style={styles.gradientOverlay}
                />
                
                {/* Title */}
                <View style={styles.titleContainer}>
                  <Text style={styles.categoryTitle}>{exploreCategories[2].title}</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryCard, { width: cardWidth }]}
              onPress={() => onPhotoClick?.(exploreCategories[3].title)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#F472B6', '#A855F7']}
                style={styles.imageContainer}
              >
                <Image source={{ uri: exploreCategories[3].image }} style={styles.categoryImage} />
                
                {/* Gender Profile Circle */}
                <View style={styles.genderProfile}>
                  <Image source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' }} style={styles.genderProfileImage} />
                </View>
                
                {/* Gradient Overlay */}
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']}
                  style={styles.gradientOverlay}
                />
                
                {/* Title */}
                <View style={styles.titleContainer}>
                  <Text style={styles.categoryTitle}>{exploreCategories[3].title}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            {/* Row 3: Summer Vibes (Grid layout) */}
            <TouchableOpacity
              style={[styles.categoryCard, { width: width - 32, marginBottom: 100 }]}
              onPress={() => onPhotoClick?.(exploreCategories[4].title)}
              activeOpacity={0.8}
            >
              <View style={styles.gridContainer}>
                {/* Grid of beach images */}
                <View style={styles.beachGrid}>
                  {beachImages.map((imageUri, index) => (
                    <View key={index} style={[styles.beachGridItem, index === 2 && styles.centerGridItem]}>
                      <Image source={{ uri: index === 0 ? exploreCategories[4].image : imageUri }} style={styles.beachImage} />
                      {index === 2 && <View style={styles.centerBorder} />}
                    </View>
                  ))}
                  <View style={styles.beachGridItem}>
                    <Image source={{ uri: beachImages[4] }} style={styles.beachImage} />
                  </View>
                </View>
                
                {/* Gradient Overlay */}
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.5)']}
                  style={styles.gridGradientOverlay}
                />
                
                {/* Title */}
                <View style={styles.gridTitleContainer}>
                  <Text style={styles.categoryTitle}>{exploreCategories[4].title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Loading Ad Banner */}
      <View style={styles.adBanner}>
        <View style={styles.adContent}>
          <View style={styles.adLeft}>
            <View style={styles.adIcon} />
            <View style={styles.adTextContainer}>
              <View style={styles.adBadge}>
                <Text style={styles.adBadgeText}>AD</Text>
              </View>
              <Text style={styles.loadingText}>loading...</Text>
            </View>
          </View>
        </View>
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
    paddingHorizontal: 24,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusTime: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '500',
  },
  statusIcon: {
    fontSize: 14,
  },
  statusDot: {
    color: '#111827',
    fontSize: 14,
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  batteryText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '500',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  categoryCard: {
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
    aspectRatio: 3/4,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  hairstyleOptions: {
    position: 'absolute',
    left: 8,
    top: 16,
    gap: 8,
  },
  hairstyleOption: {
    width: 32,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedOption: {
    borderColor: '#A855F7',
    borderWidth: 2,
  },
  hairColor: {
    width: 16,
    height: 24,
    borderRadius: 8,
  },
  heartsContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    gap: 4,
  },
  heart: {
    color: '#EC4899',
  },
  profileCircles: {
    position: 'absolute',
    bottom: 64,
    left: 16,
    flexDirection: 'row',
    gap: 4,
  },
  profileCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#D1D5DB',
  },
  genderProfile: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  genderProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  categoryTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  gridContainer: {
    position: 'relative',
    aspectRatio: 2/1,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  beachGrid: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  beachGridItem: {
    width: '33.333%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  centerGridItem: {
    position: 'relative',
  },
  beachImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  centerBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  gridGradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
  gridTitleContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  adBanner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  adContent: {
    backgroundColor: '#000000',
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  adIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#374151',
    borderRadius: 4,
  },
  adTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  adBadge: {
    backgroundColor: '#D1D5DB',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  adBadgeText: {
    color: '#374151',
    fontSize: 12,
    fontWeight: '600',
  },
  loadingText: {
    color: '#9CA3AF',
    fontSize: 14,
  },
});