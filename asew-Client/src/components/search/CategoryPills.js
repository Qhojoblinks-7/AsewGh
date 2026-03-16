import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const CATEGORIES = ['All', 'Kente', 'Tailoring', 'Modern', 'Afro', 'Streetwear', 'Bridal'];

export const CategoryPills = ({ selectedCategory, onSelectCategory }) => (
  <View style={styles.container}>
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {CATEGORIES.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.pill,
            selectedCategory === category && styles.pillSelected,
          ]}
          onPress={() => onSelectCategory(category)}
        >
          <Text
            style={[
              styles.pillText,
              selectedCategory === category && styles.pillTextSelected,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
  },
  pillSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  pillText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  pillTextSelected: {
    color: '#fff',
  },
});
