import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { User, Dna, ArrowLeft } from 'lucide-react-native';

export const Header = ({ onProfilePress, onDNAPress, onBackPress, showBackButton = false }) => {
  return (
    <View style={styles.container}>
      {showBackButton ? (
        <TouchableOpacity 
          style={styles.searchButton} 
          onPress={onBackPress}
          activeOpacity={0.7}
        >
          <ArrowLeft color="#000" size={22} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity 
          style={styles.searchButton} 
          onPress={onProfilePress}
          activeOpacity={0.7}
        >
          <User color="#000" size={22} />
        </TouchableOpacity>
      )}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Asew</Text>
      </View>
      {!showBackButton && (
        <TouchableOpacity 
          style={styles.dnaButton} 
          onPress={onDNAPress}
          activeOpacity={0.7}
        >
          <Dna color="#007AFF" size={22} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f9f9f9',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
  },
  dnaButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
});
