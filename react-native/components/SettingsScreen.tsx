import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface SettingsScreenProps {
  onBack: () => void;
  onTryProClick?: () => void;
}

export function SettingsScreen({ onBack, onTryProClick }: SettingsScreenProps) {
  const menuItems = [
    { icon: 'share', label: 'Share', onClick: () => console.log('Share clicked') },
    { icon: 'chatbubble', label: 'Feedback', onClick: () => console.log('Feedback clicked') },
    { icon: 'globe', label: 'Language', onClick: () => console.log('Language clicked') },
    { icon: 'information-circle', label: 'About', onClick: () => console.log('About clicked') },
    { icon: 'document-text', label: 'User Agreement', onClick: () => console.log('User Agreement clicked') },
    { icon: 'shield-checkmark', label: 'Privacy Policy', onClick: () => console.log('Privacy Policy clicked') },
    { icon: 'people', label: 'Community Guidelines', onClick: () => console.log('Community Guidelines clicked') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusTime}>10:45</Text>
        <View style={styles.statusRight}>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.statusIcon}>📱</Text>
          <View style={styles.batteryIndicator}>
            <Text style={styles.batteryText}>83</Text>
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Pro Banner */}
          <View style={styles.proBannerCard}>
            <LinearGradient
              colors={['#A855F7', '#8B5CF6', '#7C3AED']}
              style={styles.proBannerGradient}
            >
              <View style={styles.proBannerContent}>
                <View style={styles.proBannerLeft}>
                  <Text style={styles.proBannerTitle}>Unlimited Artwork Styles</Text>
                  <TouchableOpacity style={styles.tryProButton} onPress={onTryProClick}>
                    <Text style={styles.tryProButtonText}>Try Pro Now</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.proBannerRight}>
                  <View style={styles.crownContainer}>
                    <Text style={styles.crownIcon}>👑</Text>
                  </View>
                  <Text style={styles.sparkle1}>✨</Text>
                  <Text style={styles.sparkle2}>✨</Text>
                </View>
              </View>
            </LinearGradient>
          </View>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <View key={index}>
                <TouchableOpacity style={styles.menuItem} onPress={item.onClick}>
                  <View style={styles.menuItemLeft}>
                    <Ionicons name={item.icon as any} size={20} color="#6B7280" />
                    <Text style={styles.menuItemText}>{item.label}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                </TouchableOpacity>
                {index < menuItems.length - 1 && <View style={styles.separator} />}
              </View>
            ))}
          </View>


        </View>
      </ScrollView>
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
    alignItems: 'center',
    gap: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
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
  proBannerCard: {
    marginBottom: 32,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  proBannerGradient: {
    padding: 24,
  },
  proBannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  proBannerLeft: {
    flex: 1,
  },
  proBannerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  tryProButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
  },
  tryProButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  proBannerRight: {
    position: 'relative',
  },
  crownContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crownIcon: {
    fontSize: 32,
  },
  sparkle1: {
    position: 'absolute',
    top: -8,
    right: -8,
    fontSize: 18,
    color: '#FFFFFF',
  },
  sparkle2: {
    position: 'absolute',
    bottom: -8,
    left: -8,
    fontSize: 14,
    color: '#FFFFFF',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 32,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  separator: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginLeft: 48,
  },

});