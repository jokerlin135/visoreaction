import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface IntroPageProps {
  backgroundImage: string;
  title: string;
  description?: string;
  onNext: () => void;
  onSkip: () => void;
  isLastPage?: boolean;
}

export default function IntroPage({ 
  backgroundImage, 
  title, 
  description, 
  onNext, 
  onSkip, 
  isLastPage = false 
}: IntroPageProps) {
  return (
    <ImageBackground 
      source={{ uri: backgroundImage }} 
      style={styles.container}
      resizeMode="cover"
    >
      {/* Dark overlay */}
      <View style={styles.overlay} />
      
      <SafeAreaView style={styles.safeArea}>
        {/* Status Bar Content */}
        <View style={styles.statusBar}>
          <View style={styles.timeContainer}>
            <Ionicons name="time-outline" size={16} color="white" />
            <Text style={styles.timeText}>12:12</Text>
          </View>
          <View style={styles.statusIcons}>
            <Ionicons name="cellular" size={16} color="white" style={styles.iconSpacing} />
            <Ionicons name="battery-full" size={16} color="white" />
          </View>
        </View>
        
        {/* Skip Button */}
        <View style={styles.skipContainer}>
          <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
        
        {/* Content */}
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {description && (
              <Text style={styles.description}>{description}</Text>
            )}
          </View>
          
          {/* Next Button */}
          <View style={styles.nextButtonContainer}>
            <TouchableOpacity style={styles.nextButton} onPress={onNext}>
              <Ionicons name="chevron-forward" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  safeArea: {
    flex: 1,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 8,
  },
  skipContainer: {
    position: 'absolute',
    top: 60,
    right: 24,
    zIndex: 10,
  },
  skipButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  skipText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingBottom: 64,
  },
  textContainer: {
    marginBottom: 40,
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 44,
    marginBottom: 24,
    letterSpacing: -0.5,
    maxWidth: 320,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    maxWidth: 280,
  },
  nextButtonContainer: {
    alignItems: 'flex-end',
  },
  nextButton: {
    backgroundColor: '#7C3AED',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});