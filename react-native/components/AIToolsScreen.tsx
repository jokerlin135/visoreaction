import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface AIToolsScreenProps {
  onBackClick?: () => void;
  onSettingsClick?: () => void;
  onProClick?: () => void;
}

const aiToolsFeatures = [
  {
    id: 'improve-quality',
    title: 'Improve Photo Quality',
    image: 'https://images.unsplash.com/photo-1694450198239-733c079e98e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWUlMjBmbG93ZXIlMjBtYWNybyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1OTc1ODk0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradientColors: ['rgba(147, 51, 234, 0.8)', 'rgba(88, 28, 135, 0.8)']
  },
  {
    id: 'ai-styles',
    title: 'Generate dozens of styles with AI',
    image: 'https://images.unsplash.com/photo-1711194992405-6b5aad30b8fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VyJTIwZGlmZmVyZW50JTIwd29tZW4lMjBwb3J0cmFpdCUyMHN0eWxlc3xlbnwxfHx8fDE3NTk3NTg5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradientColors: ['rgba(31, 41, 55, 0.8)', 'rgba(217, 119, 6, 0.8)'],
    hasProfileImage: true,
    profileImage: 'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTczMDA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'restore-photo',
    title: 'Restore Old Photo',
    image: 'https://images.unsplash.com/photo-1600713715773-cae15017841a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkYW1hZ2VkJTIwcGhvdG8lMjByZXN0b3JhdGlvbiUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1OTc1ODk1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradientColors: ['rgba(17, 24, 39, 0.8)', 'rgba(55, 65, 81, 0.8)']
  },
  {
    id: 'generate-photos',
    title: 'Generate Your Photos with AI',
    image: 'https://images.unsplash.com/photo-1617818046956-38df20876e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0ZSUyMHBvcnRyYWl0JTIwcGhvdG9zfGVufDF8fHx8MTc1OTc3MTgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradientColors: ['rgba(17, 24, 39, 0.8)', 'rgba(120, 53, 15, 0.8)']
  },
  {
    id: 'face-swap',
    title: 'Be Anyone with Face Swap',
    image: 'https://images.unsplash.com/photo-1658070845252-8de7cfb53652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmhlcm8lMjBmYWNlJTIwc3dhcCUyMGZhbnRhc3klMjBjaGFyYWN0ZXJzfGVufDF8fHx8MTc1OTc1ODk2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradientColors: ['rgba(30, 58, 138, 0.8)', 'rgba(234, 88, 12, 0.8)'],
    hasProfileImages: true,
    profileImages: [
      'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTczMDA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTc1Njc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  },
  {
    id: 'baby-generator',
    title: 'AI Baby Generator',
    image: 'https://images.unsplash.com/photo-1639931723005-483ded9ab43b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwYmFieSUyMGdlbmVyYXRvciUyMGZhbWlseSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTc1ODk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradientColors: ['rgba(219, 39, 119, 0.8)', 'rgba(157, 23, 77, 0.8)'],
    hasProfileImages: true,
    hasArrow: true,
    profileImages: [
      'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTczMDA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTc1Njc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  },
  {
    id: 'story-of-life',
    title: 'The Story of Life',
    image: 'https://images.unsplash.com/photo-1668185380754-f84fe36e8bf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGdpcmwlMjBvbGRlciUyMHdvbWFuJTIwYWdpbmclMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NTk3NzE4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradientColors: ['rgba(234, 88, 12, 0.8)', 'rgba(154, 52, 18, 0.8)'],
    hasAgeLabels: true
  },
  {
    id: 'retake-photos',
    title: 'Retake your photos for brighter, wide-open eyes!',
    image: 'https://images.unsplash.com/photo-1751730740515-5bf81a1a955c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYmVmb3JlJTIwYWZ0ZXIlMjBicmlnaHQlMjBleWVzfGVufDF8fHx8MTc1OTc3MTgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradientColors: ['rgba(37, 99, 235, 0.8)', 'rgba(147, 51, 234, 0.8)']
  }
];

export function AIToolsScreen({ onBackClick, onSettingsClick, onProClick }: AIToolsScreenProps) {
  const [activeTab, setActiveTab] = useState('ai-tools');

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusTime}>12:27</Text>
        <View style={styles.statusRight}>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.statusIcon}>📱</Text>
          <View style={styles.batteryIndicator}>
            <Text style={styles.batteryText}>87</Text>
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.appIcon}>
          <Text style={styles.appIconText}>🤖</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.proBadge} onPress={onProClick}>
            <Text style={styles.proEmoji}>👑</Text>
            <Text style={styles.proText}>PRO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton} onPress={onSettingsClick}>
            <Ionicons name="settings" size={24} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>

      {/* AI Tools Features */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.featuresContainer}>
          {aiToolsFeatures.map((feature) => (
            <TouchableOpacity key={feature.id} style={styles.featureCard} activeOpacity={0.95}>
              <View style={styles.imageContainer}>
                <Image 
                  source={{ uri: feature.image }}
                  style={styles.featureImage}
                  resizeMode="cover"
                />
                
                {/* Gradient Overlay */}
                <LinearGradient
                  colors={feature.gradientColors}
                  style={styles.gradientOverlay}
                />
                
                {/* Profile Image (for AI styles) */}
                {feature.hasProfileImage && feature.profileImage && (
                  <View style={styles.singleProfileContainer}>
                    <View style={styles.profileImageWrapper}>
                      <Image 
                        source={{ uri: feature.profileImage }}
                        style={styles.profileImage}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                )}

                {/* Profile Images (for face swap and baby generator) */}
                {feature.hasProfileImages && feature.profileImages && (
                  <View style={styles.multipleProfileContainer}>
                    <View style={styles.profileImagesRow}>
                      {feature.profileImages.map((img, index) => (
                        <View key={index} style={styles.smallProfileWrapper}>
                          <Image 
                            source={{ uri: img }}
                            style={styles.smallProfileImage}
                            resizeMode="cover"
                          />
                        </View>
                      ))}
                    </View>
                    {feature.hasArrow && (
                      <View style={styles.arrowContainer}>
                        <View style={styles.arrowCircle}>
                          <Text style={styles.arrowText}>→</Text>
                        </View>
                      </View>
                    )}
                  </View>
                )}

                {/* Age Labels (for Story of Life) */}
                {feature.hasAgeLabels && (
                  <>
                    <View style={styles.ageLabel1}>
                      <Text style={styles.ageLabelText}>5 y/o</Text>
                    </View>
                    <View style={styles.ageLabel2}>
                      <Text style={styles.ageLabelText}>65 y/o</Text>
                    </View>
                  </>
                )}
                
                {/* Title */}
                <View style={styles.titleContainer}>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity 
          style={[styles.navButton, activeTab === 'home' && styles.activeNavButton]}
          onPress={() => {
            setActiveTab('home');
            onBackClick?.();
          }}
        >
          <Ionicons name="home" size={24} color={activeTab === 'home' ? '#7C3AED' : '#9CA3AF'} />
          <Text style={[styles.navText, activeTab === 'home' && styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navButton, activeTab === 'ai-tools' && styles.activeNavButton]}
          onPress={() => setActiveTab('ai-tools')}
        >
          <Ionicons name="color-wand" size={24} color={activeTab === 'ai-tools' ? '#7C3AED' : '#9CA3AF'} />
          <Text style={[styles.navText, activeTab === 'ai-tools' && styles.activeNavText]}>AI Tools</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navButton, activeTab === 'mine' && styles.activeNavButton]}
          onPress={() => setActiveTab('mine')}
        >
          <Ionicons name="person" size={24} color={activeTab === 'mine' ? '#7C3AED' : '#9CA3AF'} />
          <Text style={[styles.navText, activeTab === 'mine' && styles.activeNavText]}>Mine</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  statusBar: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  statusTime: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusIcon: {
    fontSize: 14,
  },
  batteryIndicator: {
    backgroundColor: '#000000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  batteryText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#7C3AED',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIconText: {
    fontSize: 24,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  proBadge: {
    backgroundColor: '#7C3AED',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  proEmoji: {
    fontSize: 18,
  },
  proText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  settingsButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  featuresContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 100,
  },
  featureCard: {
    marginBottom: 16,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  featureImage: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  singleProfileContainer: {
    position: 'absolute',
    bottom: 64,
    right: 16,
  },
  profileImageWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  multipleProfileContainer: {
    position: 'absolute',
    bottom: 64,
    right: 16,
  },
  profileImagesRow: {
    flexDirection: 'row',
    gap: 12,
  },
  smallProfileWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  smallProfileImage: {
    width: '100%',
    height: '100%',
  },
  arrowContainer: {
    position: 'absolute',
    bottom: -12,
    left: '50%',
    marginLeft: -16,
  },
  arrowCircle: {
    width: 32,
    height: 32,
    backgroundColor: '#06B6D4',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  arrowText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ageLabel1: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  ageLabel2: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  ageLabelText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  featureTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 80, // Above global ad banner
    left: 16,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 16,
  },
  activeNavButton: {
    backgroundColor: '#EDE9FE',
  },
  navText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
    fontWeight: '500',
  },
  activeNavText: {
    color: '#7C3AED',
  },
});