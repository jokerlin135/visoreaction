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

interface TopHitsScreenProps {
  onBackClick?: () => void;
  onPhotoClick?: (title: string) => void;
}

const topHitsCategories = [
  {
    id: 'ai-hugs',
    title: 'AI Hugs',
    image: 'https://images.unsplash.com/photo-1633653331364-9a6f17b9aed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBodWclMjBhZmZlY3Rpb24lMjBsb3ZlJTIwaGFwcHl8ZW58MXx8fHwxNzU5ODI0MDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'aging-video',
    title: 'Aging Video',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGFnaW5nJTIwdGltZSUyMGVsZGVybHl8ZW58MXx8fHwxNzU5NzYzNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'future-baby',
    title: 'Future Baby',
    image: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJhYnklMjBjaGlsZCUyMHNtaWxlJTIwaGFwcHl8ZW58MXx8fHwxNzU5NzYzNTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hasOverlay: true
  },
  {
    id: 'animate-photos',
    title: 'Animate Photos',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5NzYzNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hasTag: true
  },
  {
    id: 'minime',
    title: 'MiniMe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbiUyMHNtaWxlJTIwaGFwcHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk3NjM1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'animal-toon',
    title: 'Animal Toon',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMGFuaW1hbCUyMGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzU5NzYzNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function TopHitsScreen({ onBackClick, onPhotoClick }: TopHitsScreenProps = {}) {
  const cardWidth = (width - 48) / 2; // Account for padding and gap

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusLeft}>
          <Text style={styles.statusTime}>10:31</Text>
          <Text style={styles.statusIcon}>📱</Text>
          <Text style={styles.statusDot}>•</Text>
        </View>
        <View style={styles.statusRight}>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.batteryText}>81</Text>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackClick}>
          <Ionicons name="arrow-back" size={20} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Top Hits</Text>
      </View>

      {/* Top Hits Grid */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.grid}>
            {topHitsCategories.map((category, index) => (
              <TouchableOpacity
                key={category.id}
                style={[styles.categoryCard, { width: cardWidth }]}
                onPress={() => onPhotoClick?.(category.title)}
                activeOpacity={0.8}
              >
                <View style={styles.imageContainer}>
                  <Image source={{ uri: category.image }} style={styles.categoryImage} />
                  
                  {/* Gradient Overlay */}
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']}
                    style={styles.gradientOverlay}
                  />
                  
                  {/* Future Baby Special Overlay */}
                  {category.hasOverlay && (
                    <View style={styles.parentOverlay}>
                      <View style={styles.parentCircle}>
                        <Image 
                          source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' }}
                          style={styles.parentImage}
                        />
                      </View>
                      <View style={styles.plusButton}>
                        <Text style={styles.plusText}>+</Text>
                      </View>
                      <View style={styles.parentCircle}>
                        <Image 
                          source={{ uri: 'https://images.unsplash.com/photo-1553543852-3d58cf67529c?w=32&h=32&fit=crop&crop=face' }}
                          style={styles.parentImage}
                        />
                      </View>
                    </View>
                  )}

                  {/* Friends Tag for Animate Photos */}
                  {category.hasTag && (
                    <View style={styles.friendsTag}>
                      <Text style={styles.friendsText}>Friends</Text>
                    </View>
                  )}
                  
                  {/* Title */}
                  <View style={styles.titleContainer}>
                    <Text style={styles.categoryTitle}>{category.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* MEX Ad Banner */}
      <View style={styles.adBanner}>
        <View style={styles.adContent}>
          <View style={styles.adLeft}>
            <View style={styles.mexIcon}>
              <Text style={styles.mexEmoji}>🏔️</Text>
            </View>
            <View>
              <Text style={styles.mexTitle}>MEX</Text>
              <Text style={styles.adSubtitle}>Sự kiến tiết kiếm PI</Text>
              <Text style={styles.adDescription}>Đang hoạt động ở 668+ TG khu UT</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Tham gia ngay</Text>
          </TouchableOpacity>
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
    paddingBottom: 100,
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
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  parentOverlay: {
    position: 'absolute',
    bottom: 64,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  parentCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#D1D5DB',
    overflow: 'hidden',
  },
  parentImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  plusButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  friendsTag: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#2563EB',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  friendsText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
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
    backgroundColor: '#111827',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  adLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  mexIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mexEmoji: {
    fontSize: 16,
  },
  mexTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  adSubtitle: {
    color: '#D1D5DB',
    fontSize: 14,
  },
  adDescription: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  joinButton: {
    backgroundColor: '#10B981',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});