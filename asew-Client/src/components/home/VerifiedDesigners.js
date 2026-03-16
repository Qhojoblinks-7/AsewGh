import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Check } from 'lucide-react-native';

const DESIGNERS = [
  { id: '1', name: 'Kofi Osei', image: 'https://picsum.photos/100', verified: true },
  { id: '2', name: 'Bonnesiya', image: 'https://picsum.photos/101', verified: true },
  { id: '3', name: 'Ama Yaa', image: 'https://picsum.photos/102', verified: true },
  { id: '4', name: 'Kojo Mensah', image: 'https://picsum.photos/103', verified: true },
  { id: '5', name: 'Fiifi D.', image: 'https://picsum.photos/104', verified: true },
];

export const VerifiedDesigners = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Verified Artisans</Text>
        <Text style={styles.hint}>Tap twice to follow</Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {DESIGNERS.map((designer) => (
          <Pressable key={designer.id} style={styles.designerItem}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: designer.image }} style={styles.avatar} />
              {designer.verified && (
                <View style={styles.verifiedBadge}>
                  <Check size={10} color="#fff" />
                </View>
              )}
            </View>
            <Text style={styles.designerName} numberOfLines={1}>
              {designer.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  hint: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 20,
  },
  designerItem: {
    alignItems: 'center',
    width: 80,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  verifiedIcon: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  designerName: {
    fontSize: 13,
    color: '#333',
    marginTop: 8,
    maxWidth: 80,
    textAlign: 'center',
    fontWeight: '600',
  },
});
