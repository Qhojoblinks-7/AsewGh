import { View, Text, StyleSheet } from 'react-native';

export const LogisticsSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.logisticsBox}>
          <Text style={styles.icon}>📍</Text>
          <View style={styles.logisticsContent}>
            <Text style={styles.logisticsLabel}>Ghana Post GPS</Text>
            <Text style={styles.logisticsValue}>GA-123-4567</Text>
          </View>
        </View>
        
        <View style={styles.certificationBadge}>
          <Text style={styles.certIcon}>✓</Text>
          <Text style={styles.certText}>Certified by GRA</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logisticsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  icon: {
    fontSize: 20,
  },
  logisticsContent: {
    marginLeft: 8,
  },
  logisticsLabel: {
    fontSize: 10,
    color: '#999',
  },
  logisticsValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  certificationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10b981',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
  },
  certIcon: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  certText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    marginLeft: 4,
  },
});
