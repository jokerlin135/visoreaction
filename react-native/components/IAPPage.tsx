import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface IAPPageProps {
  onClose: () => void;
  onPurchase: (planId: string) => void;
}

const plans = [
  {
    id: "weekly",
    name: "Weekly Pro",
    price: "$4.99",
    period: "/week",
    description: "Perfect for trying premium features",
    features: [
      "Unlimited photo enhancements",
      "Advanced aging simulation", 
      "All artistic filters",
      "HD exports",
      "Priority processing"
    ],
    badge: "POPULAR",
    highlight: false
  },
  {
    id: "monthly", 
    name: "Monthly Pro",
    price: "$9.99",
    period: "/month",
    description: "Best value for regular users",
    features: [
      "Everything in Weekly Pro",
      "Batch processing",
      "Cloud storage (5GB)",
      "Premium support", 
      "Early access to new features"
    ],
    badge: "BEST VALUE",
    highlight: true
  },
  {
    id: "yearly",
    name: "Yearly Pro", 
    price: "$59.99",
    period: "/year",
    originalPrice: "$119.88",
    description: "Maximum savings for power users",
    features: [
      "Everything in Monthly Pro",
      "Unlimited cloud storage",
      "Advanced AI models",
      "Commercial license",
      "1-on-1 support calls"
    ],
    badge: "SAVE 50%",
    highlight: false
  }
];

export default function IAPPage({ onClose, onPurchase }: IAPPageProps) {
  return (
    <ImageBackground 
      source={{ uri: "https://images.unsplash.com/photo-1592323401640-9c24ed330baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc3Vic2NyaXB0aW9uJTIwbW9iaWxlJTIwYXBwJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTk3NDU1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }} 
      style={styles.container}
      resizeMode="cover"
    >
      {/* Dark overlay */}
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.7)']}
        style={styles.overlay}
      />
      
      <SafeAreaView style={styles.safeArea}>
        {/* Close Button */}
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={20} color="white" />
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <LinearGradient
              colors={['#FBBF24', '#F97316']}
              style={styles.crownContainer}
            >
              <Ionicons name="diamond" size={32} color="white" />
            </LinearGradient>
            <Text style={styles.title}>Unlock Premium Features</Text>
            <Text style={styles.subtitle}>
              Get unlimited access to all AI-powered photo tools and premium features
            </Text>
          </View>
          
          {/* Plans */}
          <View style={styles.plansContainer}>
            {plans.map((plan) => (
              <View 
                key={plan.id}
                style={[
                  styles.planCard,
                  plan.highlight && styles.highlightCard
                ]}
              >
                {plan.highlight && (
                  <LinearGradient
                    colors={['#7C3AED', '#3B82F6']}
                    style={styles.planCardGradient}
                  />
                )}
                
                <View style={styles.planHeader}>
                  <View style={styles.planInfo}>
                    <Text style={[
                      styles.planName,
                      plan.highlight && styles.highlightText
                    ]}>
                      {plan.name}
                    </Text>
                    <Text style={[
                      styles.planDescription,
                      plan.highlight && styles.highlightSubtext
                    ]}>
                      {plan.description}
                    </Text>
                  </View>
                  <View style={[
                    styles.badge,
                    plan.highlight ? styles.highlightBadge : styles.normalBadge
                  ]}>
                    <Text style={[
                      styles.badgeText,
                      plan.highlight && styles.highlightBadgeText
                    ]}>
                      {plan.badge}
                    </Text>
                  </View>
                </View>
                
                <View style={styles.priceContainer}>
                  {plan.originalPrice && (
                    <Text style={[
                      styles.originalPrice,
                      plan.highlight && styles.highlightSubtext
                    ]}>
                      {plan.originalPrice}
                    </Text>
                  )}
                  <Text style={[
                    styles.price,
                    plan.highlight && styles.highlightText
                  ]}>
                    {plan.price}
                  </Text>
                  <Text style={[
                    styles.period,
                    plan.highlight && styles.highlightSubtext
                  ]}>
                    {plan.period}
                  </Text>
                </View>
                
                <View style={styles.featuresContainer}>
                  {plan.features.map((feature, index) => (
                    <View key={index} style={styles.featureItem}>
                      <View style={[
                        styles.featureIcon,
                        plan.highlight ? styles.highlightFeatureIcon : styles.normalFeatureIcon
                      ]}>
                        <Ionicons 
                          name="sparkles" 
                          size={12} 
                          color={plan.highlight ? "white" : "#7C3AED"} 
                        />
                      </View>
                      <Text style={[
                        styles.featureText,
                        plan.highlight && styles.highlightSubtext
                      ]}>
                        {feature}
                      </Text>
                    </View>
                  ))}
                </View>
                
                <TouchableOpacity 
                  style={[
                    styles.purchaseButton,
                    plan.highlight && styles.highlightButton
                  ]}
                  onPress={() => onPurchase(plan.id)}
                >
                  {plan.highlight ? (
                    <View style={styles.highlightButtonContent}>
                      <Text style={styles.highlightButtonText}>Choose Best Value</Text>
                    </View>
                  ) : (
                    <LinearGradient
                      colors={['#7C3AED', '#3B82F6']}
                      style={styles.purchaseButtonGradient}
                    >
                      <Text style={styles.purchaseButtonText}>Get Started</Text>
                    </LinearGradient>
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </View>
          
          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              7-day free trial • Cancel anytime
            </Text>
            <View style={styles.footerLinks}>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Terms of Service</Text>
              </TouchableOpacity>
              <Text style={styles.footerSeparator}>•</Text>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Privacy Policy</Text>
              </TouchableOpacity>
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
    width: width,
    height: height,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  safeArea: {
    flex: 1,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 60,
    right: 24,
    zIndex: 20,
  },
  closeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 80,
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  crownContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    maxWidth: 280,
  },
  plansContainer: {
    gap: 16,
    marginBottom: 32,
  },
  planCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    position: 'relative',
    overflow: 'hidden',
  },
  highlightCard: {
    borderColor: '#FBBF24',
    transform: [{ scale: 1.05 }],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 16,
  },
  planCardGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  planInfo: {
    flex: 1,
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  planDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  highlightText: {
    color: 'white',
  },
  highlightSubtext: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  normalBadge: {
    backgroundColor: '#F3E8FF',
    borderWidth: 1,
    borderColor: '#DDD6FE',
  },
  highlightBadge: {
    backgroundColor: '#FBBF24',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#7C3AED',
  },
  highlightBadgeText: {
    color: '#92400E',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
    marginBottom: 16,
  },
  originalPrice: {
    fontSize: 14,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  period: {
    fontSize: 14,
    color: '#6B7280',
  },
  featuresContainer: {
    marginBottom: 16,
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalFeatureIcon: {
    backgroundColor: '#F3E8FF',
  },
  highlightFeatureIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  featureText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  purchaseButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  highlightButton: {
    backgroundColor: 'white',
  },
  purchaseButtonGradient: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  purchaseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  highlightButtonContent: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  highlightButtonText: {
    color: '#7C3AED',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
  footerLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  footerLink: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
  },
  footerSeparator: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
  },
});