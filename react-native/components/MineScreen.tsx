import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MineScreenProps {
  onBackClick?: () => void;
  onSettingsClick?: () => void;
  onProClick?: () => void;
}

export function MineScreen({ onBackClick, onSettingsClick, onProClick }: MineScreenProps) {
  const [activeTab, setActiveTab] = useState('mine');

  // Create array of 12 placeholder items for the grid
  const placeholderItems = Array.from({ length: 12 }, (_, index) => index);

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusTime}>11:43</Text>
        <View style={styles.statusRight}>
          <Text style={styles.statusIcon}>🔇</Text>
          <Text style={styles.statusIcon}>📶</Text>
          <Text style={styles.statusIcon}>📱</Text>
          <View style={styles.batteryIndicator}>
            <Text style={styles.batteryText}>88</Text>
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

      {/* Content */}
      <View style={styles.content}>
        {/* Grid of placeholder items */}
        <View style={styles.gridContainer}>
          {placeholderItems.map((item) => (
            <View key={item} style={styles.placeholderItem} />
          ))}
        </View>

        {/* Start Creating Section */}
        <View style={styles.startCreatingSection}>
          <Text style={styles.startCreatingTitle}>Start Creating Now</Text>
          <Text style={styles.startCreatingSubtitle}>
            Start experiencing the features to embark on your AI journey...
          </Text>
          <TouchableOpacity style={styles.startCreatingButton}>
            <Text style={styles.startCreatingButtonText}>Start Creating</Text>
          </TouchableOpacity>
        </View>
      </View>

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
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 320,
    marginBottom: 48,
  },
  placeholderItem: {
    width: '23%',
    aspectRatio: 3/4,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    marginBottom: 12,
  },
  startCreatingSection: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  startCreatingTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  startCreatingSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 280,
    marginBottom: 24,
  },
  startCreatingButton: {
    backgroundColor: '#7C3AED',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  startCreatingButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
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