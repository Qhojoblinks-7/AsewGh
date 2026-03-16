import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Home Components
import { BottomTabBar } from '../components/home/BottomTabBar';
import { VerifiedDesigners } from '../components/home/VerifiedDesigners';
import { StyleRadar } from '../components/home/StyleRadar';
import { LogisticsSection } from '../components/home/LogisticsSection';
import { StylePreferences } from '../components/home/StylePreferences';

import { Header } from '../components/home/Header';
import { FeaturedCard } from '../components/home/FeaturedCard';

// DNA Components
import { DnaCard } from '../components/dna/DnaCard';
import { DnaRadar } from '../components/dna/DnaRadar';

// Search Components
import { SearchInput } from '../components/search/SearchInput';
import { CategoryPills } from '../components/search/CategoryPills';
import { ResultCard } from '../components/search/ResultCard';

// Screens
import SettingsScreen from '../screens/SettingsScreen';
import SearchScreen from '../screens/SearchScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrdersScreen from '../screens/OrdersScreen';

const MOCK_DATA = [
  { id: '1', name: 'Kojo Artisans', specialty: 'Kente Expert', location: 'Accra', rating: 4.8, image: 'https://picsum.photos/100', category: 'Kente' },
  { id: '2', name: 'Ama Trends', specialty: 'Modern Afro', location: 'Kumasi', rating: 4.5, image: 'https://picsum.photos/101', category: 'Modern' },
  { id: '3', name: 'Fiifi Stitches', specialty: 'Tailoring Master', location: 'Takoradi', rating: 4.9, image: 'https://picsum.photos/102', category: 'Tailoring' },
  { id: '4', name: 'Nana Styles', specialty: 'Contemporary Wear', location: 'Accra', rating: 4.3, image: 'https://picsum.photos/103', category: 'Modern' },
  { id: '5', name: 'Kente Kingdom', specialty: 'Traditional Kente', location: 'Kumasi', rating: 4.7, image: 'https://picsum.photos/104', category: 'Kente' },
  { id: '6', name: 'Abena Bridal', specialty: 'Bridal Designs', location: 'Accra', rating: 4.6, image: 'https://picsum.photos/105', category: 'Bridal' },
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Home');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter data for search
  const filteredData = MOCK_DATA.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.specialty.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleDNAPress = () => {
    setActiveTab('dna');
  };

  const handleSearchPress = () => {
    setActiveTab('Search');
  };

  const handleProfilePress = () => {
    setActiveTab('Profile');
  };

  const handleBackPress = () => {
    setActiveTab('Home');
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Search':
        return <SearchScreen />;
      
      case 'Explore':
        return <ExploreScreen />;
      
      case 'Orders':
        return <OrdersScreen />;
      
      case 'Settings':
        return <SettingsScreen />;
      
      case 'Profile':
        return <ProfileScreen />;
      
      case 'dna':
        return (
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.dnaContainer}>
              <Text style={styles.dnaTitle}>🧬 Your DNA</Text>
              <Text style={styles.dnaSubtitle}>Your digital measurement & style identity</Text>
              
              {/* DnaCard - Anatomical Strand */}
              <DnaCard />
              
              {/* DnaRadar - Curation Canvas */}
              <DnaRadar />
              
              {/* Bottom padding for tab bar */}
              <View style={styles.bottomPadding} />
            </View>
          </ScrollView>
        );
      
      default:
        return (
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            {/* Featured Trending Card - Full Screen */}
            <FeaturedCard />


            {/* Verified Designers */}
            <VerifiedDesigners />



            

            {/* Bottom padding for tab bar */}
            <View style={styles.bottomPadding} />
          </ScrollView>
        );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {(activeTab === 'Home' || activeTab === 'dna') && (
        <Header 
          onProfilePress={handleProfilePress} 
          onDNAPress={handleDNAPress}
          onBackPress={handleBackPress}
          showBackButton={activeTab === 'dna'}
        />
      )}
      {renderContent()}
      <BottomTabBar activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#f9f9f9' 
  },
  scrollView: { 
    flex: 1 
  },
  hero: {
    padding: 20,
    paddingTop: 30,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#000',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  heroButtons: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 12,
  },
  buttonPrimary: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonSecondary: {
    borderWidth: 1,
    borderColor: '#8E8E93',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonTextPrimary: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: '#8E8E93',
    fontWeight: '600',
  },
  searchContainer: {
    flex: 1,
  },
  searchResults: {
    flex: 1,
    paddingTop: 12,
  },
  emptySearch: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  placeholderText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  bottomPadding: {
    height: 20,
  },
  dnaContainer: {
    flex: 1,
    paddingTop: 20,
  },
  dnaTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 4,
  },
  dnaSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
});
