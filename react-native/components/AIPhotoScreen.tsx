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

const { width } = Dimensions.get('window');

interface AIPhotoScreenProps {
  onBackClick?: () => void;
  gender: 'female' | 'male' | 'other';
}

export default function AIPhotoScreen({ onBackClick, gender }: AIPhotoScreenProps) {
  const femalePhotos = {
    linkedin: [
      {
        id: 'suit',
        image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwc3VpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk4MTk4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Suit'
      },
      {
        id: 'office',
        image: "https://images.unsplash.com/photo-1648412868424-9bee5023a257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG9mZmljZSUyMHdvcmslMjBjb21wdXRlcnxlbnwxfHx8fDE3NTk4MTk4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Office'
      },
      {
        id: 'business',
        image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhlYWRzaG90JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5ODIyMzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Business'
      },
      {
        id: 'profile',
        image: "https://images.unsplash.com/photo-1723189518780-2380f644eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmlsZSUyMGNhc3VhbHxlbnwxfHx8fDE3NTk4MTk4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Profile'
      }
    ]
  };

  const malePhotos = {
    linkedin: [
      {
        id: 'suit',
        image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5NzcwODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Suit'
      },
      {
        id: 'office',
        image: "https://images.unsplash.com/photo-1679508057079-f1bf069350ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBvZmZpY2UlMjB3b3JrJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU5ODE5ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Office'
      },
      {
        id: 'business',
        image: "https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTc1Njc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Business'
      },
      {
        id: 'profile',
        image: "https://images.unsplash.com/photo-1758600588319-fa4097ee5208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbCUyMHNoaXJ0fGVufDF8fHx8MTc1OTgxOTgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        title: 'Profile'
      }
    ]
  };

  const currentPhotos = (gender === 'male') ? malePhotos : femalePhotos;

  const handlePhotoClick = (photoId: string) => {
    console.log(`Selected photo: ${photoId} for gender: ${gender}`);
  };

  const renderAdBanner = () => {
    if (gender === 'other') {
      return (
        <View style={styles.adBannerOther}>
          <View style={styles.adContent}>
            <View style={styles.adLeft}>
              <View style={styles.mexcIcon}>
                <Text style={styles.mexcIconText}>MEXC</Text>
              </View>
              <View style={styles.adTextContainer}>
                <Text style={styles.mexcTitle}>
                  <Text style={styles.mexcHighlight}>Quà tặng chào mừng $10,000</Text>
                </Text>
                <Text style={styles.mexcSubtitle}>Sàn sàng giao dịch cùng chúng tôi!</Text>
              </View>
            </View>
            <View style={styles.mexcButton}>
              <Text style={styles.mexcButtonText}>Đăng ký</Text>
            </View>
          </View>
        </View>
      );
    } else if (gender === 'male') {
      return (
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
      );
    } else {
      return (
        <View style={styles.adBanner}>
          <View style={styles.adContent}>
            <View style={styles.adLeft}>
              <View style={styles.grabIcon}>
                <Text style={styles.grabIconText}>G</Text>
              </View>
              <View style={styles.adTextContainer}>
                <View style={styles.adInfo}>
                  <View style={styles.adBadge}>
                    <Text style={styles.adBadgeText}>AD</Text>
                  </View>
                  <Text style={styles.grabText}>Grab (VN)</Text>
                </View>
              </View>
            </View>
            <View style={styles.downloadButton}>
              <Text style={styles.downloadIcon}>↓</Text>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusLeft}>
          <Text style={styles.statusTime}>1:48</Text>
          <Text style={styles.statusIcon}>📱</Text>
          <Text style={styles.statusIcon}>📷</Text>
        </View>
        <View style={styles.statusRight}>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.batteryText}>79</Text>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackClick}>
          <Ionicons name="arrow-back" size={20} color="#374151" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* LinkedIn Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>LinkedIn</Text>
            
            <View style={styles.photoGrid}>
              {currentPhotos.linkedin.map((photo) => (
                <TouchableOpacity
                  key={photo.id}
                  style={styles.photoCard}
                  onPress={() => handlePhotoClick(photo.id)}
                  activeOpacity={0.8}
                >
                  <View style={styles.photoContainer}>
                    <Image source={{ uri: photo.image }} style={styles.photoImage} />
                    {/* 3D effect overlay */}
                    <View style={styles.overlayEffect} />
                  </View>
                  <Text style={styles.photoTitle}>{photo.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Aesthetic Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Aesthetic</Text>
            
            <View style={styles.photoGrid}>
              <View style={[styles.photoCard, { opacity: 0.7 }]}>
                <View style={[styles.photoContainer, styles.aestheticBlue]}>
                  <View style={styles.overlayEffect} />
                </View>
              </View>
              <View style={[styles.photoCard, { opacity: 0.7 }]}>
                <View style={[styles.photoContainer, styles.aestheticOrange]}>
                  <View style={styles.overlayEffect} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Ad Banner */}
      {renderAdBanner()}
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
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  photoCard: {
    width: (width - 64) / 2,
  },
  photoContainer: {
    position: 'relative',
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
  overlayEffect: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderTopLeftRadius: 8,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderLeftColor: 'rgba(255, 255, 255, 0.2)',
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  photoTitle: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  aestheticBlue: {
    backgroundColor: '#3B82F6',
  },
  aestheticOrange: {
    backgroundColor: '#F97316',
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
  adBannerOther: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
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
  grabIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#10B981',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grabIconText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
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
  mexcIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#374151',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mexcIconText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  adTextContainer: {
    flex: 1,
  },
  adInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  adBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  adBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  grabText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '500',
  },
  xadText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '500',
  },
  mexcTitle: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  mexcHighlight: {
    color: '#FCD34D',
  },
  mexcSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  downloadButton: {
    width: 40,
    height: 40,
    backgroundColor: '#EF4444',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mexcButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  mexcButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  downloadIcon: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});