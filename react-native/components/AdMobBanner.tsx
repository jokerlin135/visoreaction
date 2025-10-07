import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function AdMobBanner() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#EC4899', '#9333EA']}
        style={styles.banner}
      >
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>✨ Glow Beauty - Làn da hoàn hảo!</Text>
            <View style={styles.subContainer}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>GLOW</Text>
              </View>
              <Text style={styles.subText}>Tự tin mỗi ngày</Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image 
              source={{ 
                uri: "https://images.unsplash.com/photo-1679584352584-f07655bbadea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHdvbWFuJTIwZmFjZSUyMGNyZWFtfGVufDF8fHx8MTc1OTc2Mzg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              }}
              style={styles.image}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  banner: {
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#FBCFE8',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: '#EC4899',
    fontSize: 10,
    fontWeight: 'bold',
  },
  subText: {
    color: '#FBCFE8',
    fontSize: 12,
  },
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});