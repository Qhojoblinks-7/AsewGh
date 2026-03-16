import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { X, CreditCard, Download, MessageCircle } from 'lucide-react-native';

export const OrderSummary = ({ visible, onClose, order }) => {
  if (!visible) return null;

  const {
    designName = 'Royal Kente Collection',
    price = '₵2,500',
    amountPaid = '₵1,250',
    balanceDue = '₵1,250',
    designer = 'Kojo Artisans',
    orderDate = '2026-03-01',
    deliveryDate = '2026-03-25',
  } = order || {};

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
      <View style={styles.sheet}>
        <View style={styles.handle} />
        
        <View style={styles.header}>
          <Text style={styles.title}>Order Summary</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X color="#8E8E93" size={24} />
          </TouchableOpacity>
        </View>

        {/* Design Info */}
        <View style={styles.designSection}>
          <Text style={styles.designName}>{designName}</Text>
          <Text style={styles.designer}>by {designer}</Text>
        </View>

        {/* Timeline */}
        <View style={styles.timeline}>
          <View style={styles.timelineRow}>
            <Text style={styles.timelineLabel}>Order Date</Text>
            <Text style={styles.timelineValue}>{orderDate}</Text>
          </View>
          <View style={styles.timelineRow}>
            <Text style={styles.timelineLabel}>Est. Delivery</Text>
            <Text style={styles.timelineValue}>{deliveryDate}</Text>
          </View>
        </View>

        {/* Cost Breakdown */}
        <View style={styles.costSection}>
          <Text style={styles.sectionTitle}>Payment Details</Text>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Total Price</Text>
            <Text style={styles.costValue}>{price}</Text>
          </View>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Amount Paid</Text>
            <Text style={[styles.costValue, { color: '#34C759' }]}>{amountPaid}</Text>
          </View>
          <View style={[styles.costRow, styles.balanceRow]}>
            <Text style={styles.balanceLabel}>Balance Due</Text>
            <Text style={styles.balanceValue}>{balanceDue}</Text>
          </View>
        </View>

        {/* Payment Status */}
        <View style={styles.paymentStatus}>
          <CreditCard color="#007AFF" size={20} />
          <Text style={styles.paymentText}>50% Paid - Deposit Received</Text>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Make Payment</Text>
          </TouchableOpacity>
          <View style={styles.secondaryActions}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Download color="#007AFF" size={18} />
              <Text style={styles.secondaryButtonText}>Invoice</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <MessageCircle color="#007AFF" size={18} />
              <Text style={styles.secondaryButtonText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 40,
  },
  handle: {
    width: 36,
    height: 5,
    backgroundColor: '#D1D1D6',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  closeButton: {
    padding: 4,
  },
  designSection: {
    backgroundColor: '#F2F2F7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  designName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  designer: {
    fontSize: 14,
    color: '#666',
  },
  timeline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  timelineRow: {},
  timelineLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
  },
  timelineValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  costSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8E8E93',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  costLabel: {
    fontSize: 15,
    color: '#666',
  },
  costValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  balanceRow: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F2F2F7',
  },
  balanceLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FF9500',
  },
  paymentStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  paymentText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
    marginLeft: 8,
  },
  actions: {},
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F7',
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
});

export default OrderSummary;
