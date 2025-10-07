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

interface FixOldPhotoScreenProps {
  onBackClick?: () => void;
}

export default function FixOldPhotoScreen({ onBackClick }: FixOldPhotoScreenProps) {
  const handlePhotoSelect = () => {
    console.log('Photo selected from gallery');
  };

  const handleCameraCapture = () => {
    console.log('Camera capture');
  };

  const handleDemoClick = (demoNumber: number) => {
    console.log(`Demo ${demoNumber} clicked`);
  };

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
          <Text style={styles.batteryText}>81</Text>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackClick}>
          <Ionicons name="arrow-back" size={20} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fix Old Photo</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Before/After Image Display */}
        <View style={styles.imageSection}>
          <View style={styles.imageContainer}>
            {/* Split view container */}
            <View style={styles.splitContainer}>
              {/* Before (Left side - damaged photo) */}
              <View style={styles.beforeContainer}>
                <Image 
                  source={{ uri: 'https://images.unsplash.com/photo-1512373977447-6a8a90da5f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkYW1hZ2VkJTIwdmludGFnZSUyMHBob3RvfGVufDF8fHx8MTc1OTgxODc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }}
                  style={styles.beforeImage}
                  resizeMode="cover"
                />
                {/* Damage overlay effect */}
                <LinearGradient
                  colors={['rgba(156, 163, 175, 0.4)', 'transparent', 'rgba(75, 85, 99, 0.3)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.damageOverlay}
                />
              </View>
              
              {/* After (Right side - restored photo) */}
              <View style={styles.afterContainer}>
                <Image 
                  source={{ uri: 'https://images.unsplash.com/photo-1597515751759-cc67d3fe3f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0b3JlZCUyMHZpbnRhZ2UlMjBmYW1pbHklMjBwaG90b3xlbnwxfHx8fDE3NTk4MTg3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }}
                  style={styles.afterImage}
                  resizeMode="cover"
                />
              </View>
            </View>
            
            {/* Center divider line */}
            <View style={styles.dividerLine} />
          </View>
        </View>

        {/* Add Your Photo Section */}
        <View style={styles.addPhotoSection}>
          <LinearGradient
            colors={['#FAF5FF', '#FDF2F8']}
            style={styles.addPhotoContainer}
          >
            <Text style={styles.addPhotoTitle}>Add Your Photo</Text>
            
            {/* Action Buttons Row */}
            <View style={styles.actionButtonsRow}>
              {/* Photos Button */}
              <TouchableOpacity
                onPress={handlePhotoSelect}
                style={[styles.actionButton, styles.photosButton]}
                activeOpacity={0.8}
              >
                <Ionicons name="images" size={32} color="#FFFFFF" />
                <Text style={styles.actionButtonText}>Photos</Text>
              </TouchableOpacity>

              {/* Camera Button */}
              <TouchableOpacity
                onPress={handleCameraCapture}
                style={[styles.actionButton, styles.cameraButton]}
                activeOpacity={0.8}
              >
                <Ionicons name="camera" size={32} color="#FFFFFF" />
                <Text style={styles.actionButtonText}>Camera</Text>
              </TouchableOpacity>
            </View>

            {/* Demo Buttons Row */}
            <View style={styles.demoButtonsRow}>
              {/* Demo 1 */}
              <TouchableOpacity
                onPress={() => handleDemoClick(1)}
                style={styles.demoButton}
                activeOpacity={0.8}
              >
                <Image 
                  source={{ uri: 'https://images.unsplash.com/photo-1622180458663-65d1cecfedf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkYW1hZ2VkJTIwcGhvdG9ncmFwaCUyMHJlc3RvcmF0aW9ufGVufDF8fHx8MTc1OTgxODc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }}
                  style={styles.demoImage}
                />
                <View style={styles.demoOverlay}>
                  <Text style={styles.demoText}>Demo</Text>
                </View>
              </TouchableOpacity>

              {/* Demo 2 */}
              <TouchableOpacity
                onPress={() => handleDemoClick(2)}
                style={styles.demoButton}
                activeOpacity={0.8}
              >
                <Image 
                  source={{ uri: 'https://images.unsplash.com/photo-1600713715733-cba308d9301c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmFtaWx5JTIwcG9ydHJhaXQlMjByZXN0b3JhdGlvbnxlbnwxfHx8fDE3NTk4MTg3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }}
                  style={styles.demoImage}
                />
                <View style={styles.demoOverlay}>
                  <Text style={styles.demoText}>Demo</Text>
                </View>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>

      {/* Grab Ad Banner */}
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
  imageSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  imageContainer: {
    width: width - 32,
    aspectRatio: 4/5,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
    alignSelf: 'center',
    maxWidth: 320,
  },
  splitContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  beforeContainer: {
    width: '50%',
    position: 'relative',
  },
  beforeImage: {
    width: '100%',
    height: '100%',
  },
  damageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  afterContainer: {
    width: '50%',
  },
  afterImage: {
    width: '100%',
    height: '100%',
  },
  dividerLine: {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: '#FFFFFF',
    marginLeft: -1,
  },
  addPhotoSection: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  addPhotoContainer: {
    borderRadius: 24,
    padding: 24,
    maxWidth: 320,
    alignSelf: 'center',
    width: '100%',
  },
  addPhotoTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 24,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  photosButton: {
    backgroundColor: '#7C3AED',
  },
  cameraButton: {
    backgroundColor: '#EC4899',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  demoButtonsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  demoButton: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  demoImage: {
    width: '100%',
    height: '100%',
  },
  demoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  demoText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  adLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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