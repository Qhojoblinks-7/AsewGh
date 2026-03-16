import React, { useState, useMemo } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchInput } from '../components/search/SearchInput';
import { CategoryPills } from '../components/search/CategoryPills';
import { ResultCard } from '../components/search/ResultCard';
import { ChevronLeft } from 'lucide-react-native';

const MOCK_DATA = [
  { id: '1', name: 'Kojo Artisans', specialty: 'Kente Expert', location: 'Accra', rating: 4.8, image: 'https://picsum.photos/100', category: 'Kente' },
  { id: '2', name: 'Ama Trends', specialty: 'Modern Afro', location: 'Kumasi', rating: 4.5, image: 'https://picsum.photos/101', category: 'Modern' },
  { id: '3', name: 'Fiifi Stitches', specialty: 'Tailoring Master', location: 'Takoradi', rating: 4.9, image: 'https://picsum.photos/102', category: 'Tailoring' },
  { id: '4', name: 'Nana Styles', specialty: 'Contemporary Wear', location: 'Accra', rating: 4.3, image: 'https://picsum.photos/103', category: 'Modern' },
  { id: '5', name: 'Kente Kingdom', specialty: 'Traditional Kente', location: 'Kumasi', rating: 4.7, image: 'https://picsum.photos/104', category: 'Kente' },
  { id: '6', name: 'Abena Bridal', specialty: 'Bridal Designs', location: 'Accra', rating: 4.6, image: 'https://picsum.photos/105', category: 'Bridal' },
];

export default function SearchScreen({ onBack }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter data based on search text and selected category
  const filteredData = useMemo(() => {
    return MOCK_DATA.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.specialty.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={onBack}
        >
          <ChevronLeft size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Discover Artisans</Text>
      </View>
      <SearchInput value={search} onChange={setSearch} />
      <CategoryPills 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResultCard item={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No designers found.</Text>
            <Text style={styles.emptySubtext}>Try adjusting your search or filters</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f9f9f9' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 4,
  },
  backIcon: {
    fontSize: 24,
    color: '#1a1a1a',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    marginLeft: 12,
  },
  listContent: { 
    paddingTop: 12,
    paddingBottom: 20 
  },
  empty: { 
    alignItems: 'center', 
    marginTop: 60,
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
});
