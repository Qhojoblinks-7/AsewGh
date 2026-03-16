import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Play } from 'lucide-react-native';

export const WorkshopFeed = ({ videos = [], onVideoPress }) => {
  if (videos.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyIcon}>
          <Text style={styles.emptyEmoji}>🎥</Text>
        </View>
        <Text style={styles.emptyTitle}>No Active Streams</Text>
        <Text style={styles.emptySubtitle}>
          Your artisan will go live when they start working on your order
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {videos.map((video) => (
        <TouchableOpacity 
          key={video.id} 
          style={styles.videoCard}
          onPress={() => onVideoPress?.(video)}
          activeOpacity={0.9}
        >
          <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
          <View style={styles.playOverlay}>
            <View style={styles.playButton}>
              <Play color="#fff" size={24} fill="#fff" />
            </View>
          </View>
          <View style={styles.videoInfo}>
            <Text style={styles.videoTitle} numberOfLines={1}>{video.title}</Text>
            <Text style={styles.videoDuration}>{video.duration}</Text>
          </View>
          {video.isLive && (
            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>LIVE</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    padding: 32,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  emptyEmoji: {
    fontSize: 28,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 18,
  },
  videoCard: {
    width: '47%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  thumbnail: {
    width: '100%',
    height: 100,
  },
  playOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  playButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoInfo: {
    padding: 8,
    backgroundColor: '#1a1a1a',
  },
  videoTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  videoDuration: {
    fontSize: 10,
    color: '#999',
    marginTop: 2,
  },
  liveBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF3B30',
    marginRight: 4,
  },
  liveText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#fff',
  },
});

export default WorkshopFeed;
