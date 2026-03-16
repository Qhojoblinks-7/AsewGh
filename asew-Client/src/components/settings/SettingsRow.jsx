import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

export const SettingsRow = ({ icon: Icon, label, value, onPress, showChevron = true }) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon color="#007AFF" size={20} />
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        {value && <Text style={styles.value}>{value}</Text>}
      </View>
      {showChevron && (
        <ChevronRight color="#C7C7CC" size={20} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5EA',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
});

export default SettingsRow;
