import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Check } from 'lucide-react-native';

const STYLE_CARDS = [
  { 
    id: '1', 
    name: 'The Royal Kente Cross', 
    price: 'GH₵ 1,200', 
    artisan: 'Kojo Artisans',
    image: 'https://picsum.photos/300/450',
    verified: true 
  },
  { 
    id: '2', 
    name: 'Modern Afro Fit', 
    price: 'GH₵ 850', 
    artisan: 'Ama Trends',
    image: 'https://picsum.photos/301/450',
    verified: true 
  },
  { 
    id: '3', 
    name: 'Traditional Weave', 
    price: 'GH₵ 2,100', 
    artisan: 'Kente Kingdom',
    image: 'https://picsum.photos/302/450',
    verified: true 
  },
];

export const StyleRadar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Style Radar</Text>
      <Text style={styles.subtitle}>Trending this week</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {STYLE_CARDS.map((card, index) => (
          <Pressable 
            key={card.id} 
            style={[
              styles.card,
              { marginLeft: index === 0 ? 20 : -60, zIndex: 10 - index }
            ]}
          >
            <Image source={{ uri: card.image }} style={styles.cardImage} />
            <View style={styles.cardOverlay}>
              {card.verified && (
                <View style={styles.verifiedBadge}>
                  <Check size={10} color="#fff" />
                  <Text style={styles.verifiedText}>Verified</Text>
                </View>
              )}
              <Text style={styles.cardName}>{card.name}</Text>
              <Text style={styles.cardArtisan}>by {card.artisan}</Text>
              <View style={styles.priceTag}>
                <Text style={styles.priceText}>{card.price}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  cardsContainer: {
    paddingRight: 20,
  },
  card: {
    width: 180,
    height: 280,
    borderRadius: 28,
    overflow: 'hidden',
    marginRight: 12,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  verifiedText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  cardName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  cardArtisan: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    marginTop: 2,
  },
  priceTag: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  priceText: {
    color: '#1a1a1a',
    fontWeight: '700',
    fontSize: 14,
  },
});
