import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ruler, CheckCircle, AlertCircle } from 'lucide-react-native';

const MEASUREMENTS = [
  { key: 'neck', label: 'Neck', value: '14.5"', unit: 'in' },
  { key: 'shoulder', label: 'Shoulder', value: '18"', unit: 'in' },
  { key: 'chest', label: 'Chest', value: '40"', unit: 'in' },
  { key: 'waist', label: 'Waist', value: '32"', unit: 'in' },
  { key: 'hips', label: 'Hips', value: '38"', unit: 'in' },
  { key: 'inseam', label: 'Inseam', value: '30"', unit: 'in' },
  { key: 'sleeve', label: 'Sleeve', value: '24"', unit: 'in' },
];

export const DnaCard = ({ measurements = MEASUREMENTS, confidenceScore = 85, lastUpdated = '2026-03-01' }) => {
  const isProVerified = confidenceScore >= 80;
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Ruler color="#007AFF" size={20} />
          <Text style={styles.title}>Anatomical Strand</Text>
        </View>
        <View style={[
          styles.confidenceBadge,
          isProVerified ? styles.confidenceHigh : styles.confidenceLow
        ]}>
          {isProVerified ? (
            <CheckCircle color="#fff" size={12} />
          ) : (
            <AlertCircle color="#fff" size={12} />
          )}
          <Text style={styles.confidenceText}>
            {confidenceScore}% Confidence
          </Text>
        </View>
      </View>

      {/* Measurements Grid */}
      <View style={styles.grid}>
        {measurements.map((measurement, index) => (
          <View key={measurement.key} style={styles.measurementCard}>
            <Text style={styles.measurementLabel}>{measurement.label}</Text>
            <Text style={styles.measurementValue}>
              {measurement.value}
              <Text style={styles.measurementUnit}> {measurement.unit}</Text>
            </Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Last measured: {lastUpdated}
        </Text>
        {confidenceScore < 80 && (
          <Text style={styles.upgradeText}>
            Upgrade to Asew Pro for higher accuracy →
          </Text>
        )}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  confidenceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  confidenceHigh: {
    backgroundColor: '#34C759',
  },
  confidenceLow: {
    backgroundColor: '#FF9500',
  },
  confidenceText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  measurementCard: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  measurementLabel: {
    fontSize: 12,
    color: '#8e8e93',
    fontWeight: '500',
    marginBottom: 4,
  },
  measurementValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1a1a1a',
  },
  measurementUnit: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8e8e93',
  },
  footer: {
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  footerText: {
    fontSize: 12,
    color: '#8e8e93',
    textAlign: 'center',
  },
  upgradeText: {
    fontSize: 12,
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 4,
    fontWeight: '600',
  },
});

export default DnaCard;
