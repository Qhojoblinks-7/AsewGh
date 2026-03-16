import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Package, Plus, Clock } from 'lucide-react-native';
import { OrderCard } from '../components/orders/OrderCard';

const MOCK_ORDERS = [
  {
    id: 'ORD-2026-001',
    designName: 'Royal Kente Collection',
    designer: 'Kojo Artisans',
    designerAvatar: 'https://picsum.photos/100',
    price: '₵2,500',
    image: 'https://picsum.photos/800/800',
    currentPhase: 'fabric',
    artisanNote: "Kofi: Just picked up the hand-woven Kente from the loom! Starting the cutting process tomorrow.",
    deliveryAddress: 'GA-123-4567, Accra',
    estimatedDate: 'March 25, 2026',
    amountPaid: '₵1,250',
    balanceDue: '₵1,250',
  },
  {
    id: 'ORD-2026-002',
    designName: 'Modern Afro Blend',
    designer: 'Ama Trends',
    designerAvatar: 'https://picsum.photos/101',
    price: '₵1,800',
    image: 'https://picsum.photos/800/801',
    currentPhase: 'cutting',
    artisanNote: "Ama: The first fitting is scheduled for next week!",
    deliveryAddress: 'GA-123-4567, Accra',
    estimatedDate: 'April 5, 2026',
    amountPaid: '₵900',
    balanceDue: '₵900',
  },
];

export default function OrdersScreen() {
  const [activeTab, setActiveTab] = useState('active');

  const activeOrders = MOCK_ORDERS;
  const completedOrders = [];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Active Orders</Text>
          <TouchableOpacity style={styles.newOrderButton}>
            <Plus color="#fff" size={20} />
          </TouchableOpacity>
        </View>

        {/* Tab Selector */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'active' && styles.tabActive]}
            onPress={() => setActiveTab('active')}
          >
            <Package color={activeTab === 'active' ? '#007AFF' : '#8E8E93'} size={18} />
            <Text style={[styles.tabText, activeTab === 'active' && styles.tabTextActive]}>
              Active ({activeOrders.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'completed' && styles.tabActive]}
            onPress={() => setActiveTab('completed')}
          >
            <Clock color={activeTab === 'completed' ? '#007AFF' : '#8E8E93'} size={18} />
            <Text style={[styles.tabText, activeTab === 'completed' && styles.tabTextActive]}>
              Completed ({completedOrders.length})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Orders List */}
        {activeTab === 'active' ? (
          activeOrders.length > 0 ? (
            activeOrders.map((order) => (
              <OrderCard key={order.id} {...order} />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Package color="#C7C7CC" size={64} />
              <Text style={styles.emptyTitle}>No Active Orders</Text>
              <Text style={styles.emptySubtitle}>
                When you place an order with a designer, it will appear here
              </Text>
              <TouchableOpacity style={styles.exploreButton}>
                <Text style={styles.exploreButtonText}>Explore Designers</Text>
              </TouchableOpacity>
            </View>
          )
        ) : (
          <View style={styles.emptyState}>
            <Clock color="#C7C7CC" size={64} />
            <Text style={styles.emptyTitle}>No Completed Orders</Text>
            <Text style={styles.emptySubtitle}>
              Your completed orders will appear here
            </Text>
          </View>
        )}

        {/* Bottom Padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#000',
  },
  newOrderButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 4,
  },
  tabActive: {
    backgroundColor: '#E3F2FD',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8E8E93',
    marginLeft: 8,
  },
  tabTextActive: {
    color: '#007AFF',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 20,
  },
  exploreButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 24,
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomPadding: {
    height: 100,
  },
});
