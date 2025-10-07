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
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface FaceSwapScreenProps {
  onBackClick?: () => void;
  title?: string;
}

export default function FaceSwapScreen({ onBackClick, title = "Ghostface" }: FaceSwapScreenProps = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Mock carousel images - in real app, these would come from props or API
  const carouselImages = [
    'https://images.unsplash.com/photo-1730300259023-1b4ad4449c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwc3dhcCUyMGhhbGxvd2VlbiUyMGdob3N0ZmFjZXxlbnwxfHx8fDE3NTk4MjI1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1608234773387-2cc931668c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBob25lJTIwY2FsbCUyMGhvcnJvciUyMG1vdmllJTIwc2NlbmV8ZW58MXx8fHwxNzU5NzY0MzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusLeft}>
          <Text style={styles.statusText}>10:13</Text>
          <View style={styles.hdBadge}>
            <Text style={styles.hdText}>HD</Text>
          </View>
        </View>
        <View style={styles.statusRight}>
          <Text style={styles.statusText}>📶 🔋</Text>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={onBackClick}
          >
            <Ionicons name="arrow-back" size={20} color="#374151" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.removeAdButton}>
          <Text style={styles.removeAdText}>Remove Ad</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Image Carousel */}
          <View style={styles.carouselContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: carouselImages[currentSlide] }}
                style={styles.carouselImage}
              />
            </View>
            
            {/* Carousel Dots */}
            <View style={styles.dotsContainer}>
              {carouselImages.map((_, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dot,
                    index === currentSlide ? styles.dotActive : styles.dotInactive
                  ]}
                  onPress={() => setCurrentSlide(index)}
                />
              ))}
            </View>
          </View>

          {/* Add Your Face Section */}
          <View style={styles.addFaceSection}>
            <Text style={styles.addFaceTitle}>Add your face to swap</Text>
            
            <TouchableOpacity style={styles.addFaceButton}>
              <Ionicons name="add" size={32} color="#7C3AED" />
            </TouchableOpacity>
          </View>

          {/* Swap Face Button */}
          <View style={styles.swapButtonSection}>
            <TouchableOpacity style={styles.swapButton}>
              <View style={styles.swapButtonContent}>
                <View style={styles.playButtonContainer}>
                  <Ionicons name="play" size={16} color="#6B21A8" />
                </View>
                <View style={styles.swapButtonText}>
                  <Text style={styles.swapButtonTitle}>Swap Face</Text>
                  <Text style={styles.swapButtonSubtitle}>Watch Ad</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* AdMob Banner */}
      <View style={styles.adContainer}>
        <View style={styles.adBanner}>
          <LinearGradient
            colors={['#EC4899', '#8B5CF6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.adContent}
          >
            <View style={styles.adTextContainer}>
              <Text style={styles.adTitle}>✨ Glow Beauty - Làn da hoàn hảo!</Text>
              <View style={styles.adSubContainer}>
                <View style={styles.adBadge}>
                  <Text style={styles.adBadgeText}>GLOW</Text>
                </View>
                <Text style={styles.adSubText}>Tự tin mỗi ngày</Text>
              </View>
            </View>
            <View style={styles.adImageContainer}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1679584352584-f07655bbadea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHdvbWFuJTIwZmFjZSUyMGNyZWFtfGVufDF8fHx8MTc1OTc2Mzg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                }}
                style={styles.adImage}
              />
            </View>
          </LinearGradient>
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
    height: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusText: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },
  hdBadge: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 4,
  },
  hdText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
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
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
  },
  removeAdButton: {
    backgroundColor: '#7C3AED',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
  },
  removeAdText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  carouselContainer: {
    marginBottom: 24,
  },
  imageContainer: {
    aspectRatio: 3/4,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    backgroundColor: '#7C3AED',
  },
  dotInactive: {
    backgroundColor: '#D1D5DB',
  },
  addFaceSection: {
    marginBottom: 32,
  },
  addFaceTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  addFaceButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#C4B5FD',
    borderStyle: 'dashed',
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swapButtonSection: {
    marginBottom: 32,
  },
  swapButton: {
    backgroundColor: '#DDD6FE',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  swapButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  playButtonContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#C4B5FD',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swapButtonText: {
    alignItems: 'center',
  },
  swapButtonTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B21A8',
  },
  swapButtonSubtitle: {
    fontSize: 14,
    color: '#6B21A8',
    opacity: 0.8,
  },
  adContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  adBanner: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  adContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  adTextContainer: {
    flex: 1,
  },
  adTitle: {
    color: '#FBCFE8',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  adSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  adBadge: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  adBadgeText: {
    color: '#EC4899',
    fontSize: 10,
    fontWeight: 'bold',
  },
  adSubText: {
    color: '#FBCFE8',
    fontSize: 12,
  },
  adImageContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    overflow: 'hidden',
  },
  adImage: {
    width: '100%',
    height: '100%',
  },
});