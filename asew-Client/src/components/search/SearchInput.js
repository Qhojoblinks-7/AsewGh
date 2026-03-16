import { View, TextInput, StyleSheet } from 'react-native';
import { Search } from 'lucide-react-native';

export const SearchInput = ({ value, onChange }) => (
  <View style={styles.wrapper}>
    <View style={styles.inputContainer}>
      <Search size={18} color="#999" style={{ marginRight: 8 }} />
      <TextInput
        style={styles.input}
        placeholder="Search for designers or styles..."
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChange}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: '#f9f9f9' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1a1a1a',
  },
});
