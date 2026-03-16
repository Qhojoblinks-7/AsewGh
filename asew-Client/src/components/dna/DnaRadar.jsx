import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Sparkles, Gem } from 'lucide-react-native';

const STYLE_TAGS = [
  { id: 1, label: 'Kente', weight: 25 },
  { id: 2, label: 'Brocade', weight: 20 },
  { id: 3, label: 'Streetwear', weight: 18 },
  { id: 4, label: 'Linen', weight: 15 },
  { id: 5, label: 'Ankara', weight: 12 },
  { id: 6, label: 'Smart Casual', weight: 10 },
];

export const DnaRadar = ({ 
  modernScore = 70, 
  traditionalScore = 30,
  styleTags = STYLE_TAGS 
}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Sparkles color="#007AFF" size={20} />
        <Text style={styles.title}>Curation Canvas</Text>
      </View>

      {/* Style Balance Bar */}
      <View style={styles.balanceContainer}>
        <View style={styles.balanceBar}>
          <View 
            style={[
              styles.traditionalSegment, 
              { width: `${traditionalScore}%` }
            ]} 
          />
          <View 
            style={[
              styles.modernSegment, 
              { width: `${modernScore}%` }
            ]} 
          />
        </View>
        <View style={styles.labels}>
          <View style={styles.labelItem}>
            <Gem color="#FF9500" size={16} />
            <Text style={styles.labelText}>Traditional {traditionalScore}%</Text>
          </View>
          <View style={styles.labelItem}>
            <Sparkles color="#007AFF" size={16} />
            <Text style={styles.labelText}>Modern {modernScore}%</Text>
          </View>
        </View>
      </View>

      {/* Style Tags */}
      <View style={styles.tagsContainer}>
        {styleTags.map((tag) => (
          <View key={tag.id} style={styles.tag}>
            <Text style={styles.tagText}>{tag.label}</Text>
            <View style={styles.weightIndicator}>
              <View 
                style={[
                  styles.weightFill, 
                  { width: `${tag.weight}%` }
                ]} 
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceBar: {
    height: 24,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  traditionalSegment: {
    backgroundColor: '#FF9500',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  modernSegment: {
    backgroundColor: '#007AFF',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  labelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  labelText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  tagsContainer: {
    gap: 10,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    width: 100,
  },
  weightIndicator: {
    flex: 1,
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginLeft: 12,
  },
  weightFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
});

export default DnaRadar;
