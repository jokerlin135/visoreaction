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

interface FigurineScreenProps {
  onBackClick?: () => void;
}

const figurineImages = [
  "https://images.unsplash.com/photo-1660598353448-bc8ffeb40e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBibGFjayUyMHNoaXJ0JTIwYmVpZ2UlMjBwYW50cyUyMGNhc3VhbHxlbnwxfHx8fDE3NTk4MjEzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1630173250799-2813d34ed14b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMGNhc3VhbCUyMG91dGZpdCUyMHN0cmVldHxlbnwxfHx8fDE3NTk4MjEzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwY2hhcmFjdGVyJTIwM2QlMjBhbmltYXRpb258ZW58MXx8fHwxNzU5ODIxMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

const demoPhotos = [
  {
    id: 'demo1',
    image: "https://images.unsplash.com/photo-1734092916521-053b3ffc706b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vJTIwcG9ydHJhaXQlMjBtYW4lMjB3b21hbnxlbnwxfHx8fDE3NTk4MjEzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    label: 'Demo'
  },
  {
    id: 'demo2',
    image: "https://images.unsplash.com/photo-1701163802894-99fa45f1c83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3QlMjBkZW1vfGVufDF8fHx8MTc1OTgyMTM1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    label: 'Demo'
  }
];

export default function FigurineScreen({ onBackClick }: FigurineScreenProps = {}) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

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
          <Text style={styles.statusTime}>2:14</Text>
          <Text style={styles.statusIcon}>📱</Text>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusDot}>•</Text>
        </View>
        <View style={styles.statusRight}>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.batteryText}>76</Text>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackClick}>
          <Ionicons name="arrow-back" size={20} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Figurine</Text>
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
            {figurineImages.map((photo, index) => (
              <View key={index} style={styles.photoItem}>
                <View style={styles.photoContainer}>
                  <Image source={{ uri: photo }} style={styles.photoImage} />
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Page Dots */}
          <View style={styles.dotsContainer}>
            {figurineImages.map((_, index) => (
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

      {/* KuCoin Ad Banner */}
      <View style={styles.adBanner}>
        <View style={styles.adContent}>
          <View style={styles.adLeft}>
            <View style={styles.kucoinIcon}>
              <Text style={styles.kucoinIconText}>KC</Text>
            </View>
            <View style={styles.adTextContainer}>
              <Text style={styles.kucoinTitle}>NAP BAO NHIỀU CŨNG ĐƯỢC NHẬN NGAY 20 USDT</Text>
              <View style={styles.subTextContainer}>
                <Text style={styles.subText}>MAP TIỀN LỚN ĐẦU THÁNG VỚI CHỈ 50 TÀI TÀI HOẶC THƯỞNG</Text>
              </View>
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
  kucoinIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#F59E0B',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kucoinIconText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  adTextContainer: {
    flex: 1,
  },
  kucoinTitle: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '600',
  },
  subTextContainer: {
    marginTop: 2,
  },
  subText: {
    color: '#10B981',
    fontSize: 11,
    fontWeight: '500',
  },
});