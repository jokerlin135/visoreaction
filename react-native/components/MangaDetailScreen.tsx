import React, { useState } from 'react';
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

const { width } = Dimensions.get('window');

interface MangaDetailScreenProps {
  onBackClick?: () => void;
  title?: string;
}

export default function MangaDetailScreen({ onBackClick, title = "Manga" }: MangaDetailScreenProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1593345215990-170543af6949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMG1hbmdhJTIwYXJ0JTIwc3R5bGUlMjB3b21hbnxlbnwxfHx8fDE3NTk4MjA4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1655825476295-e497a704a8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGdpcmwlMjBwb3J0cmFpdCUyMGFydHxlbnwxfHx8fDE3NTk4MjA4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1640534936814-80670cb60f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMHN0eWxlJTIwYXJ0d29yayUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTgyMDg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1612532849496-09829c0013a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGFydCUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU5ODIwODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1755756383664-af3cf523242b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFuaW1lJTIwYXJ0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5ODIwODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1755853913084-c55e7ef1746b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwYW5pbWUlMjBzdHlsZXxlbnwxfHx8fDE3NTk4MjA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const demoPhotos = [
    {
      id: 'demo1',
      image: "https://images.unsplash.com/photo-1627465688839-f088954a40a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbCUyMHBob3RvfGVufDF8fHx8MTc1OTgyMDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: 'Demo'
    },
    {
      id: 'demo2',
      image: "https://images.unsplash.com/photo-1600624688988-7522806e3d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYXJ0aXN0aWMlMjBzdHlsZXxlbnwxfHx8fDE3NTk4MjA4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: 'Demo'
    }
  ];

  const handlePhotoScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const itemWidth = width * 0.8 + 24; // 80% width + gap
    const index = Math.round(scrollPosition / itemWidth);
    setCurrentPhotoIndex(Math.min(index, photos.length - 1));
  };

  const handlePhotosClick = () => {
    console.log('Photos button clicked');
  };

  const handleCameraClick = () => {
    console.log('Camera button clicked');
  };

  const handleDemoClick = (demoId: string) => {
    console.log('Demo photo clicked:', demoId);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusLeft}>
          <Text style={styles.statusTime}>1:56</Text>
          <Text style={styles.statusIcon}>📱</Text>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusDot}>•</Text>
        </View>
        <View style={styles.statusRight}>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.batteryText}>78</Text>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackClick}>
          <Ionicons name="arrow-back" size={20} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Photo Gallery */}
        <View style={styles.gallerySection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={handlePhotoScroll}
            scrollEventThrottle={16}
            contentContainerStyle={styles.galleryContainer}
            snapToInterval={width * 0.8 + 24}
            decelerationRate="fast"
          >
            {photos.map((photo, index) => (
              <View key={photo.id} style={styles.photoItem}>
                <View style={styles.photoContainer}>
                  <Image source={{ uri: photo.image }} style={styles.photoImage} />
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Page Dots */}
          <View style={styles.dotsContainer}>
            {photos.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentPhotoIndex ? styles.activeDot : styles.inactiveDot
                ]}
              />
            ))}
          </View>
        </View>

        {/* Add Your Photo Section */}
        <View style={styles.addPhotoSection}>
          <Text style={styles.addPhotoTitle}>Add Your Photo</Text>

          <View style={styles.buttonsGrid}>
            {/* Photos Button */}
            <TouchableOpacity
              style={[styles.actionButton, styles.photosButton]}
              onPress={handlePhotosClick}
              activeOpacity={0.8}
            >
              <Ionicons name="images" size={32} color="#FFFFFF" />
              <Text style={styles.actionButtonText}>Photos</Text>
            </TouchableOpacity>

            {/* Camera Button */}
            <TouchableOpacity
              style={[styles.actionButton, styles.cameraButton]}
              onPress={handleCameraClick}
              activeOpacity={0.8}
            >
              <Ionicons name="camera" size={32} color="#FFFFFF" />
              <Text style={styles.actionButtonText}>Camera</Text>
            </TouchableOpacity>

            {/* Demo Photos */}
            {demoPhotos.map((demo) => (
              <TouchableOpacity
                key={demo.id}
                style={styles.demoButton}
                onPress={() => handleDemoClick(demo.id)}
                activeOpacity={0.8}
              >
                <Image source={{ uri: demo.image }} style={styles.demoImage} />
                <View style={styles.demoOverlay}>
                  <Text style={styles.demoText}>{demo.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Binance Ad Banner */}
      <View style={styles.adBanner}>
        <View style={styles.adContent}>
          <View style={styles.adLeft}>
            <View style={styles.binanceIcon}>
              <Text style={styles.binanceIconText}>₿</Text>
            </View>
            <View style={styles.adTextContainer}>
              <Text style={styles.binanceTitle}>Binance: Buy Bitcoin & Crypto</Text>
              <View style={styles.playStoreInfo}>
                <Text style={styles.playStoreText}>▶ Google Play</Text>
              </View>
            </View>
          </View>
          <View style={styles.arrowButton}>
            <Text style={styles.arrowIcon}>→</Text>
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
  },
  backButton: {
    width: 32,
    height: 32,
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
  gallerySection: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 24,
  },
  galleryContainer: {
    paddingHorizontal: 16,
  },
  photoItem: {
    width: width * 0.8,
    marginRight: 24,
  },
  photoContainer: {
    aspectRatio: 3/4,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#E5E7EB',
  },
  photoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginTop: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#3B82F6',
  },
  inactiveDot: {
    backgroundColor: '#D1D5DB',
  },
  addPhotoSection: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 32,
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  addPhotoTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
    maxWidth: 320,
    alignSelf: 'center',
  },
  actionButton: {
    width: 76,
    height: 76,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  photosButton: {
    backgroundColor: '#8B5CF6',
  },
  cameraButton: {
    backgroundColor: '#EC4899',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
  demoButton: {
    width: 76,
    height: 76,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  demoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  demoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  demoText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  adBanner: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  adContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  adLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  binanceIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#F59E0B',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  binanceIconText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  adTextContainer: {
    flex: 1,
  },
  binanceTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '500',
  },
  playStoreInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  playStoreText: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '500',
  },
  arrowButton: {
    width: 40,
    height: 40,
    backgroundColor: '#EF4444',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});