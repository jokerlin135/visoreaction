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

interface TrendingDetailScreenProps {
  onBackClick?: () => void;
  title?: string;
}

export default function TrendingDetailScreen({ onBackClick, title = "Halloween" }: TrendingDetailScreenProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1624978229553-a9e955b46fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhbGxvd2VlbiUyMG1ha2V1cCUyMGNvc3R1bWV8ZW58MXx8fHwxNzU5ODIwNTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1665702884785-c8a7a20a46a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxsb3dlZW4lMjBnb3RoaWMlMjBtYWtldXAlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk4MjA1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1636005811007-9715266f1160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxsb3dlZW4lMjB3aXRjaCUyMG1ha2V1cCUyMHdvbWFufGVufDF8fHx8MTc1OTgyMDUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1741027517018-a8bad3cc29af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxsb3dlZW4lMjBwYXJ0eSUyMG1ha2V1cCUyMHdvbWFufGVufDF8fHx8MTc1OTgyMDUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const demoPhotos = [
    {
      id: 'demo1',
      image: "https://images.unsplash.com/photo-1670408377169-7babedc25a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbCUyMGRlbW98ZW58MXx8fHwxNzU5ODIwNTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: 'Demo'
    },
    {
      id: 'demo2',
      image: "https://images.unsplash.com/photo-1639986162505-c9bcccfc9712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwZGVtbyUyMHBob3RvfGVufDF8fHx8MTc1OTgyMDUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: 'Demo'
    }
  ];

  const handlePhotoScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const itemWidth = width - 64; // Account for padding
    const index = Math.round(scrollPosition / itemWidth);
    setCurrentPhotoIndex(index);
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
          <Text style={styles.statusTime}>1:55</Text>
          <Text style={styles.statusIcon}>📱</Text>
          <Text style={styles.statusIcon}>📷</Text>
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
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handlePhotoScroll}
            scrollEventThrottle={16}
            contentContainerStyle={styles.galleryContainer}
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

      {/* Ad Banner */}
      <View style={styles.adBanner}>
        <View style={styles.adContent}>
          <View style={styles.adLeft}>
            <View style={styles.xadIcon}>
              <Text style={styles.xadIconText}>xad</Text>
            </View>
            <View style={styles.adTextContainer}>
              <Text style={styles.xadText}>xad-GATE</Text>
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
    width: width - 32,
    paddingHorizontal: 16,
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
    gap: 8,
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
  },
  xadIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#2563EB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  xadIconText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  adTextContainer: {
    flex: 1,
  },
  xadText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '500',
  },
  downloadButton: {
    width: 40,
    height: 40,
    backgroundColor: '#EF4444',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadIcon: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});