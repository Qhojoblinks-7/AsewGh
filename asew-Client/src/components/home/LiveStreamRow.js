import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Play } from 'lucide-react-native';

const LIVE_STREAMS = [
  { id: '1', title: 'Kente Weaving', viewers: '2.4K', thumbnail: 'https://picsum.photos/200/112' },
  { id: '2', title: 'Tailoring Live', viewers: '890', thumbnail: 'https://picsum.photos/201/112' },
  { id: '3', title: 'Design Process', viewers: '1.1K', thumbnail: 'https://picsum.photos/202/112' },
  { id: '4', title: 'Fabric Selection', viewers: '567', thumbnail: 'https://picsum.photos/203/112' },
];

export const LiveStreamRow = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Artisans, Live</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {LIVE_STREAMS.map((stream) => (
          <Pressable key={stream.id} style={styles.streamItem}>
            <View style={styles.thumbnailContainer}>
              <Image source={{ uri: stream.thumbnail }} style={styles.thumbnail} />
              <View style={styles.playOverlay}>
                <Play size={24} color="#fff" fill="#fff" />
              </View>
              <View style={styles.liveBadge}>
                <Text style={styles.liveText}>LIVE</Text>
              </View>
            </View>
            <Text style={styles.streamTitle}>{stream.title}</Text>
            <Text style={styles.viewers}>{stream.viewers} watching</Text>
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
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  streamItem: {
    width: 160,
  },
  thumbnailContainer: {
    position: 'relative',
    width: 160,
    height: 90,
    borderRadius: 12,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  playIcon: {
    color: '#fff',
    fontSize: 24,
  },
  liveBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#ef4444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  liveText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  streamTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1a1a1a',
    marginTop: 8,
  },
  viewers: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
});
