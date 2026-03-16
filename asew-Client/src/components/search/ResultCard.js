import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { MapPin, Star } from 'lucide-react-native';

export const ResultCard = ({ item }) => (
  <Pressable style={styles.container}>
    <Image source={{ uri: item.image }} style={styles.thumbnail} />
    <View style={styles.details}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.specialty}>{item.specialty}</Text>
      <View style={styles.locationRow}>
        <MapPin size={12} color="#999" />
        <Text style={styles.location}> {item.location}</Text>
      </View>
    </View>
    <View style={styles.ratingContainer}>
      <View style={styles.ratingRow}>
        <Star size={12} color="#d97706" fill="#d97706" />
        <Text style={styles.rating}> {item.rating}</Text>
      </View>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  thumbnail: { width: 70, height: 70, borderRadius: 8 },
  details: { flex: 1, marginLeft: 15 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#1a1a1a' },
  specialty: { fontSize: 13, color: '#666', marginVertical: 2 },
  location: { fontSize: 12, color: '#999' },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: { padding: 5, backgroundColor: '#fef3c7', borderRadius: 6 },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: { fontSize: 12, fontWeight: '600', color: '#d97706' },
});
