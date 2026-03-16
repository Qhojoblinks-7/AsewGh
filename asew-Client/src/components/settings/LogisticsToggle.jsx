import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export const LogisticsToggle = ({ 
  icon: Icon, 
  label, 
  value, 
  onValueChange,
  description 
}) => {
  return (
    <View style={styles.container}>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon color="#007AFF" size={20} />
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#E5E5EA', true: '#34C759' }}
        thumbColor="#FFFFFF"
        ios_backgroundColor="#E5E5EA"
      />
    </View>
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
  description: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
});

export default LogisticsToggle;
