import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface ProIAPPageProps {
  onClose: () => void;
  onPurchase: (planId: string) => void;
}

export function ProIAPPage({ onClose, onPurchase }: ProIAPPageProps) {
  const features = [
    'Unlock to All Features',
    '200% Faster Processing',
    'Unlimited Creations',
    'Priority Access to New Content',
    'No Ads, No Watermarks',
  ];

  const plans = [
    {
      id: 'lifetime',
      duration: '∞',
      subtitle: 'Lifetime\n1 purchase',
      price: '₫2,050,000',
      badge: 'BEST VALUE',
      badgeColor: '#374151',
    },
    {
      id: 'yearly',
      duration: '1',
      subtitle: 'Year\n₫18153.85 / Week',
      price: '₫944,000',
      badge: 'SAVE 89%',
      badgeColor: '#7C3AED',
      isPopular: true,
    },
    {
      id: 'weekly',
      duration: '1',
      subtitle: 'Week',
      price: '₫165,000',
      badge: 'MOST POPULAR',
      badgeColor: '#374151',
    },
  ];

  // Using a sunflower image URL that matches the design
  const sunflowerImageUri = 'https://images.unsplash.com/photo-1597848212624-e593c83f38ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBnb2xkZW4lMjBiZWF1dGlmdWx8ZW58MXx8fHwxNzU5NzU5Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  return (
    <ImageBackground source={{ uri: sunflowerImageUri }} style={styles.container}>
      <View style={styles.overlay} />
      
      <SafeAreaView style={styles.safeArea}>
        {/* Status Bar */}
        <View style={styles.statusBar}>
          <Text style={styles.statusTime}>10:21</Text>
          <View style={styles.statusRight}>
            <Text style={styles.statusIcon}>🔇</Text>
            <Text style={styles.statusIcon}>📶</Text>
            <Text style={styles.statusIcon}>📶</Text>
            <Text style={styles.batteryText}>82</Text>
          </View>
        </View>

        {/* Header Controls */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.restoreButton}
            onPress={() => console.log('Restore clicked')}
          >
            <Text style={styles.restoreText}>Restore</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            
            {/* Features List */}
            <View style={styles.featuresContainer}>
              {features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <View style={styles.checkCircle}>
                    <Ionicons name="checkmark" size={16} color="#059669" />
                  </View>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            {/* Pricing Cards */}
            <View style={styles.pricingContainer}>
              {plans.map((plan) => (
                <TouchableOpacity
                  key={plan.id}
                  style={[
                    styles.pricingCard,
                    plan.isPopular ? styles.popularCard : styles.normalCard,
                  ]}
                  onPress={() => onPurchase(plan.id)}
                >
                  {/* Badge */}
                  <View
                    style={[
                      styles.badge,
                      { backgroundColor: plan.badgeColor },
                    ]}
                  >
                    <Text style={styles.badgeText}>{plan.badge}</Text>
                  </View>

                  {/* Duration */}
                  <Text style={styles.duration}>{plan.duration}</Text>
                  
                  {/* Subtitle */}
                  <Text style={styles.subtitle}>{plan.subtitle}</Text>
                  
                  {/* Price */}
                  <Text style={styles.price}>{plan.price}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Continue Button */}
            <TouchableOpacity
              style={styles.continueButtonContainer}
              onPress={() => onPurchase('yearly')}
            >
              <LinearGradient
                colors={['#7C3AED', '#6D28D9']}
                style={styles.continueButton}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
              </LinearGradient>
            </TouchableOpacity>

            {/* Footer Text */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Auto-renewable. Cancel anytime.</Text>
              <View style={styles.footerLinks}>
                <TouchableOpacity
                  onPress={() => console.log('User Agreement clicked')}
                >
                  <Text style={styles.footerLink}>User Agreement</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log('Privacy Policy clicked')}
                >
                  <Text style={styles.footerLink}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  safeArea: {
    flex: 1,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  statusTime: {
    color: '#FFFFFF',
    fontSize: 14,
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
  batteryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  restoreButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  restoreText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  featuresContainer: {
    marginTop: 60,
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  checkCircle: {
    width: 24,
    height: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  pricingContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  pricingCard: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
    position: 'relative',
  },
  normalCard: {
    borderColor: '#6B7280',
    backgroundColor: 'rgba(55, 65, 81, 0.8)',
  },
  popularCard: {
    borderColor: '#7C3AED',
    backgroundColor: 'rgba(124, 58, 237, 0.9)',
  },
  badge: {
    position: 'absolute',
    top: -8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  duration: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 12,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  continueButtonContainer: {
    marginBottom: 24,
  },
  continueButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 24,
    gap: 8,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 8,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 24,
  },
  footerLink: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.8,
    textDecorationLine: 'underline',
  },
});