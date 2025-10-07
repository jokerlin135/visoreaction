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

interface HeadshotsScreenProps {
  onBackClick?: () => void;
  onPhotoClick?: (title: string) => void;
}

const headshotsCategories = [
  {
    id: 'linkedin-profile',
    title: 'LinkedIn Profile',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU5NzYyNzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'business',
    title: 'Business',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhlYWRzaG90JTIwbWFuJTIwYmx1ZSUyMHN1aXR8ZW58MXx8fHwxNzU5NzYyNzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'ai-portrait',
    title: 'AI Portrait',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTk4MjQwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function HeadshotsScreen({ onBackClick, onPhotoClick }: HeadshotsScreenProps = {}) {
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
        <Text style={styles.headerTitle}>Headshots</Text>
      </View>

      {/* Headshots Grid */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.grid}>
            {headshotsCategories.map((category, index) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard, 
                  { width: index === 2 ? cardWidth : cardWidth },
                  index === 2 && styles.lastItem
                ]}
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

      {/* Grab Ad Banner */}
      <View style={styles.adBanner}>
        <View style={styles.adContent}>
          <View style={styles.adLeft}>
            <View style={styles.grabIcon}>
              <Text style={styles.grabText}>Grab</Text>
            </View>
            <View>
              <View style={styles.adTitleRow}>
                <Text style={styles.adTitle}>Grab (VN)</Text>
                <View style={styles.adBadge}>
                  <Text style={styles.adBadgeText}>AD</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.downloadButton}>
            <Text style={styles.downloadIcon}>↓</Text>
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
  lastItem: {
    alignSelf: 'flex-start',
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
    backgroundColor: '#F9FAFB',
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
  },
  grabIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#16A34A',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grabText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  adTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  adTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
  },
  adBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  adBadgeText: {
    color: '#16A34A',
    fontSize: 12,
    fontWeight: '500',
  },
  downloadButton: {
    width: 32,
    height: 32,
    backgroundColor: '#EF4444',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadIcon: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});