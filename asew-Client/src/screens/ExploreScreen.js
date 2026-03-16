import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Check, Heart } from 'lucide-react-native';

const EXPLORE_DESIGNS = [
  { id: '1', designName: 'Royal Kente', designer: 'Kojo Artisans', avatar: 'https://picsum.photos/100', price: '₵2,500', image: 'https://picsum.photos/400/500', verified: true },
  { id: '2', designName: 'Modern Afro', designer: 'Ama Trends', avatar: 'https://picsum.photos/101', price: '₵1,800', image: 'https://picsum.photos/400/600', verified: true },
  { id: '3', designName: 'Bridal Elegance', designer: 'Abena Bridal', avatar: 'https://picsum.photos/105', price: '₵4,200', image: 'https://picsum.photos/400/450', verified: true },
  { id: '4', designName: 'Contemporary', designer: 'Nana Styles', avatar: 'https://picsum.photos/103', price: '₵1,500', image: 'https://picsum.photos/400/550', verified: false },
  { id: '5', designName: 'Kente Classic', designer: 'Kente Kingdom', avatar: 'https://picsum.photos/104', price: '₵3,200', image: 'https://picsum.photos/400/480', verified: true },
  { id: '6', designName: 'Fiifi Special', designer: 'Fiifi Stitches', avatar: 'https://picsum.photos/102', price: '₵2,100', image: 'https://picsum.photos/400/520', verified: true },
  { id: '7', designName: 'African Print', designer: 'Yaw Mensah', avatar: 'https://picsum.photos/106', price: '₵1,200', image: 'https://picsum.photos/400/580', verified: false },
  { id: '8', designName: 'Traditional Wears', designer: 'Adjoa Styles', avatar: 'https://picsum.photos/107', price: '₵2,800', image: 'https://picsum.photos/400/420', verified: true },
  { id: '9', designName: 'Urban Fashion', designer: 'Kwame Design', avatar: 'https://picsum.photos/108', price: '₵1,900', image: 'https://picsum.photos/400/560', verified: true },
];

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 36) / 2;

const ExploreCard = ({ item }) => (
  <Pressable style={[styles.card, { width: CARD_WIDTH }]}>
    <Image source={{ uri: item.image }} style={styles.cardImage} />
    <View style={styles.gradientOverlay} />
    
    {/* Like Button */}
    <Pressable style={styles.likeButton}>
      <Heart size={18} color="#fff" />
    </Pressable>
    
    {/* Content Overlay */}
    <View style={styles.content}>
      {/* Design Name */}
      <Text style={styles.designName} numberOfLines={1}>{item.designName}</Text>
      
      {/* Designer Row with Price */}
      <View style={styles.designerPriceRow}>
        <View style={styles.designerInfo}>
          <View style={styles.avatarWrapper}>
            <Image source={{ uri: item.avatar }} style={styles.designerAvatar} />
            {item.verified && (
              <View style={styles.verifiedBadge}>
                <Check size={8} color="#fff" />
              </View>
            )}
          </View>
          <Text style={styles.designerName} numberOfLines={1}>{item.designer}</Text>
        </View>
        <View style={styles.priceGlass}>
          <Text style={styles.priceLabel}>From</Text>
          <Text style={styles.priceValue}>{item.price}</Text>
        </View>
      </View>
    </View>
  </Pressable>
);

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
      </View>
      <FlatList
        data={EXPLORE_DESIGNS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExploreCard item={item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    height: CARD_WIDTH * 1.4,
    backgroundColor: '#000',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
  },
  designName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    marginBottom: 8,
  },
  designerPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  designerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 8,
  },
  designerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#fff',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  designerName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
    flex: 1,
  },
  priceGlass: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  priceLabel: {
    fontSize: 9,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
  },
  priceValue: {
    fontSize: 14,
    fontWeight: '800',
    color: '#fff',
  },
});
