import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Check, MapPin, Heart, ShoppingBag, Ruler, Clock, Copy, ChevronRight } from 'lucide-react-native';

// Mock Data
const USER_PROFILE = {
  name: 'Alex Mensah',
  avatar: 'https://picsum.photos/200',
  styleBio: 'Lover of Contemporary Kente & Minimalist Silhouettes',
  isVerified: true,
  stats: { orders: 12, saved: 24 },
};

const MEASUREMENTS = [
  { id: '1', label: 'Neck', value: '14.5"', lastUpdated: '2 weeks ago' },
  { id: '2', label: 'Shoulder', value: '18"', lastUpdated: '2 weeks ago' },
  { id: '3', label: 'Chest', value: '40"', lastUpdated: '1 week ago' },
  { id: '4', label: 'Waist', value: '32"', lastUpdated: '1 week ago' },
  { id: '5', label: 'Hips', value: '38"', lastUpdated: '2 weeks ago' },
];

const STYLE_ANALYTICS = {
  modern: 90,
  traditional: 30,
  tags: ['#HandWoven', '#Sustainable', '#AccraStreetwear', '#Minimalist', '#Kente'],
};

const MY_COLLECTION = [
  { id: '1', image: 'https://picsum.photos/300/400', name: 'Royal Kente' },
  { id: '2', image: 'https://picsum.photos/300/401', name: 'Modern Blend' },
  { id: '3', image: 'https://picsum.photos/300/402', name: 'Bridal Elegance' },
];

const WISHLIST = [
  { id: '1', image: 'https://picsum.photos/300/403', name: 'Contemporary' },
  { id: '2', image: 'https://picsum.photos/300/404', name: 'Kente Classic' },
];

const ADDRESS = {
  gps: 'GA-123-4567',
  location: 'Accra, Ghana',
};

// Components
const ProfileHeader = () => (
  <View style={styles.headerSection}>
    <View style={styles.avatarContainer}>
      <Image source={{ uri: USER_PROFILE.avatar }} style={styles.avatar} />
      {USER_PROFILE.isVerified && (
        <View style={styles.verifiedBadge}>
          <Check size={14} color="#fff" />
        </View>
      )}
    </View>
    <Text style={styles.userName}>{USER_PROFILE.name}</Text>
    <Text style={styles.styleBio}>{USER_PROFILE.styleBio}</Text>
    <View style={styles.trustBadges}>
      <View style={styles.badge}>
        <Check size={12} color="#007AFF" />
        <Text style={styles.badgeText}>Top Patron</Text>
      </View>
      <View style={styles.badge}>
        <ShoppingBag size={12} color="#007AFF" />
        <Text style={styles.badgeText}>{USER_PROFILE.stats.orders} Orders</Text>
      </View>
    </View>
  </View>
);

const MeasurementVault = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.cardTitleRow}>
        <Ruler size={20} color="#007AFF" />
        <Text style={styles.cardTitle}>Measurement Vault</Text>
      </View>
      <Text style={styles.lastUpdated}>Last measured: 1 week ago</Text>
    </View>
    <View style={styles.measurementsGrid}>
      {MEASUREMENTS.map((item) => (
        <Pressable key={item.id} style={styles.measurementItem}>
          <Text style={styles.measurementLabel}>{item.label}</Text>
          <Text style={styles.measurementValue}>{item.value}</Text>
        </Pressable>
      ))}
    </View>
  </View>
);

const AnalyticsCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.cardTitleRow}>
        <Heart size={20} color="#007AFF" />
        <Text style={styles.cardTitle}>Style Analytics</Text>
      </View>
    </View>
    <View style={styles.analyticsBars}>
      <View style={styles.analyticsRow}>
        <Text style={styles.analyticsLabel}>Modern</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${STYLE_ANALYTICS.modern}%` }]} />
        </View>
        <Text style={styles.analyticsValue}>{STYLE_ANALYTICS.modern}%</Text>
      </View>
      <View style={styles.analyticsRow}>
        <Text style={styles.analyticsLabel}>Traditional</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${STYLE_ANALYTICS.traditional}%` }]} />
        </View>
        <Text style={styles.analyticsValue}>{STYLE_ANALYTICS.traditional}%</Text>
      </View>
    </View>
    <View style={styles.tagsCloud}>
      {STYLE_ANALYTICS.tags.map((tag, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
  </View>
);

const ClosetStack = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.cardTitleRow}>
        <ShoppingBag size={20} color="#007AFF" />
        <Text style={styles.cardTitle}>My Collection</Text>
      </View>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      {MY_COLLECTION.map((item) => (
        <View key={item.id} style={styles.collectionItem}>
          <Image source={{ uri: item.image }} style={styles.collectionImage} />
          <Text style={styles.collectionName} numberOfLines={1}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
    <View style={styles.wishlistSection}>
      <View style={styles.cardTitleRow}>
        <Heart size={18} color="#FF3B30" />
        <Text style={styles.cardSubtitle}>Wishlist</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {WISHLIST.map((item) => (
          <View key={item.id} style={styles.collectionItem}>
            <Image source={{ uri: item.image }} style={styles.collectionImage} />
            <Text style={styles.collectionName} numberOfLines={1}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

const LocationCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.cardTitleRow}>
        <MapPin size={20} color="#007AFF" />
        <Text style={styles.cardTitle}>Delivery Address</Text>
      </View>
    </View>
    <View style={styles.addressCard}>
      <View style={styles.gpsCode}>
        <Text style={styles.gpsLabel}>Ghana Post GPS</Text>
        <Text style={styles.gpsValue}>{ADDRESS.gps}</Text>
      </View>
      <View style={styles.addressActions}>
        <Pressable style={styles.actionButton}>
          <Copy size={16} color="#007AFF" />
        </Pressable>
        <Pressable style={styles.actionButton}>
          <ChevronRight size={16} color="#8E8E93" />
        </Pressable>
      </View>
    </View>
    <Text style={styles.locationText}>{ADDRESS.location}</Text>
  </View>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader />
        <MeasurementVault />
        <AnalyticsCard />
        <ClosetStack />
        <LocationCard />
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerSection: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
    marginBottom: 4,
  },
  styleBio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 32,
    marginBottom: 12,
  },
  trustBadges: {
    flexDirection: 'row',
    gap: 12,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F7FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#007AFF',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardHeader: {
    marginBottom: 16,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#8E8E93',
    fontStyle: 'italic',
  },
  measurementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  measurementItem: {
    width: '31%',
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  measurementLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
  },
  measurementValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  analyticsBars: {
    marginBottom: 16,
  },
  analyticsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  analyticsLabel: {
    width: 90,
    fontSize: 14,
    color: '#666',
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E5E5EA',
    borderRadius: 4,
    marginRight: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  analyticsValue: {
    width: 40,
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'right',
  },
  tagsCloud: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 13,
    color: '#666',
  },
  horizontalScroll: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  collectionItem: {
    marginRight: 12,
    width: 100,
  },
  collectionImage: {
    width: 100,
    height: 130,
    borderRadius: 12,
    marginBottom: 8,
  },
  collectionName: {
    fontSize: 13,
    color: '#000',
    fontWeight: '500',
  },
  wishlistSection: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F2F2F7',
  },
  addressCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 16,
  },
  gpsCode: {
    flex: 1,
  },
  gpsLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
  },
  gpsValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#000',
    letterSpacing: 1,
  },
  addressActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginTop: 12,
  },
  bottomPadding: {
    height: 100,
  },
});
