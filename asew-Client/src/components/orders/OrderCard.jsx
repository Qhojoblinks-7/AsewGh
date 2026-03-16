import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ChevronRight, Clock, MapPin } from 'lucide-react-native';
import { MilestoneStep } from './MilestoneStep';

const ORDER_PHASES = [
  { id: 'confirmed', label: 'Order Confirmed', icon: '✓' },
  { id: 'measurements', label: 'Measurements Verified', icon: '📏' },
  { id: 'fabric', label: 'Fabric Sourcing', icon: '🧵' },
  { id: 'cutting', label: 'Cutting Started', icon: '✂️' },
  { id: 'fitting', label: 'First Fitting', icon: '👔' },
  { id: 'quality', label: 'Quality Check', icon: '✅' },
  { id: 'delivery', label: 'Out for Delivery', icon: '🚚' },
];

export const OrderCard = ({ 
  orderId,
  designName,
  designer,
  designerAvatar,
  price,
  image,
  currentPhase = 'fabric',
  artisanNote,
  deliveryAddress,
  estimatedDate,
  amountPaid,
  balanceDue
}) => {
  const currentPhaseIndex = ORDER_PHASES.findIndex(p => p.id === currentPhase);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.orderIdContainer}>
          <Text style={styles.orderIdLabel}>Order ID</Text>
          <Text style={styles.orderId}>{orderId}</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>In Progress</Text>
        </View>
      </View>

      {/* Design Preview */}
      <View style={styles.designPreview}>
        <Image source={{ uri: image }} style={styles.designImage} />
        <View style={styles.designInfo}>
          <Text style={styles.designName}>{designName}</Text>
          <View style={styles.designerRow}>
            <Image source={{ uri: designerAvatar }} style={styles.designerAvatar} />
            <Text style={styles.designerName}>{designer}</Text>
          </View>
        </View>
      </View>

      {/* Live Pulse */}
      <View style={styles.pulseContainer}>
        <View style={styles.pulseDot} />
        <Text style={styles.pulseText}>
          Currently: {ORDER_PHASES[currentPhaseIndex]?.label}
        </Text>
      </View>

      {/* Artisan Note */}
      {artisanNote && (
        <View style={styles.artisanNote}>
          <Text style={styles.artisanNoteText}>{artisanNote}</Text>
        </View>
      )}

      {/* Milestone Tracker */}
      <View style={styles.milestoneContainer}>
        <Text style={styles.sectionTitle}>Order Progress</Text>
        <View style={styles.milestoneMap}>
          {ORDER_PHASES.map((phase, index) => (
            <MilestoneStep
              key={phase.id}
              label={phase.label}
              icon={phase.icon}
              status={index < currentPhaseIndex ? 'completed' : index === currentPhaseIndex ? 'active' : 'pending'}
            />
          ))}
        </View>
      </View>

      {/* Workshop Feed */}
      <View style={styles.workshopSection}>
        <Text style={styles.sectionTitle}>Your Artisan, Live</Text>
        <View style={styles.workshopPlaceholder}>
          <Text style={styles.workshopText}>No active streams</Text>
          <Text style={styles.workshopSubtext}>Check back later for updates</Text>
        </View>
      </View>

      {/* Delivery Info */}
      <View style={styles.deliverySection}>
        <View style={styles.deliveryRow}>
          <MapPin color="#007AFF" size={18} />
          <Text style={styles.deliveryAddress}>{deliveryAddress}</Text>
        </View>
        <View style={styles.deliveryRow}>
          <Clock color="#007AFF" size={18} />
          <Text style={styles.deliveryDate}>Est. {estimatedDate}</Text>
        </View>
      </View>

      {/* Cost Breakdown */}
      <TouchableOpacity style={styles.costCard}>
        <View style={styles.costRow}>
          <Text style={styles.costLabel}>Total Price</Text>
          <Text style={styles.costValue}>{price}</Text>
        </View>
        <View style={styles.costRow}>
          <Text style={styles.costLabel}>Amount Paid</Text>
          <Text style={styles.paidValue}>{amountPaid}</Text>
        </View>
        <View style={styles.costRow}>
          <Text style={styles.costLabel}>Balance Due</Text>
          <Text style={styles.balanceValue}>{balanceDue}</Text>
        </View>
        <View style={styles.viewDetails}>
          <Text style={styles.viewDetailsText}>View Details</Text>
          <ChevronRight color="#007AFF" size={16} />
        </View>
      </TouchableOpacity>

      {/* Chat Button */}
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Message {designer}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 16,
    padding: 16,
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
  orderIdContainer: {},
  orderIdLabel: {
    fontSize: 11,
    color: '#8E8E93',
    textTransform: 'uppercase',
  },
  orderId: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  statusBadge: {
    backgroundColor: '#34C759',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  designPreview: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  designImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  designInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  designName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  designerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  designerAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  designerName: {
    fontSize: 14,
    color: '#666',
  },
  pulseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FFF4',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34C759',
    marginRight: 8,
  },
  pulseText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34C759',
  },
  artisanNote: {
    backgroundColor: '#F2F2F7',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  artisanNoteText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  milestoneContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  milestoneMap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  workshopSection: {
    marginBottom: 20,
  },
  workshopPlaceholder: {
    height: 120,
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  workshopText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8E8E93',
  },
  workshopSubtext: {
    fontSize: 13,
    color: '#C7C7CC',
    marginTop: 4,
  },
  deliverySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F2F2F7',
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryAddress: {
    fontSize: 13,
    color: '#666',
    marginLeft: 6,
  },
  deliveryDate: {
    fontSize: 13,
    color: '#666',
    marginLeft: 6,
  },
  costCard: {
    backgroundColor: 'rgba(0,122,255,0.08)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,122,255,0.15)',
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  costLabel: {
    fontSize: 14,
    color: '#666',
  },
  costValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  paidValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34C759',
  },
  balanceValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF9500',
  },
  viewDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,122,255,0.15)',
  },
  viewDetailsText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
    marginRight: 4,
  },
  chatButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OrderCard;
