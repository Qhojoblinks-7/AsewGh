import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, PanResponder, Dimensions } from 'react-native';
import { Check } from 'lucide-react-native';

const TRENDING_DESIGNS = [
  {
    id: 'featured-1',
    designName: 'Royal Kente Collection',
    designer: 'Kojo Artisans',
    designerAvatar: 'https://picsum.photos/100',
    isVerified: true,
    price: '₵2,500',
    image: 'https://picsum.photos/800/800',
  },
  {
    id: 'featured-2',
    designName: 'Modern Afro Blend',
    designer: 'Ama Trends',
    designerAvatar: 'https://picsum.photos/101',
    isVerified: true,
    price: '₵1,800',
    image: 'https://picsum.photos/800/801',
  },
  {
    id: 'featured-3',
    designName: 'Bridal Elegance',
    designer: 'Abena Bridal',
    designerAvatar: 'https://picsum.photos/105',
    isVerified: true,
    price: '₵4,200',
    image: 'https://picsum.photos/800/802',
  },
  {
    id: 'featured-4',
    designName: 'Contemporary Wear',
    designer: 'Nana Styles',
    designerAvatar: 'https://picsum.photos/103',
    isVerified: false,
    price: '₵1,500',
    image: 'https://picsum.photos/800/803',
  },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const FeaturedCard = ({ onPress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const currentDesign = TRENDING_DESIGNS[currentIndex];

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 10;
      },
      onPanResponderMove: (_, gestureState) => {
        translateX.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -50) {
          if (currentIndex < TRENDING_DESIGNS.length - 1) {
            Animated.timing(translateX, {
              toValue: -SCREEN_WIDTH,
              duration: 250,
              useNativeDriver: true,
            }).start(() => {
              setCurrentIndex(currentIndex + 1);
              translateX.setValue(SCREEN_WIDTH);
              Animated.timing(translateX, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
              }).start();
            });
          } else {
            Animated.spring(translateX, { toValue: 0, useNativeDriver: true }).start();
          }
        } else if (gestureState.dx > 50) {
          if (currentIndex > 0) {
            Animated.timing(translateX, {
              toValue: SCREEN_WIDTH,
              duration: 250,
              useNativeDriver: true,
            }).start(() => {
              setCurrentIndex(currentIndex - 1);
              translateX.setValue(-SCREEN_WIDTH);
              Animated.timing(translateX, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
              }).start();
            });
          } else {
            Animated.spring(translateX, { toValue: 0, useNativeDriver: true }).start();
          }
        } else {
          Animated.spring(translateX, { toValue: 0, useNativeDriver: true }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.wrapper}>
      <Animated.View 
        style={[
          styles.container, 
          { transform: [{ translateX }] }
        ]}
        {...panResponder.panHandlers}
      >
        <TouchableOpacity 
          style={styles.touchable}
          onPress={onPress}
          activeOpacity={0.95}
        >
          <Image 
            source={{ uri: currentDesign.image }} 
            style={styles.backgroundImage}
            resizeMode="cover"
          />
          
          <View style={styles.gradientOverlay} />
          
          <View style={styles.content}>
            {/* Design Info Section - Above Designer */}
            <View style={styles.infoSection}>
              <Text style={styles.designName}>{currentDesign.designName}</Text>
              
              {/* Designer Row with Price */}
              <View style={styles.designerPriceRow}>
                <View style={styles.designerInfo}>
                  <View style={styles.avatarWrapper}>
                    <Image 
                      source={{ uri: currentDesign.designerAvatar }} 
                      style={styles.designerAvatar}
                    />
                    {currentDesign.isVerified && (
                      <View style={styles.verifiedBadge}>
                        <Check color="#fff" size={8} />
                      </View>
                    )}
                  </View>
                  <Text style={styles.designerName}>{currentDesign.designer}</Text>
                </View>
                <View style={styles.priceGlass}>
                  <Text style={styles.priceLabel}>From</Text>
                  <Text style={styles.priceValue}>{currentDesign.price}</Text>
                </View>
              </View>
            </View>
            
            {/* Bottom Section - Price */}
            <View style={styles.bottomSection}>
              <View style={styles.priceGlass}>
                <Text style={styles.priceLabel}>Starting at</Text>
                <Text style={styles.priceValue}>{currentDesign.price}</Text>
              </View>
            </View>
            
            {/* Trending Tag */}
            <View style={styles.trendingTag}>
              <Text style={styles.trendingText}>🔥 Trending</Text>
            </View>
            
            {/* Swipe Indicators */}
            <View style={styles.swipeIndicators}>
              {TRENDING_DESIGNS.map((_, index) => (
                <View 
                  key={index} 
                  style={[
                    styles.dot,
                    index === currentIndex && styles.dotActive
                  ]} 
                />
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 450,
    marginHorizontal: 10,
    marginTop: 5,
  },
  container: {
    height: '100%',
    borderRadius: 17,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  touchable: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    padding: 20,
  },
  infoSection: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 20,
  },
  designName: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    marginBottom: 12,
  },
  designerPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  designerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 10,
  },
  designerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: -3,
    right: -3,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  designerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  bottomSection: {
    display: 'none',
  },
  priceGlass: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(10px)',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  priceLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  priceValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    marginTop: 2,
  },
  trendingTag: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  trendingText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#000',
  },
  swipeIndicators: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  dotActive: {
    backgroundColor: '#fff',
    width: 24,
  },
});
