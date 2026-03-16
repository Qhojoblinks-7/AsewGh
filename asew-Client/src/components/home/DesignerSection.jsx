import { View, Text, FlatList, StyleSheet } from 'react-native';
import { DesignerCard } from './DesignerCard';

export const DesignerSection = ({ title, data }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <DesignerCard 
          name={item.name} 
          specialty={item.specialty} 
          image={item.image} 
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { marginVertical: 20, paddingLeft: 20 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 15, color: '#1a1a1a' },
});
