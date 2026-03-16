import { View, Text, StyleSheet } from 'react-native';

export const StylePreferences = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Style DNA</Text>
      <View style={styles.preferenceRow}>
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceLabel}>Modern</Text>
          <View style={styles.barContainer}>
            <View style={[styles.bar, styles.barModern, { width: '90%' }]} />
          </View>
          <Text style={styles.percentage}>90%</Text>
        </View>
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceLabel}>Traditional</Text>
          <View style={styles.barContainer}>
            <View style={[styles.bar, styles.barTraditional, { width: '30%' }]} />
          </View>
          <Text style={styles.percentage}>30%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  preferenceRow: {
    gap: 8,
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  preferenceLabel: {
    fontSize: 11,
    color: '#999',
    width: 70,
  },
  barContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 4,
  },
  barModern: {
    backgroundColor: '#007AFF',
  },
  barTraditional: {
    backgroundColor: '#f59e0b',
  },
  percentage: {
    fontSize: 11,
    fontWeight: '600',
    color: '#666',
    width: 35,
    textAlign: 'right',
  },
});
