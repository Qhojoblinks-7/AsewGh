import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MilestoneStep = ({ label, icon, status = 'pending' }) => {
  const statusColors = {
    completed: '#34C759',
    active: '#007AFF',
    pending: '#C7C7CC',
  };

  const statusBgs = {
    completed: '#E8F5E9',
    active: '#E3F2FD',
    pending: '#F2F2F7',
  };

  return (
    <View style={styles.container}>
      <View style={[styles.iconCircle, { backgroundColor: statusBgs[status] }]}>
        <Text style={styles.icon}>{icon}</Text>
        {status === 'active' && <View style={styles.pulseRing} />}
      </View>
      <Text style={[styles.label, status === 'pending' && styles.labelPending]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 44,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    fontSize: 14,
  },
  pulseRing: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#007AFF',
    opacity: 0.5,
  },
  label: {
    fontSize: 9,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
  labelPending: {
    color: '#C7C7CC',
  },
});

export default MilestoneStep;
